import { Router, Request, Response } from 'express';
import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Config } from '../utils/S3Config';
import validateBucketVariables from '../utils/validateBucketVariables';
import mountPDF from '../middleware/mountPDF';
import { generateHexHash } from '../utils/generateRandomHash';

const router: Router = Router();
const configs: S3Config = validateBucketVariables();

const s3 = new S3Client({
    region: configs.bucketRegion,
    credentials: {
        accessKeyId: configs.bucketAccessKey,
        secretAccessKey: configs.bucketSecretAccessKey,
    },
});

router.get(
    '/s3/objects/unsignedURL/:id',
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const params = {
            Bucket: configs.bucketName,
            Key: id,
        };
        const command = new GetObjectCommand(params);
        const url = await getSignedUrl(s3, command, { expiresIn: 300 });
        res.send(url);
    },
);

router.post('/s3/objects', mountPDF, async (req: Request, res: Response) => {
    const key = generateHexHash();

    const params = {
        Bucket: configs.bucketName,
        Key: key,
        Body: req.file?.buffer,
        ContentType: req.file?.mimetype,
    };
    const command = new PutObjectCommand(params);

    await s3.send(command);

    res.status(201);
    res.send({ objectKey: key });
});

export default router;

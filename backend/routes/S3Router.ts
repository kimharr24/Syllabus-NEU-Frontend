import { Router, Request, Response } from 'express';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { S3Config } from '../utils/S3Config';
import validateBucketVariables from '../utils/validateBucketVariables';
import mountPDF from '../middleware/mountPDF';

const router: Router = Router();
const configs: S3Config = validateBucketVariables();

const s3 = new S3Client({
    region: configs.bucketRegion,
    credentials: {
        accessKeyId: configs.bucketAccessKey,
        secretAccessKey: configs.bucketSecretAccessKey,
    },
});

router.get('/syllabi', (req: Request, res: Response) => {
    res.send('Here are all the syllabi!');
});

router.post('/post/syllabus', mountPDF, async (req: Request, res: Response) => {
    const params = {
        Bucket: configs.bucketName,
        Key: req.file?.originalname,
        Body: req.file?.buffer,
        ContentType: req.file?.mimetype,
    };
    const command = new PutObjectCommand(params);

    await s3.send(command);

    res.status(201);
    res.send({});
});

export default router;
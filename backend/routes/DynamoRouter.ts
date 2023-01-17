import { Router, Request, Response } from 'express';
import {
    DynamoDBClient,
    PutItemCommand,
    ScanCommand,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { S3Config } from '../utils/S3Config';
import { DynamoConfig } from '../utils/DynamoConfig';
import validateDynamoVariables from '../utils/validateDynamoVariables';
import validateBucketVariables from '../utils/validateBucketVariables';

const router: Router = Router();
const dynamoConfigs: DynamoConfig = validateDynamoVariables();
const s3Configs: S3Config = validateBucketVariables();

const dynamo = new DynamoDBClient({
    region: dynamoConfigs.dynamoRegion,
    credentials: {
        accessKeyId: dynamoConfigs.dynamoAccessKey,
        secretAccessKey: dynamoConfigs.dynamoSecretAccessKey,
    },
});

const s3 = new S3Client({
    region: s3Configs.bucketRegion,
    credentials: {
        accessKeyId: s3Configs.bucketAccessKey,
        secretAccessKey: s3Configs.bucketSecretAccessKey,
    },
});

router.get('/dynamo/objects', async (req: Request, res: Response) => {
    const params = {
        TableName: dynamoConfigs.dynamoTableName,
    };
    const command = new ScanCommand(params);
    const dynamoOutput = await dynamo.send(command);

    const marshalledObjectArray = dynamoOutput.Items ?? [];
    const unmarshalledObjects = marshalledObjectArray.map((record) =>
        unmarshall(record),
    );

    // eslint-disable-next-line no-restricted-syntax
    for (const object of unmarshalledObjects) {
        const getS3ObjectParams = {
            Bucket: s3Configs.bucketName,
            Key: object.id,
        };
        const s3Command = new GetObjectCommand(getS3ObjectParams);
        // eslint-disable-next-line no-await-in-loop
        const url = await getSignedUrl(s3, s3Command, { expiresIn: 600 });
        object.syllabusURL = url;
    }

    if (marshalledObjectArray.length > 0) {
        res.send(unmarshalledObjects);
    } else {
        res.send([]);
    }
});

router.post('/dynamo/objects', async (req: Request, res: Response) => {
    const params = {
        TableName: dynamoConfigs.dynamoTableName,
        Item: marshall({
            id: req.body.id,
            credits: req.body.credits,
            description: req.body.description,
            professor: {
                fullName: req.body.professor.fullName,
                email: req.body.professor.email,
            },
            courseNumber: req.body.courseNumber,
            courseTitle: req.body.courseTitle,
            semester: req.body.semester,
        }),
    };

    const command = new PutItemCommand(params);
    await dynamo.send(command);

    res.status(201);
    res.send({});
});

export default router;

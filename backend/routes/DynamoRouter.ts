import { Router, Request, Response } from 'express';
import {
    DynamoDBClient,
    PutItemCommand,
    ScanCommand,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { DynamoConfig } from '../utils/DynamoConfig';
import validateDynamoVariables from '../utils/validateDynamoVariables';

const router: Router = Router();
const dynamoConfigs: DynamoConfig = validateDynamoVariables();

const dynamo = new DynamoDBClient({
    region: dynamoConfigs.dynamoRegion,
    credentials: {
        accessKeyId: dynamoConfigs.dynamoAccessKey,
        secretAccessKey: dynamoConfigs.dynamoSecretAccessKey,
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
            syllabusURL: '',
        }),
    };

    const command = new PutItemCommand(params);
    await dynamo.send(command);

    res.status(201);
    res.send({});
});

export default router;

import { Router, Request, Response } from 'express';
import {
    DynamoDBClient,
    PutItemCommand,
    ScanCommand,
} from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { DynamoConfig } from '../utils/DynamoConfig';
import validateDynamoVariables from '../utils/validateDynamoVariables';
import { generateDecimalHash } from '../utils/generateRandomHash';

const router: Router = Router();
const configs: DynamoConfig = validateDynamoVariables();

const dynamo = new DynamoDBClient({
    region: configs.dynamoRegion,
    credentials: {
        accessKeyId: configs.dynamoAccessKey,
        secretAccessKey: configs.dynamoSecretAccessKey,
    },
});

router.get('/dynamo/objects', async (req: Request, res: Response) => {
    const params = {
        TableName: configs.dynamoTableName,
    };
    const command = new ScanCommand(params);
    const dynamoOutput = await dynamo.send(command);

    const marshalledObjectArray = dynamoOutput.Items ?? [];
    const unmarshalledObjects = marshalledObjectArray.map((record) =>
        unmarshall(record),
    );

    res.send(unmarshalledObjects);
});

router.post('/dynamo/objects', async (req: Request, res: Response) => {
    const params = {
        TableName: configs.dynamoTableName,
        Item: marshall({
            id: generateDecimalHash(),
            fake: 'some fake data',
        }),
    };

    const command = new PutItemCommand(params);
    await dynamo.send(command);

    res.status(201);
    res.send({});
});

export default router;

import { Router, Request, Response } from 'express';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
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

router.post('/post/dynamo', async (req: Request, res: Response) => {
    const params = {
        TableName: configs.dynamoTableName,
        Item: {
            id: {
                N: generateDecimalHash(),
            },
            person: { S: 'hello' },
        },
    };

    const command = new PutItemCommand(params);
    await dynamo.send(command);

    res.status(201);
    res.send({});
});

export default router;

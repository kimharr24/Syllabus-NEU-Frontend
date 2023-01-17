import dotenv from 'dotenv';
import { EnvStatus, validateEnvironmentVariable } from './EnvStatus';
import { DynamoConfig } from './DynamoConfig';
import { andMap } from './andMap';

dotenv.config();

const validateDynamoVariables = (): DynamoConfig => {
    const accessKey: EnvStatus = validateEnvironmentVariable(
        process.env.DYNAMO_ACCESS_KEY,
    );
    const secretAccessKey: EnvStatus = validateEnvironmentVariable(
        process.env.DYNAMO_SECRET_ACCESS_KEY,
    );
    const region: EnvStatus = validateEnvironmentVariable(
        process.env.DYNAMO_AWS_REGION,
    );
    const tableName: EnvStatus = validateEnvironmentVariable(
        process.env.DYNAMO_TABLE_NAME,
    );

    if (
        !andMap(
            accessKey.valid,
            secretAccessKey.valid,
            region.valid,
            tableName.valid,
        )
    ) {
        throw new Error(
            'Check missing/incorrect DynamoDB environment variables in .env',
        );
    } else {
        return {
            dynamoAccessKey: accessKey.data,
            dynamoSecretAccessKey: secretAccessKey.data,
            dynamoRegion: region.data,
            dynamoTableName: tableName.data,
        };
    }
};

export default validateDynamoVariables;

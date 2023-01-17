import dotenv from 'dotenv';
import { S3Config } from './S3Config';
import { EnvStatus, validateEnvironmentVariable } from './EnvStatus';
import { andMap } from './andMap';

dotenv.config();

const validateBucketVariables = (): S3Config => {
    const bucketName: EnvStatus = validateEnvironmentVariable(
        process.env.BUCKET_NAME,
    );
    const bucketRegion: EnvStatus = validateEnvironmentVariable(
        process.env.BUCKET_REGION,
    );
    const bucketAccessKey: EnvStatus = validateEnvironmentVariable(
        process.env.BUCKET_ACCESS_KEY,
    );
    const bucketSecretAccessKey: EnvStatus = validateEnvironmentVariable(
        process.env.BUCKET_SECRET_ACCESS_KEY,
    );
    if (
        !andMap(
            bucketName.valid,
            bucketRegion.valid,
            bucketAccessKey.valid,
            bucketSecretAccessKey.valid,
        )
    ) {
        throw new Error(
            'Check missing/incorrect S3 environment variables in .env',
        );
    } else {
        return {
            bucketName: bucketName.data,
            bucketRegion: bucketRegion.data,
            bucketAccessKey: bucketAccessKey.data,
            bucketSecretAccessKey: bucketSecretAccessKey.data,
        };
    }
};

export default validateBucketVariables;

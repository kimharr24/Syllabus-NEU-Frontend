import dotenv from 'dotenv';
import { S3Config } from './S3Config';

dotenv.config();

interface EnvStatus {
    valid: boolean;
    data: string;
}

// reusable for DynamoDB variables
const validateEnvironmentVariable = (key: string | undefined): EnvStatus => {
    return key ? { valid: true, data: key } : { valid: false, data: '' };
};

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
        !bucketName.valid ||
        !bucketRegion.valid ||
        !bucketAccessKey.valid ||
        !bucketSecretAccessKey.valid
    ) {
        throw new Error(
            'Check missing/incorrect environment variables in .env',
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

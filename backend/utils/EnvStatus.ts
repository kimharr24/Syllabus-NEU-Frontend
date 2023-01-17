export interface EnvStatus {
    valid: boolean;
    data: string;
}

export const validateEnvironmentVariable = (
    key: string | undefined,
): EnvStatus => {
    return key ? { valid: true, data: key } : { valid: false, data: '' };
};

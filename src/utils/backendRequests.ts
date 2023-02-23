/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import merge from 'ts-deepmerge';
import { Syllabus } from '../interfaces/Syllabus';

const DEV_URL = 'http://localhost:5000';
const BACKEND_URL = 'https://syllabus-neu-backend.vercel.app/';

export const uploadToS3Bucket = async (fileToUpload: File): Promise<string> => {
    const formData = new FormData();
    formData.append('pdf-file', fileToUpload);
    const { data } = await axios.post(
        `${BACKEND_URL}/api/s3/objects`,
        formData,
        {
            headers: { 'Content-Type': 'multipart/form-data' },
        },
    );
    return data.objectKey;
};

export const uploadToDynamoDB = async (key: string, formData: Syllabus) => {
    const keyObject = { id: key };
    const params = JSON.stringify(merge(formData, keyObject));

    await axios.post(`${BACKEND_URL}/api/dynamo/objects`, params, {
        headers: { 'Content-Type': 'application/json' },
    });
};

export const uploadToS3DynamoPipeline = async (
    file: File,
    formData: Syllabus,
) => {
    const key = await uploadToS3Bucket(file);
    await uploadToDynamoDB(key, formData);
};

export const getUnsignedURL = async (key: string) => {
    const { data } = await axios.get(
        `${BACKEND_URL}/api/s3/objects/unsignedURL/${key}`,
    );
    return data;
};

export const getDynamoDBItems = async () => {
    const { data } = await axios.get(`${BACKEND_URL}/api/dynamo/objects`);
    return data;
};

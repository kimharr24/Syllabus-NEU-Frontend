/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import merge from 'ts-deepmerge';
import { Syllabus } from '../assets/Syllabus';

const API_PORT = 5000;

export const uploadToS3Bucket = async (fileToUpload: File): Promise<string> => {
    const formData = new FormData();
    formData.append('pdf-file', fileToUpload);
    const { data } = await axios.post(
        `http://localhost:${API_PORT}/api/s3/objects`,
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

    await axios.post(
        `http://localhost:${API_PORT}/api/dynamo/objects`,
        params,
        {
            headers: { 'Content-Type': 'application/json' },
        },
    );
};

export const getUnsignedURL = async (key: string) => {
    const { data } = await axios.get(
        `http://localhost:${API_PORT}/api/s3/objects/unsignedURL/${key}`,
    );
    return data;
};

export const getDynamoDBItems = async () => {
    const { data } = await axios.get(
        `http://localhost:${API_PORT}/api/dynamo/objects`,
    );
    return data;
};

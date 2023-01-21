/* eslint-disable no-console */
import express, { Express } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import S3Router from './routes/S3Router';
import DynamoRouter from './routes/DynamoRouter';

dotenv.config();

const app: Express = express();
const API_PORT = process.env.API_PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/api', S3Router);
app.use('/api', DynamoRouter);

app.listen(API_PORT, () => {
    console.log(`App is listening on port ${API_PORT}.`);
});

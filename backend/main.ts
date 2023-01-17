/* eslint-disable no-console */
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import S3Router from './routes/S3Router';
import DynamoRouter from './routes/DynamoRouter';

dotenv.config();

const app: Express = express();
const port = process.env.API_PORT || 4000;

app.use(express.json());
app.use(cors());
app.use('/api', S3Router);
app.use('/api', DynamoRouter);

app.get('/fake', (req: Request, res: Response) => {
    res.send({ data: 'some data' });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}.`);
});

/* eslint-disable no-console */
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import example from './middleware/example';

const app: Express = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get('/', example, (req: Request, res: Response) => {
    res.send('Hello world');
});

app.get('/fake', (req, res) => {
    res.send({ data: 'some data' });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}.`);
});

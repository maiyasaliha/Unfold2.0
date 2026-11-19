//initialize application, create and hold the environment config
import express from 'express';
import router from './src/routes/routes.js';
import cors from 'cors';

const app = express();

app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(express.json({ limit: '10mb' }));

app.use(cors());

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(router);

export default app;

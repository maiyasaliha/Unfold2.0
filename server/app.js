//initialize application, create and hold the environment config
import express from 'express';
import sequelize from './src/utils/database.js';
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

sequelize.sync(); 

app.listen(5000, () => {
    console.log('Server listening on port 5000');
}); //listening for requests
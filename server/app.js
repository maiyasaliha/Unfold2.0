//initialize application, create and hold the environment config
import express from 'express';
import sequelize from './src/utils/database.js';
//import router from './src/routes/routes.js';
import mysql from 'mysql';
import cors from 'cors';
import db from './src/models/user.js'

const app = express();


app.use(express.json());
app.use(cors());


import router from './src/routes/User.js';
app.use("/auth", router);


sequelize.sync();

app.listen(5000, () => {
    console.log('Server listening on port 5000');
}); //listening for requests
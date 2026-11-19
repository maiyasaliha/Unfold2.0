import request from 'supertest';
import app from '../app.js';
import sequelize from '../src/utils/database.js';

export const api = () => request(app);

export async function resetDb() {
    await sequelize.sync({ force: true });
}

export async function signupAndLogin(email, password = 'pw', name = email.split('@')[0]) {
    await api().post('/signup').send({ email, name, password });
    const res = await api().post('/login').send({ email, password });
    return res.body.token;
}

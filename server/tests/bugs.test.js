import { test, beforeEach, afterEach, mock } from 'node:test';
import assert from 'node:assert/strict';
import { api, resetDb, signupAndLogin } from './helpers.js';
import User from '../src/models/user.js';
import UserPreference from '../src/models/userPreference.js';

beforeEach(resetDb);
afterEach(() => mock.restoreAll());

const bearer = (token) => ({ Authorization: `Bearer ${token}` });

// B1
test('getPicture returns the picture saved with SetDp', async () => {
    const t = await signupAndLogin('a@x.com');
    await api().post('/birthday').set(bearer(t)).send({ birthday: '2000-01-01' });
    await api().post('/SetDp').set(bearer(t)).send({ profilepicture: 'me.jpg' });
    const res = await api().get('/getPicture').set(bearer(t));
    assert.equal(res.status, 200);
    assert.equal(res.body, 'me.jpg');
});

// B2
test('signup responds with an error instead of hanging when the DB fails', async () => {
    mock.method(User, 'findOne', async () => { throw new Error('db down'); });
    const res = await api().post('/signup').timeout(2000)
        .send({ email: 'a@x.com', name: 'A', password: 'pw' });
    assert.equal(res.status, 500);
});

// B3
test('a failed preference update is reported as an error, not success', async () => {
    const t = await signupAndLogin('a@x.com');
    mock.method(UserPreference, 'update', async () => { throw new Error('db down'); });
    const res = await api().post('/gender').set(bearer(t)).send({ gender: 'female' });
    assert.equal(res.status, 500);
});

test('a preference update is saved before the response is sent', async () => {
    const t = await signupAndLogin('a@x.com');
    await api().post('/birthday').set(bearer(t)).send({ birthday: '2000-01-01' });
    await api().post('/gender').set(bearer(t)).send({ gender: 'female' });
    const res = await api().get('/getPreference').set(bearer(t));
    assert.equal(res.body.gender, 'female');
});


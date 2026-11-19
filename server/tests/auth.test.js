import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { api, resetDb } from './helpers.js';

beforeEach(resetDb);

test('signup creates a user', async () => {
    const res = await api().post('/signup').send({ email: 'a@x.com', name: 'A', password: 'pw' });
    assert.equal(res.status, 200);
});

test('signup rejects a duplicate email', async () => {
    await api().post('/signup').send({ email: 'a@x.com', name: 'A', password: 'pw' });
    const res = await api().post('/signup').send({ email: 'a@x.com', name: 'A', password: 'pw' });
    assert.equal(res.status, 409);
});

test('signup without a password is a 400', async () => {
    const res = await api().post('/signup').send({ email: 'a@x.com', name: 'A' });
    assert.equal(res.status, 400);
});

test('login returns a token for correct credentials', async () => {
    await api().post('/signup').send({ email: 'a@x.com', name: 'A', password: 'pw' });
    const res = await api().post('/login').send({ email: 'a@x.com', password: 'pw' });
    assert.equal(res.status, 200);
    assert.ok(res.body.token);
});

test('login rejects a wrong password', async () => {
    await api().post('/signup').send({ email: 'a@x.com', name: 'A', password: 'pw' });
    const res = await api().post('/login').send({ email: 'a@x.com', password: 'nope' });
    assert.equal(res.status, 401);
});

test('unknown routes return 404', async () => {
    const res = await api().get('/does-not-exist');
    assert.equal(res.status, 404);
});

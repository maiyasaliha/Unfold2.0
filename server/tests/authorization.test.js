import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import jwt from 'jsonwebtoken';
import { api, resetDb, signupAndLogin } from './helpers.js';

beforeEach(resetDb);

const bearer = (token) => ({ Authorization: `Bearer ${token}` });

test('data routes reject requests without a token', async () => {
    for (const [method, path] of [
        ['get', '/getUsers'], ['get', '/getItem'], ['get', '/getPreference'],
        ['post', '/addItemwithdesc'], ['post', '/like'], ['post', '/updatePreference'],
    ]) {
        const res = await api()[method](path).send({});
        assert.equal(res.status, 401, `${method.toUpperCase()} ${path}`);
    }
});

test('a token signed with the wrong secret is rejected', async () => {
    const forged = jwt.sign({ userId: 1, email: 'a@x.com' }, 'secret');
    const res = await api().get('/private').set(bearer(forged));
    assert.equal(res.status, 401);
});

test('/getUsers never exposes emails or password hashes', async () => {
    const token = await signupAndLogin('alice@x.com');
    await signupAndLogin('bob@x.com');
    const res = await api().get('/getUsers').set(bearer(token));
    assert.equal(res.status, 200);
    assert.equal(res.body.length, 2);
    for (const user of res.body) {
        assert.equal(user.password, undefined);
        assert.equal(user.email, undefined);
        assert.ok(user.name);
    }
});

test('/getUser does not return the password hash', async () => {
    const token = await signupAndLogin('alice@x.com');
    const res = await api().get('/getUser').set(bearer(token));
    assert.equal(res.status, 200);
    assert.equal(res.body.password, undefined);
});

test('writes use the logged-in user, not a userId in the body', async () => {
    const alice = await signupAndLogin('alice@x.com');
    const bob = await signupAndLogin('bob@x.com');
    // Bob tries to add an item to Alice's wardrobe (Alice is user 1)
    await api().post('/addItemwithdesc').set(bearer(bob))
        .send({ userId: 1, image: 'sneaky.jpg', type: 'top' });
    const aliceItems = await api().get('/getItem').set(bearer(alice));
    assert.equal(aliceItems.body.length, 0);
    const bobItems = await api().get('/getItem').set(bearer(bob));
    assert.equal(bobItems.body.length, 1);
});

test('a user cannot like another user\'s item', async () => {
    const alice = await signupAndLogin('alice@x.com');
    const bob = await signupAndLogin('bob@x.com');
    await api().post('/addItemwithdesc').set(bearer(alice)).send({ image: 'a.jpg', type: 'top' });
    await api().post('/like').set(bearer(bob)).send({ imageurl: 'a.jpg', favourite: 1 });
    const res = await api().get('/getLike?imageurl=a.jpg').set(bearer(alice));
    assert.equal(res.body, false);
});

test('personal preferences are only readable by their owner', async () => {
    const alice = await signupAndLogin('alice@x.com');
    const bob = await signupAndLogin('bob@x.com');
    await api().post('/birthday').set(bearer(alice)).send({ birthday: '2000-01-01' });
    const res = await api().get('/getPreference?userId=1').set(bearer(bob));
    assert.notEqual(res.status, 200);
});

test('friends can still view each other\'s wardrobe', async () => {
    const alice = await signupAndLogin('alice@x.com');
    const bob = await signupAndLogin('bob@x.com');
    await api().post('/addItemwithdesc').set(bearer(alice)).send({ image: 'a.jpg', type: 'top' });
    const res = await api().get('/getItem?userId=1').set(bearer(bob));
    assert.equal(res.status, 200);
    assert.equal(res.body.length, 1);
});

test('signup returns a token so onboarding can save preferences', async () => {
    const res = await api().post('/signup').send({ email: 'a@x.com', name: 'A', password: 'pw' });
    assert.ok(res.body.token);
    const pref = await api().post('/birthday').set(bearer(res.body.token)).send({ birthday: '2000-01-01' });
    assert.equal(pref.status, 200);
});

test('/getId returns the logged-in user\'s id', async () => {
    await signupAndLogin('alice@x.com');
    const bob = await signupAndLogin('bob@x.com');
    const res = await api().get('/getId?email=alice@x.com').set(bearer(bob));
    assert.deepEqual(res.body, { userId: 2 });
});

// Characterisation tests: pin current behaviour before refactoring the
// per-field preference setters and per-type clothing getters.
import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { api, resetDb, signupAndLogin } from './helpers.js';

beforeEach(resetDb);

const bearer = (token) => ({ Authorization: `Bearer ${token}` });

const setters = {
    location: 'Singapore',
    gender: 'female',
    height: 160,
    skintone: 'warm',
    faceshape: 'oval',
    bodyshape: 'hourglass',
    colourCombos: 'pastels',
    styles: 'casual',
};

for (const [field, value] of Object.entries(setters)) {
    test(`POST /${field} saves ${field} and replies with the same message`, async () => {
        const t = await signupAndLogin('a@x.com');
        const res = await api().post(`/${field}`).set(bearer(t)).send({ [field]: value });
        assert.equal(res.status, 200);
        const label = field === 'colourCombos' ? 'colourCombos' : field;
        assert.deepEqual(res.body, { message: `${label} inserted/updated` });
        const pref = await api().get('/getPreference').set(bearer(t));
        assert.equal(pref.body[field], value);
    });
}

const categories = {
    getTops: 'top',
    getBottoms: 'bottom',
    getOnepiece: 'onepiece',
    getShoes: 'shoe',
    getAccessories: 'accessories',
};

test('category getters return only that type, only for the caller', async () => {
    const alice = await signupAndLogin('alice@x.com');
    const bob = await signupAndLogin('bob@x.com');
    for (const type of Object.values(categories)) {
        await api().post('/addItemwithdesc').set(bearer(alice)).send({ image: `a-${type}.jpg`, type });
        await api().post('/addItemwithdesc').set(bearer(bob)).send({ image: `b-${type}.jpg`, type });
    }
    for (const [route, type] of Object.entries(categories)) {
        const res = await api().get(`/${route}`).set(bearer(alice));
        assert.equal(res.status, 200, route);
        assert.deepEqual(res.body.map((i) => i.imageurl), [`a-${type}.jpg`], route);
    }
});

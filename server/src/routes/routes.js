//defines API endpoints using express
import express from 'express';
import { requireAuth, asSelf, defaultToSelf } from '../middleware/auth.js';
import { signup, login, isAuth } from '../controllers/auth.js';
import {
    birthday,
    gender,
    height,
    faceshape,
    bodyshape,
    colourCombos,
    skintone,
    styles,
    preference,
    getId,
    location,
    getUser,
    getPreference,
    getName,
    SetDp,
    getPicture,
    getUsers,
    updateBirthday,
    updatePreference
} from '../controllers/preference.js';

import {
    addItemwithdesc,
    getItem,
    getFavItems,
    like,
    getItemfromurl,
    getTops,
    getBottoms,
    getOnepiece,
    getShoes,
    getAccessories,
    getOutfits,
    addOutfit,
    getLike
} from '../controllers/clothing.js';



const router = express.Router();

// self: acts on the logged-in user's own data (userId comes from the token)
// reader: any logged-in user, may read another user's wardrobe
const self = [requireAuth, asSelf];
const reader = [requireAuth, defaultToSelf];

//auth
router.post('/login', login);
router.post('/signup', signup);
router.get('/private', requireAuth, isAuth);

//preference
router.post('/preference', ...self, preference);
router.post('/birthday', ...self, birthday);
router.post('/location', ...self, location);
router.post('/gender', ...self, gender);
router.post('/height', ...self, height);
router.post('/faceshape', ...self, faceshape);
router.post('/bodyshape', ...self, bodyshape);
router.post('/colourCombos', ...self, colourCombos);
router.post('/skintone', ...self, skintone);
router.post('/styles', ...self, styles);
router.get('/getId', ...self, getId);
router.get('/getPreference', ...self, getPreference);
router.get('/getUser', ...self, getUser);
router.get('/getName', ...self, getName);
router.post('/SetDp', ...self, SetDp);
router.get('/getPicture', ...self, getPicture);
router.post('/updateBirthday', ...self, updateBirthday);
router.post('/updatePreference', ...self, updatePreference);



//clothing
router.post('/addItemwithdesc', ...self, addItemwithdesc);
router.get('/getFavItems', ...self, getFavItems);
router.get('/getItem', ...reader, getItem);
router.post('/like', ...self, like);
router.get('/getItemfromurl', requireAuth, getItemfromurl);
router.get('/getTops', ...self, getTops);
router.get('/getBottoms', ...self, getBottoms);
router.get('/getOnepiece', ...self, getOnepiece);
router.get('/getShoes', ...self, getShoes);
router.get('/getAccessories', ...self, getAccessories);
router.get('/getOutfits', ...reader, getOutfits);
router.post('/addOutfit', ...self, addOutfit);
router.get('/getUsers', requireAuth, getUsers);
router.get('/getLike', ...self, getLike);





//general
router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "page not found" });
});



export default router;
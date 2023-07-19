//defines API endpoints using express
import express from 'express';
import { signup, login, isAuth } from '../controllers/auth.js';
import { birthday, gender, height, faceshape, bodyshape, colourCombos, skintone, styles, preference, getId, location } from '../controllers/preference.js';


const router = express.Router();

//auth
router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);

//preference
router.post('/preference', preference);
router.post('/birthday', birthday);
router.post('/location', location);
router.post('/gender', gender);
router.post('/height', height);
router.post('/faceshape', faceshape);
router.post('/bodyshape', bodyshape);
router.post('/colourCombos', colourCombos);
router.post('/skintone', skintone);
router.post('/styles', styles);
router.get('/getId', getId);



router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({ error: "page not found" });
});



export default router;
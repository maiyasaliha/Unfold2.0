import express from 'express';
import User from '../models/user.js'
import bcrypt from 'bcryptjs'

const router = express.Router();

router.post("/", async (req, res) => {
    const { email, name, password } = req.body;
    bcrypt.hash(password, 12).then((hash) => {
        User.create({
            email: email,
            name: name,
            password: hash,
        });
        res.json({ message: "User Successfully Created!" })
    });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) res.json({ message: "User Doesn't Exist" });

    bcrypt.compare(password, user.password).then((match) => {
        if (!match) res.json({ message: "Wrong Password" });
        const message = 'Welcome ' + user.name;
        res.json(message);
    });
});

// module.exports = router;
export default router;
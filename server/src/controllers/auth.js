//contains actions to be executed when requests are received
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { JWT_SECRET } from '../../config.js';

//can separate signup, login and aunthentication 

/*
registers users in database
*/
const signup = (req, res, next) => { //signup method
    // checks if email already exists
    User.findOne({ where : {
        email: req.body.email, 
    }})
    .then(dbUser => { 
        if (dbUser) { //if you can already find the email in the database
            return res.status(409).json({message: "email already exists"});
        } else if (req.body.email && req.body.password) { //if cannot must have given email and password
            // password hash
            bcrypt.hash(req.body.password, 12, (err, passwordHash) => { //hash the password
                if (err) { //if cannot hash
                    return res.status(500).json({message: "password cannot be hashed"}); 
                } else if (passwordHash) { //if can hash
                    return User.create(({ //then create user
                        email: req.body.email,
                        name: req.body.name,
                        password: passwordHash,
                        activeUser: true,
                    }))
                    .then(user => {
                        const token = jwt.sign({ userId: user.userId, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
                        res.status(200).json({message: "user created", "token": token});
                    })
                    .catch(err => { //if theres any error creating user
                        console.log(err);
                        res.status(502).json({message: "error creating user"});
                    });
                };
            });
        } else if (!req.body.password) { //given only email/password not given
            return res.status(400).json({message: "password not provided"});
        } else if (!req.body.email) { //given only password/email not given
            return res.status(400).json({message: "email not provided"});
        };
    })
    .catch(err => {
        console.log('error', err);
    });
};

/*
handles login requests
*/
const login = (req, res, next) => { // login method
    // checks if email exists
    User.findOne({ where : {
        email: req.body.email, 
    }})
    .then(dbUser => {
        if (!dbUser) { //if cannot find email in database
            return res.status(404).json({message: "user not found"});
        } else { // if can find email in database
            // password hash
            bcrypt.compare(req.body.password, dbUser.password, (err, compareRes) => { // compare password entered and that in db
                if (err) { // error while comparing
                    res.status(502).json({message: "error while checking user password"});
                } else if (compareRes) { // password match, compare response
                    const token = jwt.sign({ userId: dbUser.userId, email: dbUser.email }, JWT_SECRET, { expiresIn: '1h' });
                    res.status(200).json({message: "Welcome!", "token": token});
                } else { // password doesnt match
                    res.status(401).json({message: "invalid credentials"});
                };
            });
        };
    })
    .catch(err => {
        console.log('error', err);
    });
};

/*
verification: requireAuth has already checked the token by the time this runs
*/
const isAuth = (req, res, next) => {
    res.status(200).json({ message: 'Welcome!' });
};

export { signup, login, isAuth };
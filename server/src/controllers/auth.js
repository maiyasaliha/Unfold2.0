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
                    .then(() => {
                        res.status(200).json({message: "user created"});
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
                    const token = jwt.sign({ email: req.body.email }, JWT_SECRET, { expiresIn: '1h' });
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
verification
*/
const isAuth = (req, res, next) => { //authentication method
    const authHeader = req.get("Authorization");
    if (!authHeader) {
        return res.status(401).json({ message: 'authentication failed' });
    };
    const token = authHeader.split(' ')[1];
    let decodedToken; 
    try {
        decodedToken = jwt.verify(token, JWT_SECRET);
    } catch (err) {
        return res.status(500).json({ message: err.message || 'could not decode the token' });
    };
    if (!decodedToken) {
        res.status(401).json({ message: 'unauthorized' });
    } else {
        res.status(200).json({ message: 'Welcome!' });
    };
};

export { signup, login, isAuth };
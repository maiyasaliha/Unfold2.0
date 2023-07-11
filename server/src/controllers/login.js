//contains actions to be executed when requests are received
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

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
                    const token = jwt.sign({ email: req.body.email }, 'secret', { expiresIn: '1h' });
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

export { login };

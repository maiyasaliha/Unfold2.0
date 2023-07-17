//contains actions to be executed when requests are received
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

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


export { signup };

//contains actions to be executed when requests are received
import jwt from 'jsonwebtoken';
import UserPreference from '../models/userPreference.js';
import User from '../models/user.js';

const getId = (req, res, next) => {
    const { email } = req.query;
    User.findOne({
        where: {
            email: email,
        }
    }).then(dbUser => {
        if (dbUser) {
            // If the user is found in the database, send the userId in the response
            const userId = dbUser.userId; // Assuming the User model has a field named 'id' for the userId
            return res.status(200).json({ userId });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    })
        .catch(err => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        });
};

const getName = (req, res, next) => {
    const { userId } = req.query;
    User.findOne({
        where: {
            userId: userId,
        }
    }).then(dbUser => {
        if (dbUser) {
            // If the user is found in the database, send the name in the response
            const name = dbUser.name; // Assuming the User model has a field named 'name' for the userId
            return res.status(200).json({ name });
        } else {
            return res.status(404).json({ error: 'User & Name not found' });
        }
    })
        .catch(err => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        });
};

const getUsers = async (req, res, next) => {
    try {
      const listOfUsers = await User.findAll();
      res.json(listOfUsers);
    } catch (error) {
      // Handle the error here
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Failed to fetch user.' });
    }
  };

const getUser = (req, res, next) => {
    const { userId } = req.query;
    User.findOne({
        where: {
            userId: userId,
        }
    }).then(dbUser => {
        if (dbUser) {
            // If the user is found in the database, send the user in the response
            return res.status(200).json(dbUser);
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    })
        .catch(err => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        });
};

const getPicture = (req, res, next) => {
    const { userId } = req.query;
    User.findOne({
        where: {
            userId: userId,
        }
    }).then(dbUser => {
        if (dbUser) {
            // If the user is found in the database, send the user in the response
            return res.status(200).json(dbUser.profilepicture);
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    })
        .catch(err => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        });
};

const getPreference = (req, res, next) => {
    const { userId } = req.query;
    UserPreference.findOne({
        where: {
            userId: userId,
        }
    }).then(dbUser => {
        if (dbUser) {
            // If the user is found in the database, send the user in the response
            return res.status(200).json(dbUser);
        } else {
            return res.status(404).json({ error: 'User Preference not found' });
        }
    })
        .catch(err => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        });
};

const birthday = (req, res, next) => {
    const { userId, birthday } = req.body;
    UserPreference.create({
        userId: userId,
        birthday: birthday,
    });
    console.log('entry created and birthday inserted');
    res.json({ message: "entry created and birthday inserted" })
};

const preference = (req, res, next) => {
    const { userId, birthday, location, gender, height, skintone, colourCombos, faceshape, bodyshape, styles } = req.body;
    UserPreference.create({
        userId: userId,
        birthday: birthday,
        location: location,
        height: height,
        gender: gender,
        skintone: skintone,
        faceshape: faceshape,
        bodyshape: bodyshape,
        colourCombos: colourCombos,
        styles: styles,
    });
    console.log('user preference created');
    res.json({ message: "user preference created" })
};

const SetDp = (req, res, next) => {
    const { userId, profilepicture } = req.body;
    UserPreference.update({ profilepicture: profilepicture }, { where: { userId: userId } })
        .then(() => {
            console.log('profile picture inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating profile picture:', err);
        });
    res.json({ message: "profile picture inserted/updated" })
};

const location = (req, res, next) => {
    const { userId, location } = req.body;
    UserPreference.update({ location: location }, { where: { userId: userId } })
        .then(() => {
            console.log('location inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating location:', err);
        });
    res.json({ message: "location inserted/updated" })
};

const gender = (req, res, next) => {
    const { userId, gender } = req.body;
    UserPreference.update({ gender: gender }, { where: { userId: userId } })
        .then(() => {
            console.log('gender inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating gender:', err);
        });
    res.json({ message: "gender inserted/updated" })
};

const height = (req, res, next) => {
    const { userId, height } = req.body;
    UserPreference.update({ height: height }, { where: { userId: userId } })
        .then(() => {
            console.log('height inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating height:', err);
        });
    res.json({ message: "height inserted/updated" })
};

const skintone = (req, res, next) => {
    const { userId, skintone } = req.body;
    UserPreference.update({ skintone: skintone }, { where: { userId: userId } })
        .then(() => {
            console.log('skintone inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating skintone:', err);
        });
    res.json({ message: "skintone inserted/updated" })
};

const faceshape = (req, res, next) => {
    const { userId, faceshape } = req.body;
    UserPreference.update({ faceshape: faceshape }, { where: { userId: userId } })
        .then(() => {
            console.log('faceshape inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating faceshape:', err);
        });
    res.json({ message: "faceshape inserted/updated" })
};

const bodyshape = (req, res, next) => {
    const { userId, bodyshape } = req.body;
    UserPreference.update({ bodyshape: bodyshape }, { where: { userId: userId } })
        .then(() => {
            console.log('bodyshape inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating bodyshape:', err);
        });
    res.json({ message: "bodyshape inserted/updated" })
};

const colourCombos = (req, res, next) => {
    const { userId, colourCombos } = req.body;
    UserPreference.update({ colourCombos: colourCombos }, { where: { userId: userId } })
        .then(() => {
            console.log('colours inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating colours:', err);
        });
    res.json({ message: "colourCombos inserted/updated" })
};

const styles = (req, res, next) => {
    const { userId, styles } = req.body;
    UserPreference.update({ styles: styles }, { where: { userId: userId } })
        .then(() => {
            console.log('styles inserted/updated');
        })
        .catch(err => {
            console.error('Error inserting/updating styles:', err);
        });
    res.json({ message: "styles inserted/updated" })
};
export {
    birthday,
    gender,
    height,
    skintone,
    faceshape,
    bodyshape,
    colourCombos,
    styles,
    preference,
    getId,
    location,
    getPreference,
    getUser,
    getName,
    SetDp,
    getPicture,
    getUsers
};
//contains actions to be executed when requests are received
import UserPreference from '../models/userPreference.js';
import User from '../models/user.js';

const getId = (req, res, next) => {
    User.findOne({
        where: {
            userId: req.user.userId,
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
      const listOfUsers = await User.findAll({ attributes: ['userId', 'name'] });
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
        },
        attributes: { exclude: ['password'] },
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
    UserPreference.findOne({
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
    UserPreference.upsert({
        userId: userId,
        birthday: birthday,
    })
        .then(() => {
            console.log('entry created and birthday inserted');
            res.json({ message: "entry created and birthday inserted" });
        })
        .catch(err => {
            console.error('Error saving birthday:', err);
            res.status(500).json({ error: "failed to save birthday" });
        });
};

const preference = (req, res, next) => {
    const { userId, birthday, location, gender, height, skintone, colourCombos, faceshape, bodyshape, styles } = req.body;
    UserPreference.upsert({
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
    })
        .then(() => {
            console.log('user preference created');
            res.json({ message: "user preference created" });
        })
        .catch(err => {
            console.error('Error saving preference:', err);
            res.status(500).json({ error: "failed to save preference" });
        });
};

const SetDp = (req, res, next) => {
    const { userId, profilepicture } = req.body;
    UserPreference.upsert({ userId: userId, profilepicture: profilepicture })
        .then(() => {
            console.log('profile picture inserted/updated');
            res.json({ message: "profile picture inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating profile picture:', err);
            res.status(500).json({ error: "profile picture failed" });
        });
};

// Each onboarding step (and the birthday edit) saves a single preference field.
const setPreference = (field) => (req, res, next) => {
    const { userId } = req.body;
    UserPreference.upsert({ userId: userId, [field]: req.body[field] })
        .then(() => {
            console.log(`${field} inserted/updated`);
            res.json({ message: `${field} inserted/updated` });
        })
        .catch(err => {
            console.error(`Error inserting/updating ${field}:`, err);
            res.status(500).json({ error: `${field} failed` });
        });
};

const updateBirthday = setPreference('birthday');
const location = setPreference('location');
const gender = setPreference('gender');
const height = setPreference('height');
const skintone = setPreference('skintone');
const faceshape = setPreference('faceshape');
const bodyshape = setPreference('bodyshape');
const colourCombos = setPreference('colourCombos');
const styles = setPreference('styles');

const updatePreference = (req, res, next) => {
    const { userId, birthday, location, gender, height, skintone, faceshape, bodyshape, colourCombos, styles, profilepicture } = req.body;
    UserPreference.update({
        birthday: birthday,
        location: location,
        gender: gender,
        height: height,
        skintone: skintone,
        faceshape: faceshape,
        bodyshape: bodyshape, 
        colourCombos: colourCombos, 
        styles: styles,
        profilepicture: profilepicture
     }, { 
            where: { 
                userId: userId
             } })
        .then(() => {
            console.log('preference updated');
            res.json({ message: "preference updated" });
        })
        .catch(err => {
            console.error('Error updating preference:', err);
            res.status(500).json({ error: "preference update failed" });
        });
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
    getUsers,
    updateBirthday,
    updatePreference
};
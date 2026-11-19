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

const updateBirthday = (req, res, next) => {
    const { userId, birthday } = req.body;
    UserPreference.upsert({ userId: userId, birthday: birthday })
        .then(() => {
            console.log('birthday inserted/updated');
            res.json({ message: "birthday inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating birthday:', err);
            res.status(500).json({ error: "birthday failed" });
        });
};

const location = (req, res, next) => {
    const { userId, location } = req.body;
    UserPreference.upsert({ userId: userId, location: location })
        .then(() => {
            console.log('location inserted/updated');
            res.json({ message: "location inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating location:', err);
            res.status(500).json({ error: "location failed" });
        });
};

const gender = (req, res, next) => {
    const { userId, gender } = req.body;
    UserPreference.upsert({ userId: userId, gender: gender })
        .then(() => {
            console.log('gender inserted/updated');
            res.json({ message: "gender inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating gender:', err);
            res.status(500).json({ error: "gender failed" });
        });
};

const height = (req, res, next) => {
    const { userId, height } = req.body;
    UserPreference.upsert({ userId: userId, height: height })
        .then(() => {
            console.log('height inserted/updated');
            res.json({ message: "height inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating height:', err);
            res.status(500).json({ error: "height failed" });
        });
};

const skintone = (req, res, next) => {
    const { userId, skintone } = req.body;
    UserPreference.upsert({ userId: userId, skintone: skintone })
        .then(() => {
            console.log('skintone inserted/updated');
            res.json({ message: "skintone inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating skintone:', err);
            res.status(500).json({ error: "skintone failed" });
        });
};

const faceshape = (req, res, next) => {
    const { userId, faceshape } = req.body;
    UserPreference.upsert({ userId: userId, faceshape: faceshape })
        .then(() => {
            console.log('faceshape inserted/updated');
            res.json({ message: "faceshape inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating faceshape:', err);
            res.status(500).json({ error: "faceshape failed" });
        });
};

const bodyshape = (req, res, next) => {
    const { userId, bodyshape } = req.body;
    UserPreference.upsert({ userId: userId, bodyshape: bodyshape })
        .then(() => {
            console.log('bodyshape inserted/updated');
            res.json({ message: "bodyshape inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating bodyshape:', err);
            res.status(500).json({ error: "bodyshape failed" });
        });
};

const colourCombos = (req, res, next) => {
    const { userId, colourCombos } = req.body;
    UserPreference.upsert({ userId: userId, colourCombos: colourCombos })
        .then(() => {
            console.log('colours inserted/updated');
            res.json({ message: "colourCombos inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating colours:', err);
            res.status(500).json({ error: "colourCombos failed" });
        });
};

const styles = (req, res, next) => {
    const { userId, styles } = req.body;
    UserPreference.upsert({ userId: userId, styles: styles })
        .then(() => {
            console.log('styles inserted/updated');
            res.json({ message: "styles inserted/updated" });
        })
        .catch(err => {
            console.error('Error inserting/updating styles:', err);
            res.status(500).json({ error: "styles failed" });
        });
};

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
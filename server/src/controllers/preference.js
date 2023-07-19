//contains actions to be executed when requests are received
import jwt from 'jsonwebtoken';
import UserPreference from '../models/userPreference.js';

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

const gender = (req, res, next) => { 
    const { userId, gender } = req.body;
    UserPreference.update({ gender: gender}, { where: { userId: userId }})
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
    UserPreference.update({ height: height}, { where: { userId: userId }})
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
    UserPreference.update({ skintone: skintone}, { where: { userId: userId }})
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
    UserPreference.update({ faceshape: faceshape}, { where: { userId: userId }})
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
    UserPreference.update({ bodyshape: bodyshape}, { where: { userId: userId }})
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
    UserPreference.update({ colourCombos: colourCombos}, { where: { userId: userId }})
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
    UserPreference.update({ styles: styles}, { where: { userId: userId }})
    .then(() => {
        console.log('styles inserted/updated');
    })
    .catch(err => {
        console.error('Error inserting/updating styles:', err);
    });
    res.json({ message: "styles inserted/updated" })
};
export { birthday, gender, height, skintone, faceshape, bodyshape, colourCombos, styles, preference };
import User from '../models/user.js';
import Items from '../models/items.js';
import ItemsWardrobe from '../models/itemsWardrobe.js';
import { col } from 'sequelize';

// const addItem = async (req, res, next) => {
//   const { userId, imageurl } = req.body;

//   try {
//     ItemsWardrobe.create({
//       userId: userId,
//       imageurl: imageurl,
//     });
//     console.log('item added');
//     res.status(200).json({ message: 'item added successfully' });
//   } catch (err) {
//     console.error('Error adding item:', err);
//     res.status(500).json({ message: 'Failed to upload' });
//   }
// };


// const getItems = async (req, res, next) => {
//   try {
//     const listOfItems = await ItemsWardrobe.findAll();
//     res.json(listOfItems);
//   } catch (error) {
//     // Handle the error here
//     console.error('Error fetching items:', error);
//     res.status(500).json({ error: 'Failed to fetch items.' });
//   }
// };

const addItem = async (req, res, next) => {
  const { userId, imageBase64 } = req.body;

  try {
    const image = Buffer.from(imageBase64, 'base64');

    await Items.create({
      userId: userId,
      image: image,
    });
    console.log('item added');
    res.status(200).json({ message: 'item added successfully' });
  } catch (err) {
    console.error('Error adding item:', err);
    res.status(500).json({ message: 'Failed to upload' });
  }
};

const addItemwithdesc = (req, res, next) => {
  const { userId, image, colour, type, comments, length, material, style, neckline, straptype, sleeveLength, toe, heelheight, others, season } = req.body;
  ItemsWardrobe.create({
      userId: userId,
      imageurl: image,
      colour: colour,
      type: type,
      toe: toe,
      length: length,
      material: material,
      straptype: straptype,
      style: style,
      season: season,
      neckline: neckline,
      comments: comments,
      others: others,
      sleeveLength: sleeveLength,
      heelheight: heelheight,

    }).then(() => {
    res.status(200).json({ message: 'item added successfully' });
    console.log('item added');
    }).catch(err => {
    console.error('Error adding item:', err);
    res.status(500).json({ message: 'Failed to upload' });
  })
};


const getItems = async (req, res, next) => {
  try {
    const listOfItems = await ItemsWardrobe.findAll();
    res.json(listOfItems);
  } catch (error) {
    // Handle the error here
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items.' });
  }
};

const getItem = (req, res, next) => {
  const { userId } = req.query;
  ItemsWardrobe.findOne({
    where: {
      userId: userId,
    }
  }).then(dbUser => {
    if (dbUser) {
      // If the user is found in the database, send the user in the response
      return res.status(200).json(dbUser);
    } else {
      // If the user is not found, send an appropriate error response
      return res.status(404).json({ error: 'Item not found' });
    }
  })
    .catch(err => {
      // If there is an error while querying the database, handle it
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    });
  };

  export { addItem, getItems, addItemwithdesc, getItem };
import User from '../models/user.js';
import Items from '../models/items.js';
import ItemsWardrobe from '../models/itemsWardrobe.js';
import Outfits from '../models/outfits.js';
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

const addOutfit = (req, res, next) => {
  const { userId, top, bottom, onepiece, shoes, accessories } = req.body;
  Outfits.create({
    userId: userId,
    top: top,
    bottom: bottom,
    onepiece: onepiece,
    shoes: shoes,
    accessories: accessories

  }).then(() => {
    res.status(200).json({ message: 'outfit added successfully' });
    console.log('outfit added');
  }).catch(err => {
    console.error('Error adding outfit:', err);
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

const getTops = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const listOfItems = await ItemsWardrobe.findAll({ where: { type: "top", userId: userId } });
    res.json(listOfItems);
  } catch (error) {
    // Handle the error here
    console.error('Error fetching tops:', error);
    res.status(500).json({ error: 'Failed to fetch tops.' });
  }
};

const getShoes = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const listOfItems = await ItemsWardrobe.findAll({ where: { type: "shoe", userId: userId } });
    res.json(listOfItems);
  } catch (error) {
    // Handle the error here
    console.error('Error fetching shoes:', error);
    res.status(500).json({ error: 'Failed to fetch shoes.' });
  }
};

const getBottoms = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const listOfItems = await ItemsWardrobe.findAll({ where: { type: "bottom", userId: userId } });
    res.json(listOfItems);
  } catch (error) {
    // Handle the error here
    console.error('Error fetching bottoms:', error);
    res.status(500).json({ error: 'Failed to fetch bottoms.' });
  }
};

const getOnepiece = async (req, res, next) => {
  const { userId } = req.query;

  try {
    const listOfItems = await ItemsWardrobe.findAll({ where: { type: "onepiece", userId: userId } });
    res.json(listOfItems);
  } catch (error) {
    // Handle the error here
    console.error('Error fetching onepiece:', error);
    res.status(500).json({ error: 'Failed to fetch onepiece.' });
  }
};

const getAccessories = async (req, res, next) => {
  const { userId } = req.query;
  try {
    const listOfItems = await ItemsWardrobe.findAll({ where: { type: "accessories", userId: userId } });
    res.json(listOfItems);
  } catch (error) {
    // Handle the error here
    console.error('Error fetching accessories:', error);
    res.status(500).json({ error: 'Failed to fetch accessories.' });
  }
};

const like = (req, res, next) => {
  const { userId, imageurl, favourite } = req.body;
  ItemsWardrobe.update({ favourite: favourite }, { where: { imageurl: imageurl, userId: userId } })
    .then(() => {
      console.log('favourite updated');
    })
    .catch(err => {
      console.error('Error liking item:', err);
    });
  res.json({ message: "favourite updated" })
};


const getLike = (req, res, next) => {
  const { userId, imageurl } = req.query;
  ItemsWardrobe.findOne({
      where: {
        imageurl: imageurl,
        userId: userId,
      }
  }).then(dbUser => {
      if (dbUser) {
          // If the user is found in the database, send the user in the response
          return res.status(200).json(dbUser.favourite);
      } else {
          return res.status(404).json({ error: 'Item not found' });
      }
  })
      .catch(err => {
          console.error('Error executing query:', err);
          return res.status(500).json({ error: 'Internal server error' });
      });
};

const getItemfromurl = (req, res, next) => {
  const { imageurl } = req.query;
  ItemsWardrobe.findOne({
    where: {
      imageurl: imageurl
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

// const getFavItems = async (req, res, next) => {
//   try {
//     const listOfItems = await ItemsWardrobe.findAll({
//       where: {
//         favourite: 1,
//       }
//     });
//     res.json(listOfItems);
//   } catch (error) {
//     // Handle the error here
//     console.error('Error fetching items:', error);
//     res.status(500).json({ error: 'Failed to fetch items.' });
//   }
// };
const getFavItems = (req, res, next) => {
  const { userId } = req.query;
  ItemsWardrobe.findAll({
    where: {
      userId: userId,
      favourite: 1,
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
const getItem = (req, res, next) => {
  const { userId } = req.query;
  ItemsWardrobe.findAll({
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

const getOutfits = (req, res, next) => {
  const { userId } = req.query;
  Outfits.findAll({
    where: {
      userId: userId,
    }
  }).then(dbUser => {
    if (dbUser) {
      // If the user is found in the database, send the user in the response
      return res.status(200).json(dbUser);
    } else {
      // If the user is not found, send an appropriate error response
      return res.status(404).json({ error: 'Outfits not found' });
    }
  })
    .catch(err => {
      // If there is an error while querying the database, handle it
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    });
};

const getnumItems = (req, res, next) => {
  
};

const getnumOutfits = (req, res, next) => {
  
};

const getLikedItems = (req, res, next) => {
  
};

export {
  addItem,
  getItems,
  addItemwithdesc,
  getItem,
  getFavItems,
  like,
  getItemfromurl,
  getTops,
  getBottoms,
  getOnepiece,
  getShoes,
  getAccessories,
  addOutfit,
  getOutfits,
  getLike
};
import ItemsWardrobe from '../models/itemsWardrobe.js';
import Outfits from '../models/outfits.js';

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

// The closet and dress-up screens list the caller's items of one clothing type.
const getByType = (type, label) => async (req, res, next) => {
  const { userId } = req.query;

  try {
    const listOfItems = await ItemsWardrobe.findAll({ where: { type: type, userId: userId } });
    res.json(listOfItems);
  } catch (error) {
    console.error(`Error fetching ${label}:`, error);
    res.status(500).json({ error: `Failed to fetch ${label}.` });
  }
};

const getTops = getByType('top', 'tops');
const getShoes = getByType('shoe', 'shoes');
const getBottoms = getByType('bottom', 'bottoms');
const getOnepiece = getByType('onepiece', 'onepiece');
const getAccessories = getByType('accessories', 'accessories');

const like = (req, res, next) => {
  const { userId, imageurl, favourite } = req.body;
  ItemsWardrobe.update({ favourite: favourite }, { where: { imageurl: imageurl, userId: userId } })
    .then(() => {
      console.log('favourite updated');
      res.json({ message: "favourite updated" });
    })
    .catch(err => {
      console.error('Error liking item:', err);
      res.status(500).json({ error: "favourite update failed" });
    });
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

export {
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
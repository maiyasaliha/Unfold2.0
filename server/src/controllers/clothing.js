import User from '../models/user.js';
import Items from '../models/items.js';

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


export { addItem };
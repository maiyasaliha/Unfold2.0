import axios from 'axios';
import { Platform } from 'react-native';
import { Cloudinary } from 'cloudinary-react-native';

const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.129:5000' : 'http://192.168.0.129:5000';

// Configure Cloudinary using the Cloudinary Node.js SDK (npm install cloudinary)
//const cloudinary = require('cloudinary').v2;
Cloudinary.config({
    cloud_name: '***REMOVED***',
    api_key: '***REMOVED***',
    api_secret: '***REMOVED***',
});

// Function to upload the image to Cloudinary
const uploadToCloudinary = async (imageUri) => {
    try {
        // Upload image to Cloudinary
        const result = await Cloudinary.uploader.upload(imageUri);
        return result.secure_url;
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};

// Function to send the Cloudinary URL to your backend for further processing
const sendImageUrlToBackend = async (imageUrl, userId) => {
    try {
        const response = await axios.post(`${API_URL}/addItem`, {
            userId: userId,
            imageUrl: imageUrl,
        });

        if (response.status === 200) {
            console.log('Item uploaded successfully.');
        } else {
            console.error('Failed to upload item.');
        }
    } catch (error) {
        console.error('Error uploading item:', error);
        throw error;
    }
};

export { uploadToCloudinary, sendImageUrlToBackend };

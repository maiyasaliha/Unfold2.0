import axios from 'axios';
import Constants from 'expo-constants';

// const temp = {
//     userId: null,
//     birthday: null,
//     location: null,
//     gender: null,
//     height: null,
//     skintone: null,
//     faceshape: null,
//     bodyshape: null,
//     colourCombos: null,
//     styles: null,
//   };

//   export function getId() {
//     return temp.userId;
//   }
  
//   export function setUserId(userId) {
//     temp.userId = userId;
//   }

//   export function setBirthday(birthday) {
//     temp.birthday = birthday;
//   }

//   export function setLocation(location) {
//     temp.location = location;
//   }

//   export function setGender(gender) {
//     temp.gender = gender;
//   }
  
//   export function setHeight(height) {
//     temp.height = height;
//   }
  
//   export function setSkintone(skintone) {
//     temp.skintone = skintone;
//   }
  
//   export function setFaceShape(faceshape) {
//     temp.faceshape = faceshape;
//   }
  
//   export function setBodyshape(bodyshape) {
//     temp.bodyshape = bodyshape;
//   }
  
//   export function setColourCombos(colourCombos) {
//     temp.colourCombos = colourCombos;
//   }

//   export function setStyles(styles) {
//     temp.styles = styles;
//   }
  
//   export function getUserPreference() {
//     return temp;
//   }

let userId = null;

// Backend URL: set "extra.apiUrl" in app.json (use your computer's LAN IP
// when testing on a phone, e.g. http://192.168.1.10:5000).
let API_URL = Constants.expoConfig?.extra?.apiUrl ?? 'http://localhost:5000';

// Image uploads go straight from the app to Cloudinary with an unsigned
// upload preset; set your own cloud name and preset in app.json "extra".
const CLOUDINARY_CLOUD = Constants.expoConfig?.extra?.cloudinaryCloudName;
const CLOUDINARY_PRESET = Constants.expoConfig?.extra?.cloudinaryUploadPreset;

export function getCloudinaryUploadUrl() {
  return `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`;
}

export function getCloudinaryPreset() {
  return CLOUDINARY_PRESET;
}

export function setUserId(int) {
  userId = int;
}

export function getUserId() {
  return userId;
}

export function getApiUrl() {
  return API_URL;
}

// Login token: attached to every axios request once the user logs in or signs up.
let token = null;

export function setToken(newToken) {
  token = newToken;
  axios.defaults.headers.common.Authorization = `Bearer ${newToken}`;
}

export function getToken() {
  return token;
}

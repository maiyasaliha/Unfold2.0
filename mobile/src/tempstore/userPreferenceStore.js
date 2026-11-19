import axios from 'axios';

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

//let API_URL = Platform.OS === 'ios' ? 'https://unfold-backend.onrender.com:5000' : 'https://unfold-backend.onrender.com:5000';
//let API_URL = Platform.OS === 'ios' ? 'http://192.168.0.31:5000' : 'http://192.168.0.31:5000';
let API_URL = Platform.OS === 'ios' ? 'https://unfold-backend.onrender.com' : 'https://unfold-backend.onrender.com';

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

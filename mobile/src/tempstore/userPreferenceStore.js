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

let userId = 10;

let API_URL = Platform.OS === 'ios' ? 'http://172.20.10.5:5000' : 'http://172.20.10.5:5000';

export function setUserId(int) {
  userId = int;
}

export function getUserId() {
  return userId;
}

export function getApiUrl() {
  return API_URL;
}
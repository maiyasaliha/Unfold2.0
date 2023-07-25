import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ToggleBar } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { getUserId, getApiUrl } from '../tempstore/userPreferenceStore';


API_URL = getApiUrl();

const UserScreen = () => {
  const [user, setUser] = useState();
  const [birthday, setBirthday] = useState();
  const [bodyshape, setBodyshape] = useState();
  const [colourCombos, setColourCombos] = useState();
  const [faceshape, setFaceshape] = useState();
  const [gender, setGender] = useState();
  const [height, setHeight] = useState();
  const [location, setLocation] = useState();
  const [skintone, setSkintone] = useState();
  const [style, setStyle] = useState();

  const [profilePicture, setProfilePicture] = useState(null);
  const [picture, setPicture] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(false);



  const id = getUserId();

  const fetchUser = async () => {
    try {
      const response = await axios.get(`${API_URL}/getName?userId=${id}`);
      console.log(response.data);
      setUser(response.data.name);
      console.log('successfully retrieved user');
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const fetchPreference = async () => {
    try {
      const response = await axios.get(`${API_URL}/getPreference?userId=${id}`);
      console.log(response.data);
      setBirthday(response.data.birthday);
      setBodyshape(response.data.bodyshape);
      setColourCombos(response.data.colourCombos);
      setFaceshape(response.data.faceshape);
      setGender(response.data.gender);
      setHeight(response.data.height);
      setLocation(response.data.location);
      setSkintone(response.data.skintone);
      setStyle(response.data.styles);
      console.log('successfully retrieved user preference');
    } catch (error) {
      console.error('Error fetching user preference:', error);
    }
  };

  const fetchPicture = async () => {
    try {
      const response = await axios.get(`${API_URL}/getPicture?userId=${id}`);
      console.log(response.data);
      setProfilePicture(response.data.profilepicture);
      console.log('successfully retrieved picture');
    } catch (error) {
      console.error('Error fetching picture:', error);
    }
  };

  const formatDate = (birthday) => {
    const date = new Date(birthday);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month since it's zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };


  // Call fetchItems when the component mounts
  useEffect(() => {
    fetchUser();
    fetchPreference();
    fetchPicture();
  }, []);

  // // Use the user state inside the component's return statement or other useEffect
  // useEffect(() => {
  //   console.log('User updated:', user);
  //   console.log('Birthday updated:', birthday);
  //   console.log('Bodyshape updated:', bodyshape);
  //   console.log('Colour Combo updated:', colourCombos);
  //   console.log('Faceshape updated:', faceshape);
  //   console.log('Gender updated:', gender);
  //   console.log('Height updated:', height);
  //   console.log('Location updated:', location);
  //   console.log('Skintone updated:', skintone);
  //   console.log('Style updated:', style);

  // }, [user, birthday, bodyshape, colourCombos, faceshape, gender, height, location, skintone, style]);
  useEffect(() => {
    (async () => {
      const gallerStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(gallerStatus.status == 'granted');
    })();
  }, []);

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      console.log(result);

      if (!result.canceled) {
        let newfile = {
          uri: result.uri,
          type: `test/${result.uri.split('.')[1]}`,
          name: `test.${result.uri.split('.')[1]}`,
        };
        handleUpload(newfile);
      }
    } catch (err) {
      console.log('Error picking image:', err);
    }
  };

  const handleUpload = (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', '***REMOVED***');
    data.append('cloud_name', '***REMOVED***');

    fetch('https://api.cloudinary.com/v1_1/***REMOVED***/image/upload', {
      method: 'post',
      body: data,
    })
      .then((res) => res.json())
      .then((d) => {
        setProfilePicture(d.url);
        console.log('successfully uploaded to Cloudinary');
        saveProfilePictureToDatabase(d.url);
      });
  };

  const saveProfilePictureToDatabase = async (url) => {
    try {
      const response = await axios.post(`${API_URL}/SetDp`, {
        userId: id,
        profilepicture: url,
      });

      if (response.status === 200) {
        console.log('Profile Picture saved successfully to the database.');
      } else {
        console.error('Failed to save profile picture to the database.');
      }
    } catch (error) {
      console.error('Error saving profile picture to the database:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
       {profilePicture ? (
        <TouchableOpacity style={styles.profilePictureContainer}>
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={pickImage} style={styles.addProfilePictureButton}>
          <Text style={styles.profilePictureText}>Add Profile Picture</Text>
        </TouchableOpacity>
      )}
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.input}>{user}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Birthday</Text>
        <Text style={styles.input}>{formatDate(birthday)}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Body Shape</Text>
        <Text style={styles.input}>{bodyshape}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Colour</Text>
        <Text style={styles.input}>{colourCombos}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Face Shape</Text>
        <Text style={styles.input}>{faceshape}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Gender</Text>
        <Text style={styles.input}>{gender}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Height</Text>
        <Text style={styles.input}>{height}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Location</Text>
        <Text style={styles.input}>{location}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Skin Undertone</Text>
        <Text style={styles.input}>{skintone}</Text>
      </View>
      <View style={styles.fieldcontainer}>
        <Text style={styles.title}>Style</Text>
        <Text style={styles.input}>{style}</Text>
      </View>
      <ToggleBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fieldcontainer: {
    flexDirection: 'row',
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: "#937CA7",
    fontFamily: 'CabinCondensed-Regular',
    marginRight: 8,
  },
  input: {
    fontSize: 20,
    color: "#654F77",
    fontFamily: 'CabinCondensed-Regular',
  },
  profilePictureContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 50,
    left: 130,
  },
  profilePicture: {
    width: 116,
    height: 116,
    borderRadius: 58,
  },
  profilePictureText: {
    fontSize: 18,
    color: '#654F77',
    textAlign: 'center',
    fontFamily: 'CabinCondensed-Regular',
  },
  addProfilePictureButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 50,
    backgroundColor: '#D8BFD8',
    left: 130,
  },

})

export default UserScreen;

import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { EditButton, LogoutButton, ToggleBar } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { getUserId, getApiUrl } from '../tempstore/userPreferenceStore';
import { useNavigation } from '@react-navigation/native';
import ModifySettingsScreen from './ModifySettingsScreen';



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
  const navigation = useNavigation();
  const [refresh, setRefresh] = useState(false);



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
      setProfilePicture(response.data.profilepicture);
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
      console.log('successfully retrieved picture:', response.data.profilepicture);
      console.log('profilePicture:', profilePicture);
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

  const triggerRefresh = () => {
    setRefresh(true);
  };

  const handleScreenFocus = () => {
    // Call the triggerRefresh function to refresh the data when the screen is in focus
    triggerRefresh();
  };

  // Call fetchItems when the component mounts
  useEffect(() => {
    if (refresh) {
      fetchUser();
      fetchPreference();
      // After refreshing, set the refresh state back to false
      setRefresh(false);
    }
  }, [refresh]);

  useEffect(() => {
    const focusListener = navigation.addListener('focus', handleScreenFocus);

    // Clean up the listener when the component is unmounted
    return () => {
      focusListener();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttoncontainer}>
        <LogoutButton />
        <EditButton />
      </View>
      {profilePicture ? (
        <TouchableOpacity style={styles.profilePictureContainer}>
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        </TouchableOpacity>
      ) : (
        <View style={styles.addProfilePictureButton}>
          <Image style={styles.image} source={require('../assets/images/deafultusericonjpg.jpg')} />
        </View>
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
    justifyContent: 'flex-start',
  },
  buttoncontainer: {
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between'
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
  image: {
    width: 120,
    height: 120,
    borderRadius: 60
  },

})

export default UserScreen;

import React, { useState, useEffect } from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { getApiUrl } from '../tempstore/userPreferenceStore';

const HeartOutfits = () => {
  const [isPressed, setIsPressed] = useState(false);
  const API_URL = getApiUrl();

//   useEffect(() => {
//     // Fetch the initial like status when the component mounts
//     fetchLike();
//   }, []);

  const handlePress = async () => {
    setIsPressed((prevState) => !prevState);
    const favouriteValue = isPressed ? 0 : 1; // Toggle the 'favourite' value between 0 and 1 when pressed

    try {
      // Send the updated 'favourite' value to the backend
      await axios.post(`${API_URL}/like`, {
        imageurl: imageurl,
        favourite: favouriteValue,
      });
      console.log('favourite updated');
    } catch (error) {
      console.log('Error liking:', error);
    }
  };

  const fetchLike = async () => {
    try {
      // Fetch the current like status from the backend
      const response = await axios.get(`${API_URL}/getLike?imageurl=${imageurl}`);
      const likeStatus = response.data;
      setIsPressed(likeStatus === 1); // Update the 'isPressed' state based on the retrieved like status
      console.log('Successfully retrieved like');
    } catch (error) {
      console.error('Error fetching like:', error);
    }
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      {({ pressed }) => (
        <Image
          source={require('../assets/images/heart.png')}
          style={[
            styles.image,
            { tintColor: isPressed ? '#937CA7' : '#D3D3D3' },
          ]}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default HeartOutfits;

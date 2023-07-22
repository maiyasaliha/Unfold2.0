import React, { useState } from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const HeartButton = ({imageurl}) => {
  const [isPressed, setIsPressed] = useState(false);

  const onPressButton = () => {
    setIsPressed((prevState) => !prevState);
  };

  const handlePress = () => {
    setIsPressed((prevState) => !prevState);
    const favouriteValue = isPressed ? 1 : 0; // Use the ternary operator to set the 'favourite' value based on 'isPressed'
  
    axios.post(`${API_URL}/like`, {
      imageurl: imageurl,
      favourite: favouriteValue, // Use the 'favouriteValue' variable here
    })
      .then((response) => {
        console.log('favourite updated');
        console.log('Heart onPress');
      })
      .catch((err) => console.log('Error liking:', err));
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      {({ pressed }) => (
        <Image
          source={require('../assets/images/heart.png')} // Replace with your actual image path
          style={[
            styles.image,
            { tintColor: isPressed ? '#937CA7' : '#D3D3D3' }, // Use isPressed instead of pressed
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

export default HeartButton;

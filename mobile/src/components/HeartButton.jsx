import React, { useState } from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';

const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const onPressButton = () => {
    setIsPressed((prevState) => !prevState);
  };

  return (
    <Pressable onPress={onPressButton} style={styles.button}>
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

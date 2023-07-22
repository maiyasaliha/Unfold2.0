import React, { useState, useEffect } from 'react';
import { View, Pressable, Image, StyleSheet } from 'react-native';

const FavouritesButton = ({ isPressed, navigation, screenName }) => {
  const [imageSource, setImageSource] = useState(require('../assets/images/heart1.png'));

  useEffect(() => {
    // Update the image source when the 'isPressed' prop changes
    if (isPressed) {
      setImageSource(require('../assets/images/heart1.png'));
    } else {
      setImageSource(require('../assets/images/heartoutline.png'));
    }
  }, [isPressed]);

  const onPressButton = () => {
    navigation.navigate(screenName);
    console.log('Fav onPress');
  };

  return (
    <Pressable onPress={onPressButton} style={styles.button}>
      {({ pressed }) => (
        <Image
          source={imageSource}
          style={styles.image}
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
    width: 35,
    height: 35,
  },
});

export default FavouritesButton;

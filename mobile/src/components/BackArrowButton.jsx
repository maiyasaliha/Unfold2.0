import React from 'react';
import { Pressable, Image, StyleSheet, View } from 'react-native';

const BackArrowButton = ({ navigation, screenName }) => {

    const handleButtonPress = () => {
      navigation.navigate(screenName)
    }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handleButtonPress} style={styles.button}>
      <Image source={require('../assets/images/free-arrow-left-icon-3099-thumb.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row'
  },
  image: {
    width: 15,
    height: 25,
  },
  buttonContainer: {
    paddingTop: 70,
    marginRight: 300,
  },

});

export default BackArrowButton;

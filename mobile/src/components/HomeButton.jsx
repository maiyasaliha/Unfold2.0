import React from 'react';
import { Pressable, Image, StyleSheet, View } from 'react-native';

const HomeButton = ({ navigation, screenName }) => {

  const handleButtonPress = () => {
    navigation.navigate(screenName)
    console.log('Home onPress')

  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Image source={require('../assets/images/home.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row'
  },
  image: {
    width: 50,
    height: 50,
  },
  buttonContainer: {
    paddingTop: 65,
  },

});

export default HomeButton;

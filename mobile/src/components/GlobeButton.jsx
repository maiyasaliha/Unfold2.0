import React from 'react';
import { Pressable, Image, StyleSheet, View } from 'react-native';

const GlobeButton = ({ navigation, screenName }) => {

  const handleButtonPress = () => {
    navigation.navigate(screenName)
    console.log('Globe onPress')

  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Image source={require('../assets/images/globe.png')} style={styles.image} />
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
    marginLeft: 10,
  },

});

export default GlobeButton;

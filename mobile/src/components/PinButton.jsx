import React from 'react';
import { Pressable, Image, StyleSheet, View } from 'react-native';

const PinButton = ({ navigation, screenName }) => {

  const handleButtonPress = () => {
    navigation.navigate(screenName)
    console.log('Pin onPress')

  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Image source={require('../assets/images/pin.png')} style={styles.image} />
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
    paddingTop: 60,
    marginLeft: 30,
  },

});

export default PinButton;

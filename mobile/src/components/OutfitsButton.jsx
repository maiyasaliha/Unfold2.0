import React from 'react';
import { View, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OutfitsButton = ({ isPressed, screenName, image, text, id }) => {
  const navigation = useNavigation();

  const onPressButton = () => {
    screenName 
    ? navigation.navigate(screenName)
    : navigation.navigate('ClosetOutfitsScreen', {image: image, text: text, id: id});
    console.log('Outfits onPress');
  };

  return (
    <Pressable onPress={onPressButton} style={[styles.button, isPressed && { backgroundColor: '#937CA7' }]}>
      <Text style={[styles.text, isPressed ? styles.textWhite : styles.textBlack]}>Outfits</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 30,
    width: 63,
    borderRadius: 25,
  },
  text: {
    fontFamily: 'CabinCondensed-Regular',
    textAlign: 'center',
    fontSize: 14,
  },
  textWhite: {
    color: '#FFFFFF', // White text color when background is colored
  },
  textBlack: {
    color: '#000000', // Black text color when background is white
  },
});

export default OutfitsButton;

import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const DressupButton = ({ navigation, screenName }) => {
  const [showRectangle, setShowRectangle] = useState(false);

  const handlePress = () => {
    navigation.navigate(screenName);
    console.log('Dress Up onPress');
    setShowRectangle(true);
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress}>
        <Text style={styles.text}>Dress Up</Text>
      </Pressable>
      {showRectangle || <View style={styles.rectangle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: '#000000',
    fontFamily: 'CabinCondensed-Regular',
    textAlign: 'center',
    bottom: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    height: 2,
    width: 160,
    backgroundColor: '#3A2D56',
  },
});

export default DressupButton;

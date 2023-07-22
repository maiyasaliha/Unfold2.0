import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import ChooseOutfitOverlay from './ChooseOutfitOverlay';

const ChooseOutfitButton = () => {
  const [showOverlay, setShowOverlay] = useState(false);


  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
    console.log('Choose Outfit onPress')
  };

  return (
  <View style={styles.buttonContainer}>
    <Pressable onPress={toggleOverlay} style={styles.whitebutton}>
      <Text style={styles.text}>Choose Outfit</Text>
    </Pressable>
    <ChooseOutfitOverlay visible={showOverlay} onPress={toggleOverlay} />
  </View>
  )
}


const styles = StyleSheet.create({
  whitebutton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
    height: 62,
    width: 160,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 19,
    color: "#000000",
    fontFamily: 'CabinCondensed-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  buttonContainer: {
    marginBottom: 330,
    paddingHorizontal: 20,
  },
  purplebutton: {
    backgroundColor: "#937CA7",
    paddingHorizontal: 25,
    height: 62,
    width: 160,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whitetext: {
    fontSize: 19,
    color: "#FFFFFF",
    fontFamily: 'CabinCondensed-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  purplebuttonContainer: {
    marginBottom: 400,
    paddingHorizontal: 20,
  },

})

export default ChooseOutfitButton

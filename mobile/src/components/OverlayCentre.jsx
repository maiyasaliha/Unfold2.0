import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Pressable, Image } from 'react-native';
import ChooseOutfitButton from './ChooseOutfitButton';


const OverlayCentre = ({ visible, onPress }) => {
  if (!visible) {
    return null; // Render nothing if the overlay is not visible
  }

  return (
    <View style={styles.overlay}>
      <ChooseOutfitButton />
      <TouchableOpacity style={styles.overlayContent} onPress={onPress}>
        <Pressable onPress={onPress} style={styles.button}>
        <Image source={require('../assets/images/purpleplus.png')} style={styles.image} />
      </Pressable>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: -240,
    left: -107,
  },
  overlayContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 298,
    left: 1,
  },
  image: {
    width: 180,
    height: 180,
  },
});

export default OverlayCentre;

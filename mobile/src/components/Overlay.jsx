import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Dimensions, Pressable, Image } from 'react-native';
import AddItemsButton from './AddItemsButton';
import CreateOutfitButton from './CreateOutfitButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const Overlay = ({ visible, onPress }) => {
  if (!visible) {
    return null; // Render nothing if the overlay is not visible
  }

  return (
    <SafeAreaView style={styles.overlay}>
      <TouchableOpacity style={styles.overlayContent} onPress={onPress}>
        <AddItemsButton />
        <CreateOutfitButton />
        <Pressable onPress={onPress} style={styles.button}>
        <Image source={require('../assets/images/whitecross.png')} style={styles.image} />
      </Pressable>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: -639,
    left: -147,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background color
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  overlayContent: {
    padding: 16,
    borderRadius: 8,
  },
  overlayText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginBottom: -27,
    marginLeft: 72,

  },
  image: {
    width: 90,
    height: 90,
  },
});

export default Overlay;

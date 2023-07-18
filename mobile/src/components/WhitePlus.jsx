import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import Overlay from './Overlay';
import React, { useState } from 'react';

const WhitePlus = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <View>
      <Pressable onPress={toggleOverlay} style={styles.button}>
        <Image source={require('../assets/images/whiteplus.png')} style={styles.image} />
      </Pressable>
      <Overlay visible={showOverlay} onPress={toggleOverlay} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    marginTop: 65,

  },
  image: {
    width: 90,
    height: 90,
  },
  
});


export default WhitePlus
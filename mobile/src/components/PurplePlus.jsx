import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react';
import OverlayCentre from './OverlayCentre';

const PurplePlus = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };
  return (
    <View>
      <Pressable onPress={toggleOverlay} style={styles.button}>
        <Image source={require('../assets/images/purpleplus.png')} style={styles.image} />
      </Pressable>
      <OverlayCentre visible={showOverlay} onPress={toggleOverlay} />
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    marginTop: 65,

  },
  image: {
    width: 180,
    height: 180,
  },
  
});


export default PurplePlus
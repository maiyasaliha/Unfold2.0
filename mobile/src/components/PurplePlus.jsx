import { View, Text, Pressable, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useState } from 'react';
import OverlayCentre from './OverlayCentre';

const { width, height } = Dimensions.get("window");

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
    marginTop: height*0.07,

  },
  image: {
    width: 180,
    height: 180,
  },
  
});


export default PurplePlus
import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

const CheckboxButton = ({onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={require('../assets/images/checkbox.png')} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    left: 300,
    top: 130,
    position: 'absolute'
  },
  image: {
    height: 50,
    width: 50,
  }
})

export default CheckboxButton
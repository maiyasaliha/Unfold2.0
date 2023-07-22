import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const MyOutfitsButton = () => {
  const navigation = useNavigation()
  
  const handlePress = () => {
    navigation.navigate('ClosetScreen')
    console.log('My Outfits onPress')
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress} style={styles.whitebutton}>
        <Text style={styles.text}>My Outfits</Text>
      </Pressable>
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
    marginBottom: 10,
  },
})

export default MyOutfitsButton

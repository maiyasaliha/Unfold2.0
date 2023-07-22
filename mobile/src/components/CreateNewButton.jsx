import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CreateNewButton = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('DressupScreen')
    console.log('Create New onPress')
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress} style={styles.whitebutton}>
        <Text style={styles.text}>Create New</Text>
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
    marginBottom: 285,
    paddingHorizontal: 20,
  },
})

export default CreateNewButton

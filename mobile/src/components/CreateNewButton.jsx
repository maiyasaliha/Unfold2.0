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
      <Pressable onPress={handlePress} style={styles.purplebutton}>
        <Text style={styles.text}>Create New</Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  purplebutton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
    height: 72.2,
    width: 204,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
    color: "#000000",
    fontFamily: 'CabinCondensed-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },

})

export default CreateNewButton

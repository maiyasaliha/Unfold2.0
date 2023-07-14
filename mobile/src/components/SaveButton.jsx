import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const SaveButton = () => {

  const handlePress = () => {
    console.log('Save onPress')
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress} style={styles.purplebutton}>
        <Text style={styles.text}>Save</Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  purplebutton: {
    backgroundColor: "#937CA7",
    paddingHorizontal: 25,
    height: 40,
    width: 82,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: "#FFFFFF",
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginLeft: 180,
    marginTop: 30,
  },

})

export default SaveButton

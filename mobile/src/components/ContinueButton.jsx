import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const ContinueButton = ({ navigation, screenName }) => {

  const handlePress = () => {
    navigation.navigate(screenName)
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress} style={styles.purplebutton}>
        <Text style={styles.text}>Continue</Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  purplebutton: {
    backgroundColor: "#937CA7",
    paddingHorizontal: 25,
    height: 58,
    width: 248,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  buttonContainer: {
    marginTop: 400,
    marginBottom: 20,
    paddingHorizontal: 20,
  },

})

export default ContinueButton

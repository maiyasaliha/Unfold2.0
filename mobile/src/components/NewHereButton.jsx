import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const NewHereButton = ({ navigation, screenName }) => {

    const handlePress = () => {
        navigation.navigate(screenName)
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={handlePress} >
                <Text style={styles.text}>New Here?</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: "#937CA7",
      fontFamily: 'CabinCondensed-Regular',
      textDecorationLine: 'underline',
    },
    buttonContainer: {
      justifyContent: 'flex-start',
    },
  
  })
  

export default NewHereButton

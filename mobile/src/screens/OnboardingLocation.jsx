import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, } from 'react-native'
import React, { useState } from 'react'
import { ContinueButton, PreviousButton } from '../components'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

const OnboardingLocation = () => {
  const navigation = useNavigation()
  const [postalCode, setPostalCode] = useState('')

  const handlePostalCodeChange = (text) => {
    // Remove any non-digit characters from the input
    const formattedPostalCode = text.replace(/\D/g, '')
    setPostalCode(formattedPostalCode)
    console.log('Location Entered')
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your Location</Text>
      <View style={styles.containerBox}>
            <Image source={require('../assets/images/sgflag.png')} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Enter postal code"
                placeholderTextColor="#937CA7"
                keyboardType="numeric"
                maxLength={6}
                value={postalCode}
                onChangeText={handlePostalCodeChange}
            />
        </View>
      <View style={styles.buttonContainer}>
        <ContinueButton navigation={navigation} screenName="OnboardingHeight" />
        <PreviousButton navigation={navigation} screenName="OnboardingBirthday" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: "#000000",
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  container: {
    flex: 2,
    justifyContent: 'flex-start', //vertical
    alignItems: 'center', //horizontal
    paddingTop: 100,
  },
  buttonContainer: {
    top: 400,
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 100,
    top: 210,
},
input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#937CA7",
    fontFamily: 'CabinCondensed-Regular',
},
image: {
    width: 40,
    height: 40,
    marginRight: 10,
},

})
export default OnboardingLocation
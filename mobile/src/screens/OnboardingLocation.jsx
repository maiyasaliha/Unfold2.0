import { Text, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { ContinueButton, LocationInput, PreviousButton } from '../components'
import { useNavigation } from '@react-navigation/native'

const OnboardingLocation = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your Location</Text>
      <LocationInput />
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

})
export default OnboardingLocation
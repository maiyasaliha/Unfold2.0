import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { ContinueButton, HeightInput, PreviousButton } from '../components'
import { useNavigation } from '@react-navigation/native'

const OnboardingHeight = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter your Height</Text>
      <HeightInput />
      <View style={styles.buttonContainer}>
        <ContinueButton navigation={navigation} screenName="OnboardingGender" />
        <PreviousButton navigation={navigation} screenName="OnboardingLocation" />
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
export default OnboardingHeight
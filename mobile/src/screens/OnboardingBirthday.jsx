import { Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { ContinueButton, DateInput, PreviousButton } from '../components'
import { useNavigation } from '@react-navigation/native'

const OnboardingBirthday = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.text}>Enter your Birthday</Text>
      <DateInput />
      <ContinueButton navigation={navigation} screenName="OnboardingLocation" />
      <PreviousButton navigation={navigation} screenName="SignUpScreen" />
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

})
export default OnboardingBirthday
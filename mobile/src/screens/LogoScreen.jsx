import { SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { LoginButton, NewHereButton } from '../components'
import { useNavigation } from '@react-navigation/native'


const LogoScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/uflogo.png')} style={styles.image} />
      <LoginButton navigation={navigation} screenName="LoginScreen" />
      <NewHereButton navigation={navigation} screenName="SignUpScreen" />
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
    top: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start', //vertical
    alignItems: 'center', //horizontal
    paddingTop: 100,
  },
  image: {
    height: 178,
    width: 218,
    marginBottom: -150,
    top: 25,
    marginRight: 10,
  },
})
export default LogoScreen
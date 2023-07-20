import { SafeAreaView, StyleSheet, Image, Platform } from 'react-native'
import React from 'react'
import { LoginButton } from '../components'
import { useNavigation } from '@react-navigation/native'


const LogoScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/images/uflogo.png')} style={styles.image} />
      <LoginButton navigation={navigation} screenName="AuthScreen" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', //vertical
    alignItems: 'center', //horizontal
    paddingTop: 100,
  },
  image: {
    height: 213.6,
    width: 261.6,
    marginBottom: -150,
    top: 25,
    marginRight: 10,
  },
})
export default LogoScreen
import { View, Text, SafeAreaView, StyleSheet, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import { ContinueButton, HeightInput, PreviousButton } from '../components'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

const OnboardingHeight = () => {
  const navigation = useNavigation()
  const [height, setHeight] = useState('');

    const handleHeightChange = (text) => {
        setHeight(text);
        console.log('Height Entered')
    };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter your Height</Text>
      <View style={styles.containerbox}>
            <TextInput
                style={styles.input}
                placeholder="Height in centimetres"
                placeholderTextColor="#937CA7"
                value={height}
                onChangeText={handleHeightChange}
                textAlign='center'
            />
        </View>
      <View style={styles.buttonContainer}>
        <ContinueButton navigation={navigation} screenName="OnboardingGender" />
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
  containerbox: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 200,
    marginLeft: 10,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#937CA7",
    fontFamily: 'CabinCondensed-Regular',
    marginRight: 10,
  },
})
export default OnboardingHeight
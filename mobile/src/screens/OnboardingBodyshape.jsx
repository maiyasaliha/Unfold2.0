import { Text, SafeAreaView, StyleSheet, ScrollView, Platform } from 'react-native';
import React from 'react';
import { ContinueButton, PressableOption, PressableOptionwithImage, PreviousButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const OnboardingBodyshape = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your Body</Text>
      <Text style={styles.text}>shape</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <PressableOptionwithImage 
        text="Inverted Triangle   " 
        image= {require('../assets/images/invertedtriangle.png')} 
        />
        <PressableOptionwithImage 
        text="Round                     "
        image= {require('../assets/images/round.png')} 
        />
        <PressableOptionwithImage 
        text="Hourglass               "
        image= {require('../assets/images/hourglass.png')} 
        />
        <PressableOptionwithImage 
        text="Rectangle               "
        image= {require('../assets/images/rectangle.png')} 
        />
        <PressableOptionwithImage 
        text="Triangle                   "
        image= {require('../assets/images/triangle.png')} 
        />
      </ScrollView>
      <ContinueButton navigation={navigation} screenName="OnboardingColourcombos" />
      <PreviousButton navigation={navigation} screenName="OnboardingFaceshape" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: '#000000',
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 40,
  },
  scrollContainer: {
    justifyContent: 'space-between', // Move the justifyContent style here
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default OnboardingBodyshape;

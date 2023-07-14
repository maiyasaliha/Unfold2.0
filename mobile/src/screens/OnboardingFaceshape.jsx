import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ContinueButton, PressableOptionwithImage, PreviousButton } from '../components';
import { useNavigation } from '@react-navigation/native';

const OnboardingFaceshape = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your Face</Text>
      <Text style={styles.text}>shape</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PressableOptionwithImage 
        text="Oval                   " 
        image= {require('../assets/images/oval.png')} 
        />
        <PressableOptionwithImage 
        text="Round               " 
        image= {require('../assets/images/round.png')} 
        />
        <PressableOptionwithImage 
        text="Square              " 
        image= {require('../assets/images/square.png')} 
        />
        <PressableOptionwithImage 
        text="Rectangle         " 
        image= {require('../assets/images/rectangle.png')} 
        />
        <PressableOptionwithImage 
        text="Triangle             " 
        image= {require('../assets/images/triangle.png')} 
        />
         <PressableOptionwithImage 
        text="Diamond          " 
        image= {require('../assets/images/diamond.png')} 
        />
        <PressableOptionwithImage 
        text="Heart                 " 
        image= {require('../assets/images/heart.png')} 
        />
      </ScrollView>
      <ContinueButton navigation={navigation} screenName="OnboardingBodyshape" />
      <PreviousButton navigation={navigation} screenName="OnboardingSkintone" />
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
  round:{
    height: 20,
    width: 20,
  },
});

export default OnboardingFaceshape;

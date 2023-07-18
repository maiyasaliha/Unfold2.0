import { Text, SafeAreaView, StyleSheet, ScrollView, Platform } from 'react-native';
import React from 'react';
import { ContinueButton, PressableOption, PreviousButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const OnboardingSkintone = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your skin undertone</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PressableOption text="Cool                                " />
        <PressableOption text="Warm                                " />
        <PressableOption text="Neutral                             " />
        <PressableOption text="Olive                               " />
      </ScrollView>
      <ContinueButton navigation={navigation} screenName="OnboardingFaceshape" />
      <PreviousButton navigation={navigation} screenName="OnboardingGender" />
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
    paddingTop: 30,
    height: 400,
    paddingBottom: 30,
  },
  smallText: {
    fontSize: 17,
    color: '#937CA7',
    fontFamily: 'CabinCondensed-Regular',
    textAlign: 'center',
    top: -80,
  },
});

export default OnboardingSkintone;

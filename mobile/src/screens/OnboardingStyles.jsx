import { Text, SafeAreaView, StyleSheet, ScrollView, Platform } from 'react-native';
import React from 'react';
import { ContinueButton, PressableOption, PreviousButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const OnboardingStyles = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your preferred</Text>
      <Text style={styles.text}>styles</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PressableOption text="Athleisure                                   " />
        <PressableOption text="Bohemian                                     " />
        <PressableOption text="Business Casual                                     " />
        <PressableOption text="Chic                                     " />
        <PressableOption text="Classic                                     " />
        <PressableOption text="Coquette                                     " />
        <PressableOption text="Ethnic                                     " />
        <PressableOption text="Goth                                     " />
        <PressableOption text="Grunge                                     " />
        <PressableOption text="Kawaii                                     " />
        <PressableOption text="Minimalist                                     " />
        <PressableOption text="Parisian                                     " />
        <PressableOption text="Preppy                                     " />
        <PressableOption text="Punk                                     " />
        <PressableOption text="Parisian                                     " />
        <PressableOption text="Retro                                     " />
        <PressableOption text="Streetwear                                     " />
        <PressableOption text="Trendy                                     " />
        <PressableOption text="Vintage                                     " />
        <PressableOption text="Y2K                                     " />
      </ScrollView>
      <ContinueButton navigation={navigation} screenName="HomeScreen" />
      <PreviousButton navigation={navigation} screenName="OnboardingColourcombos" />
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

export default OnboardingStyles;

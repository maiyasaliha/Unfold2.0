import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ContinueButton, PressableOption, PreviousButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const OnboardingGender = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your gender</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PressableOption text="Male                                " />
        <PressableOption text="Female                         " />
        <PressableOption text="Custom                         " />
      </ScrollView>
      <Text style={styles.smallText}>select to indicate the clothes you</Text>
      <Text style={styles.smallText}>predominantly wear</Text>
      <ContinueButton navigation={navigation} screenName="OnboardingSkintone" />
      <PreviousButton navigation={navigation} screenName="OnboardingHeight" />
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
    height: 300,
    paddingBottom: 10,
  },
  smallText: {
    fontSize: 17,
    color: '#937CA7',
    fontFamily: 'CabinCondensed-Regular',
    textAlign: 'center',
    top: -100,
  }
});

export default OnboardingGender;

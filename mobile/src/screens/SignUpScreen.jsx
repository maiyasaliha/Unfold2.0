import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { EmailInput, PasswordInput, NameInput, ProgressBar, BackArrowButton, ContinueButtonS } from '../components';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <BackArrowButton navigation={navigation} screenName="LogoScreen" />
      <Text style={styles.text}>Sign Up</Text>
      <EmailInput />
      <NameInput />
      <PasswordInput />
      <ContinueButtonS navigation={navigation} screenName="OnboardingBirthday" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: "#000000",
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
    textAlign: 'center',
    marginTop: 40,
    marginRight: 10,
    marginBottom: -50,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default SignUpScreen;
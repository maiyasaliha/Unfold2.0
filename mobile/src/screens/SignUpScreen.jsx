import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { EmailInput, PasswordInput, NameInput, ContinueButton, ProgressBar, BackArrowButton } from '../components';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <BackArrowButton navigation={navigation} screenName="LogoScreen" />
        <Text style={styles.text}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <EmailInput />
          <NameInput />
          <PasswordInput />
        </View>
      </View>
      <View style={styles.anotherContainer}>
        <ContinueButton navigation={navigation} screenName="OnboardingBirthday" />
      </View>
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: -30,
  },
  anotherContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 120,
  },
});

export default SignUpScreen;

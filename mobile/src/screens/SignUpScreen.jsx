import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react'
import { ProgressBar, BackArrowButton, ContinueButtonS } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.129:5000' : 'http://192.168.0.129:5000';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    console.log('Email Entered')
  };
  const handleNameChange = (text) => {
    setName(text);
    console.log('Name Entered')
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log('Password Entered')
  };
  const handleNext = () => {
    // Send the data to the server and navigate to the next screen
    axios.post('http://localhost:5000/auth', { email, name, password })
      .then(response => {
        console.log('User Successfully Registered!');
        navigation.navigate('OnboardingBirthday');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackArrowButton navigation={navigation} screenName="LogoScreen" />
      <Text style={styles.text}>Sign Up</Text>
      <View style={styles.containerbox}>
        <View style={styles.purpleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#937CA7"
            value={email}
            onChangeText={handleEmailChange}
          />
        </View>
        <View style={styles.purpleContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#937CA7"
            value={name}
            onChangeText={handleNameChange}
          />
        </View>
        <View style={styles.purpleContainer}>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#937CA7"
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>
      </View>
      <ContinueButtonS onPress={handleNext} />
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
  purpleContainer: {
    backgroundColor: "#E7DBF1",
    paddingHorizontal: 25,
    height: 58,
    width: 251,
    borderRadius: 12,
    justifyContent: 'center',
    marginBottom: 25,
  },
  containerbox: {
    alignItems: 'center',
    top: 80,
    marginBottom: -75,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 20,
    color: "#937CA7",
    fontFamily: 'CabinCondensed-Regular',
  },
  message: {
    fontSize: 16,
    marginVertical: '5%',
  },
});

export default SignUpScreen;
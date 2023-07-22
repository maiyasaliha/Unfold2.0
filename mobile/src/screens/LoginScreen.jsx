import { Text, SafeAreaView, StyleSheet, View, TextInput, Platform, Pressable } from 'react-native';
import React, { useState } from 'react'
import { ForgotPasswordButton, BackArrowButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.129:5000' : 'http://192.168.0.129:5000';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');


  const handleEmailChange = (text) => {
    setEmail(text);
    console.log('Email Entered')
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log('Password Entered')
  };
  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:5000/auth/login", data).then((response) => {
      console.log(response.data);
    }).catch(err => {
      setIsValid(false)
      console.log('Error:', err);
    });
    navigation.navigate('HomeScreen')
    console.log('Unfold onPress')
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackArrowButton navigation={navigation} screenName="LogoScreen" />
      <Text style={styles.text}>Log In</Text>
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
            secureTextEntry={true}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#937CA7"
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>
      </View>
      <ForgotPasswordButton navigation={navigation} screenName="ForgotPassword" />
      <View style={styles.buttonContainer}>
        <Pressable disabled={!isValid} onPress={login} style={styles.purplebutton}>
          <Text style={styles.textwhite}>Unfold</Text>
        </Pressable>
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
    marginBottom: -30,
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
    top: 70,
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
  purplebutton: {
    backgroundColor: "#937CA7",
    paddingHorizontal: 25,
    height: 58,
    width: 248,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textwhite: {
    fontSize: 24,
    color: "#FFFFFF",
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  buttonContainer: {
    marginTop: 280,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
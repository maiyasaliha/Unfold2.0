import { Text, SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react'
import { UnfoldButton, ForgotPasswordButton, BackArrowButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.129:5000' : 'http://192.168.0.129:5000';


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
    console.log('Email Entered')
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
    console.log('Password Entered')
  };
  const onLoggedIn = token => {
    fetch(`${API_URL}/private`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status === 200) { //if successful
            setMessage(jsonRes.message);
            console.log(jsonRes);
          }
        } catch (err) {
          console.log(err);
        };
      })
      .catch(err => {
        console.log(err);
      });

  }
  const onSubmitHandler = () => {
    const payload = {
      email,
      password,
    };
    fetch(`${API_URL}/${'login'}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            onLoggedIn(jsonRes.token);
            setIsError(false);
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        };
      })
      .catch(err => {
        console.log(err);
      });
      if (!isError) {
        navigation.navigate('HomeScreen')
        console.log('Unfold onPress')
      }
  };

  const getMessage = () => {
    const status = isError ? `Error: ` : `Success: `;
    return status + message;
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackArrowButton navigation={navigation} screenName="LogoScreen" />
      <Text style={styles.text}>Log In</Text>
      <View style={styles.containerbox}>
        <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
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
      <UnfoldButton onPress={onSubmitHandler} />
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
});

export default LoginScreen;
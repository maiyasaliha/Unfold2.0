import { Text, SafeAreaView, StyleSheet, View, TextInput, Pressable, Platform } from 'react-native';
import React, { useState } from 'react'
import { ProgressBar, BackArrowButton, ContinueButtonS } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios, { Axios } from 'axios';
import * as yup from 'yup';
import { Formik } from 'formik';


const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.129:5000' : 'http://192.168.0.129:5000';

const signupSchema = yup.object().shape({
  email: yup.string().email('Please Enter Valid Email').required('Email is Required'),
  name: yup.string().required('Name is Required'),
  password: yup.string().min(8, ({ min }) => 'Password must be at least 8 characters').required('Password is Required'),
})

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
  const handlePress = () => {
    navigation.navigate('OnboardingBirthday')
    console.log('Continue onPress')
  }
  const onSubmit = () => {
    const data = {email: email, name: name, password: password};
    axios.post("http://localhost:5000/auth", data).then((response) => {
      console.log(response.data);
    });
    navigation.navigate('OnboardingBirthday')
    console.log('Continue onPress')
  };



  return (
    <Formik
      initialValues={{ email: '', name: '', password: '' }}
      validateOnMount={true}
      onSubmit={onSubmit}
      validationSchema={signupSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
        <SafeAreaView style={styles.container}>
          <BackArrowButton navigation={navigation} screenName="LogoScreen" />
          <Text style={styles.text}>Sign Up</Text>
          <View style={styles.containerbox}>
            <View style={styles.inputerrorcontainer}>
              <View style={styles.purpleContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#937CA7"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
              </View>
              <View style={styles.errorcontainer}>
                {(errors.email && touched.email) &&
                  <Text style={styles.message}>{errors.email}</Text>
                }
              </View>
            </View>
            <View style={styles.inputerrorcontainer}>
              <View style={styles.purpleContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#937CA7"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
              </View>
              <View style={styles.errorcontainer}>
                {(errors.name && touched.name) &&
                  <Text style={styles.message}>{errors.name}</Text>
                }
              </View>
            </View>
            <View style={styles.inputerrorcontainer}>
              <View style={styles.purpleContainer}>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#937CA7"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
              </View>
              <View style={styles.errorcontainer}>
                {(errors.password && touched.password) &&
                  <Text style={styles.message}>{errors.password}</Text>
                }
              </View>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable disabled={!isValid} onPress={onSubmit} style={styles.purplebutton}>
              <Text style={styles.textwhite}>Continue</Text>
            </Pressable>
          </View>
        </SafeAreaView>
      )}
    </Formik>
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
  },
  containerbox: {
    alignItems: 'center',
    top: 90,
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
    fontSize: 14,
    marginVertical: '5%',
    color: 'red',
    fontWeight: 'bold',
  },
  errorcontainer: {
    alignContent: 'center',
    marginTop: -5,
  },
  inputerrorcontainer: {
    alignContent: 'center',
    marginTop: 15,

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

export default SignUpScreen;
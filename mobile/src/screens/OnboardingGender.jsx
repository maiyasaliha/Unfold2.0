import { Text, SafeAreaView, StyleSheet, ScrollView, View, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import { ContinueButtonS, PreviousButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getUserId } from '../tempstore/userPreferenceStore';


const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.31:5000' : 'http://192.168.0.31:5000';



const OnboardingGender = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState('');
  const [mselected, setMselected] = useState(false);
  const [fselected, setFselected] = useState(false);
  const [cselected, setCselected] = useState(false);


  const malePress = () => {
    setMselected(!mselected);
    setGender('Male');
    console.log('Male Option Pressed')
  };
  const femalePress = () => {
    setFselected(!fselected);
    setGender('Female');
    console.log('Female Option Pressed')
  };
  const customPress = () => {
    setCselected(!cselected);
    setGender('Custom');
    console.log('Custom Option Pressed')
  };

  const handlePress = () => {
    axios.post(`${API_URL}/gender`, {
      userId: getUserId(),
      gender: gender,
    }).then((response) => {
      console.log('Gender Added:', gender)
      navigation.navigate('OnboardingSkintone')
      console.log('Continue onPress')
    }).catch((err) =>
      console.log('Error inserting Gender:', err)
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your gender</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable onPress={malePress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Text value={gender} style={styles.buttonText}>Male                                </Text>
            <View style={styles.radioButton}>
              {mselected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={femalePress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Text value={gender} style={styles.buttonText}>Female                                </Text>
            <View style={styles.radioButton}>
              {fselected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={customPress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Text value={gender} style={styles.buttonText}>Custom                                </Text>
            <View style={styles.radioButton}>
              {cselected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
      </ScrollView>
      <Text style={styles.smallText}>select to indicate the clothes you</Text>
      <Text style={styles.smallText}>predominantly wear</Text>
      <View style={styles.buttoncontainer}>
        <ContinueButtonS onPress={handlePress} />
        <PreviousButton navigation={navigation} screenName="OnboardingHeight" />
      </View>
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
    top: 100,
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
    top: -250,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#937CA7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,

  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#937CA7',
  },
  buttonText: {
    fontSize: 20,
    color: '#937CA7',
    fontFamily: 'CabinCondensed-Regular',
    marginLeft: 35,
    marginRight: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: 0.5, height: 0.5 },
  },
  purpleContainer: {
    backgroundColor: "#E7DBF1",
    paddingHorizontal: 25,
    height: 58,
    width: 295,
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Required for Android shadow
    marginBottom: 20,
  },
  buttoncontainer:{
    top: -165,
  }
});

export default OnboardingGender;

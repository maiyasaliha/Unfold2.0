import { Text, SafeAreaView, StyleSheet, ScrollView, View, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import { PreviousButton, ContinueButtonS } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getUserId, getApiUrl } from '../tempstore/userPreferenceStore';


API_URL = getApiUrl();

const OnboardingSkintone = () => {
  const navigation = useNavigation();

  const [skintone, setSkintone] = useState('');
  const [coolSelected, setCoolselected] = useState(false);
  const [warmSelected, setWarmselected] = useState(false);
  const [neutralSelected, setNeutralselected] = useState(false);
  const [oliveSelected, setOliveselected] = useState(false);

  const coolPress = () => {
    setCoolselected(!coolSelected);
    setSkintone('Cool');
    console.log('Cool Option Pressed')
  };
  const warmPress = () => {
    setWarmselected(!warmSelected);
    setSkintone('Warm');
    console.log('Warm Option Pressed')
  };
  const neutralPress = () => {
    setNeutralselected(!neutralSelected);
    setSkintone('Neutral');
    console.log('Neutral Option Pressed')
  };
  const olivePress = () => {
    setOliveselected(!oliveSelected);
    setSkintone('Olive');
    console.log('Olive Option Pressed')
  };

  const handlePress = () => {
    axios.post(`${API_URL}/skintone`, {
      userId: getUserId(),
      skintone: skintone,
    }).then((response) => {
      console.log('Skintone Added:', skintone)
      navigation.navigate('OnboardingFaceshape')
      console.log('Continue onPress')
    }).catch((err) =>
      console.log('Error inserting Faceshape:', err)
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your skin undertone</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Pressable onPress={coolPress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Text value={skintone} style={styles.buttonText}>Cool                                </Text>
            <View style={styles.radioButton}>
              {coolSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={warmPress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Text value={skintone} style={styles.buttonText}>Warm                                </Text>
            <View style={styles.radioButton}>
              {warmSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={neutralPress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Text value={skintone} style={styles.buttonText}>Neutral                                </Text>
            <View style={styles.radioButton}>
              {neutralSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={olivePress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Text value={skintone} style={styles.buttonText}>Olive                                </Text>
            <View style={styles.radioButton}>
              {oliveSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
      </ScrollView>
      <View style ={styles.buttoncontainer}>
        <ContinueButtonS onPress={handlePress} />
        <PreviousButton navigation={navigation} screenName="OnboardingGender" />
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
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 40,
    top: 100,
  },
  scrollContainer: {
    paddingTop: 30,
    height: 330,
    paddingBottom: 10,
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
  buttoncontainer: {
    top: -165,
  }
});

export default OnboardingSkintone;

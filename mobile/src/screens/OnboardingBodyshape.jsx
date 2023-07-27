import { Text, SafeAreaView, StyleSheet, ScrollView, View, Platform, Pressable, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { PreviousButton, ContinueButtonS } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getUserId, getApiUrl } from '../tempstore/userPreferenceStore';


API_URL = getApiUrl();

const { width, height } = Dimensions.get("window");


const OnboardingBodyshape = () => {
  const navigation = useNavigation();

  const [bodyshape, setBodyshape] = useState('');

  const [invertedSelected, setInvertedselected] = useState(false);
  const [roundSelected, setRoundselected] = useState(false);
  const [rectangleSelected, setRectangleselected] = useState(false);
  const [triangleSelected, setTriangleselected] = useState(false);
  const [hourglassSelected, setHourglassselected] = useState(false);

  const invertedPress = () => {
    setInvertedselected(!invertedSelected);
    setBodyshape('Inverted Triangle');
    console.log('Inverted Triangle Option Pressed')
  };
  const roundPress = () => {
    setRoundselected(!roundSelected);
    setBodyshape('Round');
    console.log('Round Option Pressed')
  };
  const hourglassPress = () => {
    setHourglassselected(!hourglassSelected);
    setBodyshape('Hourglass');
    console.log('Hourglass Option Pressed')
  };
  const rectanglePress = () => {
    setRectangleselected(!rectangleSelected);
    setBodyshape('Rectangle');
    console.log('Rectangle Option Pressed')
  };
  const trianglePress = () => {
    setTriangleselected(!triangleSelected);
    setBodyshape('Triangle');
    console.log('Triangle Option Pressed')
  };

  const handlePress = () => {
    axios.post(`${API_URL}/bodyshape`, {
      userId: getUserId(),
      bodyshape: bodyshape,
    }).then((response) => {
      console.log('BodyShape Added:', bodyshape)
      navigation.navigate('OnboardingColourcombos')
      console.log('Continue onPress')
    }).catch((err) =>
      console.log('Error inserting BodyShape:', err)
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your Body</Text>
      <Text style={styles.text}>shape</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Pressable onPress={invertedPress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Image style={styles.image} source={require('../assets/images/invertedtriangle.png')} />
            <Text style={styles.buttonText}>Inverted Triangle   </Text>
            <View style={styles.radioButton}>
              {invertedSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={roundPress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Image style={styles.image} source={require('../assets/images/round.png')} />
            <Text style={styles.buttonText}>Round                     </Text>
            <View style={styles.radioButton}>
              {roundSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={hourglassPress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Image style={styles.image} source={require('../assets/images/hourglass.png')} />
            <Text style={styles.buttonText}>Hourglass               </Text>
            <View style={styles.radioButton}>
              {hourglassSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={rectanglePress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Image style={styles.image} source={require('../assets/images/rectangle.png')} />
            <Text style={styles.buttonText}>Rectangle               </Text>
            <View style={styles.radioButton}>
              {rectangleSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={trianglePress} style={styles.button}>
          <View style={styles.purpleContainer}>
            <Image style={styles.image} source={require('../assets/images/triangle.png')} />
            <Text style={styles.buttonText}>Triangle                   </Text>
            <View style={styles.radioButton}>
              {triangleSelected && <View style={styles.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
      
      </ScrollView>
      <ContinueButtonS onPress={handlePress} />
      <PreviousButton navigation={navigation} screenName="OnboardingFaceshape" />
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
  round: {
    height: 20,
    width: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginRight: 60,
  },
  purpleContainer: {
    backgroundColor: '#E7DBF1',
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
  image: {
    height: 35,
    width: 35,
    marginRight: 10,
    marginLeft: 25,
  },
});

export default OnboardingBodyshape;

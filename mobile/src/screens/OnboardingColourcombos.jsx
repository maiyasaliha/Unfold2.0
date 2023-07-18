import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Platform } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { ContinueButton, PreviousButton, SaveButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const OnboardingColourcombos = () => {
  const [color, setColor] = useState('');
  const navigation = useNavigation();

  const onColorChange = (color) => {
    setColor(color);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your preferred Colour combos</Text>
      <View style={styles.sectionContainer}>
        <View style={styles.colorCircleContainer}>
          {color ? <View style={[styles.colorCircle, { backgroundColor: color }]} /> : null}
        </View>
        <ColorPicker
          color={color}
          onColorChange={(color) => onColorChange(color)}
          thumbSize={30}
          sliderSize={30}
          noSnap={true}
          row={false}
          style={styles.colorPicker}
        />
      </View>
      <SaveButton />
      <View style={styles.buttonContainer}>
        <ContinueButton navigation={navigation} screenName="OnboardingStyles" />
        <PreviousButton navigation={navigation} screenName="OnboardingBodyshape" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 18,
    height: 280,
    width: 280,
  },
  buttonContainer: {
    top: 20,
  },
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
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  colorPicker: {
    flex: 1,
  },
  colorCircleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  colorCircle: {
    width: 14,
    height: 14,
    borderRadius: 6,
    marginRight: 30,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Required for Android shadow
  },
});

export default OnboardingColourcombos;

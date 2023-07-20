import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { setGender } from '../tempstore/userPreferenceStore';

const GenderOption = ({ text }) => {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
    //onPress(); // Trigger the onPress event handler passed as prop
    setGender(text);
    console.log('Gender Option Pressed')
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <View style={styles.purpleContainer}>
        <Text style={styles.buttonText}>{text}</Text>
        <View style={styles.radioButton}>
          {selected && <View style={styles.radioInnerCircle} />}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
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
});

export default GenderOption;

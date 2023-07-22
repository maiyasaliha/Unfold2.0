import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TodayButton = ({ isPressed }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('HomeScreen');
    console.log('Today onPress');
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress}>
        <Text style={styles.text}>Today</Text>
        {isPressed && <View style={styles.rectangle} />} 
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: '#000000',
    fontFamily: 'CabinCondensed-Regular',
    textAlign: 'center',
    bottom: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    height: 2,
    width: 160,
    backgroundColor: '#3A2D56',
  },
});

export default TodayButton;

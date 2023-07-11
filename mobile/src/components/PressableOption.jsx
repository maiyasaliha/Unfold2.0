import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PressableOption = ({ onPress, text }) => {
    return (
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    buttonText: {
        width: '100%',
        height: 40,
        fontSize: 20,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
    },
    button: {
        backgroundColor: "#E7DBF1",
        paddingHorizontal: 25,
        height: 58,
        width: 251,
        borderRadius: 12,
        justifyContent: 'center',
    },
});

export default PressableOption
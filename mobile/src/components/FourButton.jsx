import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const FourButton = ({ is4Press }) => {
  const navigation = useNavigation();


  const on4Press = () => {
    navigation.navigate('FourViewScreen');
    console.log('4 onPress');
  };

  return (
    <View>
      <Pressable onPress={on4Press}>
        <Image
          style={[styles.image, is4Press ? styles.whiteImage : styles.greyImage]}
          source={require('../assets/images/4.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  whiteImage: {
    tintColor: '#FFFFFF', // White color
  },
  greyImage: {
    tintColor: '#D3D3D3', // Grey color
  },
});

export default FourButton;

import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const TwoButton = ({ is2Press }) => {
  const navigation = useNavigation();

  const on2Press = () => {
    navigation.navigate('DressupScreen');
    console.log('2 onPress');
  };

  return (
    <View>
      <Pressable onPress={on2Press}>
        <Image
          style={[styles.image, is2Press ? styles.whiteImage : styles.greyImage]}
          source={require('../assets/images/2.png')}
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

export default TwoButton;

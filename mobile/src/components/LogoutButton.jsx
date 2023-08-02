import React from 'react';
import { Pressable, Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LogoutButton = () => {
  const navigation = useNavigation();


  const handleButtonPress = () => {
    navigation.navigate('LogoScreen')
    console.log('Logout onPress')

  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Image source={require('../assets/images/logout.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row'
  },
  image: {
    width: 25,
    height: 25,
    tintColor: '#937CA7'
  },
  buttonContainer: {
    paddingTop: 10,
    marginRight: 40,
    paddingBottom: 10
  },

});

export default LogoutButton;

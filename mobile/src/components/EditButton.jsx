import React from 'react';
import { Pressable, Image, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const EditButton = () => {
  const navigation = useNavigation();


  const handleButtonPress = () => {
    navigation.navigate('ModifySettingsScreen')
    console.log('Edit onPress')

  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handleButtonPress} style={styles.button}>
        <Image source={require('../assets/images/edit.png')} style={styles.image} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row-reverse'
  },
  image: {
    width: 25,
    height: 25,
    tintColor: '#937CA7'
  },
  buttonContainer: {
    paddingTop: 10,
    marginRight: 40,
    paddingBottom: 10,
    left: 40
  },

});

export default EditButton;

import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native';
import React from 'react';
import HeartButton from './HeartButton';
import { useNavigation } from '@react-navigation/native';

const WardrobeContainer = ({ image }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the ItemCardScreen and pass the 'image' parameter
    navigation.navigate('ItemCardScreen',  image );
    console.log('item pressed');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress} style={styles.whitebox}>
        <View style={styles.heartcontainer}>
          <HeartButton imageurl={image} />
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  whitebox: {
    height: 184.65,
    width: 152,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 25,
    borderRadius: 16.89,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 15,
  },
  heartcontainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 10,
    left: 50,
  },
  image: {
    height: 140,
    width: 110,
  },
});

export default WardrobeContainer;

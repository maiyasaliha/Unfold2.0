import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AddItemsButton = () => {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('AddItemScreen')
    console.log('Add Items onPress')
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={handlePress} style={styles.purplebutton}>
        <Text style={styles.text}>Add Items</Text>
      </Pressable>
    </View>

  )
}

const styles = StyleSheet.create({
  purplebutton: {
    backgroundColor: "#937CA7",
    paddingHorizontal: 25,
    height: 52.2,
    width: 204,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: 'CabinCondensed-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  buttonContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },

})

export default AddItemsButton

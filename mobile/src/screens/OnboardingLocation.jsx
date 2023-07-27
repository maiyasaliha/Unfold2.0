import { Text, SafeAreaView, StyleSheet, View, TextInput, Image, Platform, Dimensions} from 'react-native'
import React, { useState } from 'react'
import { ContinueButtonS, PreviousButton } from '../components'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { getUserId, getApiUrl } from '../tempstore/userPreferenceStore';


API_URL = getApiUrl();

const { width, height } = Dimensions.get("window");

const OnboardingLocation = () => {
  const navigation = useNavigation()
  const [location, setLocation] = useState('')

  const handlePostalCodeChange = (text) => {
    // Remove any non-digit characters from the input
    const formattedPostalCode = text.replace(/\D/g, '')
    setLocation(formattedPostalCode)
    console.log('Location Entered')
  };
  const handlePress = () => {
    axios.post(`${API_URL}/location`, {
      userId: getUserId(),
      location: location,
    }).then((response) => {
      console.log('Location Added:', location)
      navigation.navigate('OnboardingHeight')
      console.log('Continue onPress')
    }).catch((err) =>
      console.log('Error inserting Location:', err)
    )
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your Location</Text>
      <View style={styles.containerBox}>
            <Image source={require('../assets/images/sgflag.png')} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Enter postal code"
                placeholderTextColor="#937CA7"
                maxLength={6}
                value={location}
                onChangeText={handlePostalCodeChange}
            />
        </View>
      <View style={styles.buttonContainer}>
        <ContinueButtonS onPress={handlePress} />
        <PreviousButton navigation={navigation} screenName="OnboardingBirthday" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: "#000000",
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  container: {
    flex: 2,
    justifyContent: 'flex-start', //vertical
    alignItems: 'center', //horizontal
    top: height*0.1,

  },
  buttonContainer: {
    top: height*0.55,
  },
  containerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 100,
    top: 210,
},
input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#937CA7",
    fontFamily: 'CabinCondensed-Regular',
},
image: {
    width: 40,
    height: 40,
    marginRight: 10,
},

})
export default OnboardingLocation
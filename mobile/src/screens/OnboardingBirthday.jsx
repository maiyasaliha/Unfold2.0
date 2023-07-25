import { View, Text, SafeAreaView, StyleSheet, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'
import { ContinueButtonS, PreviousButton } from '../components'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { getUserId, getApiUrl } from '../tempstore/userPreferenceStore';


API_URL = getApiUrl();

const OnboardingBirthday = () => {
  const navigation = useNavigation()
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const handleDayChange = (text) => {
    setDay(text);
    console.log('Date Entered')
  };

  const handleMonthChange = (text) => {
    setMonth(text);
    console.log('Month Entered')
  };

  const handleYearChange = (text) => {
    setYear(text);
    console.log('Year Entered')
  };
  const birthday = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

  const handlePress = () => {
    axios.post(`${API_URL}/birthday`, {
      userId: getUserId(),
      birthday: birthday,
    }).then((response) => {
      console.log('Birthday Added:', birthday)
      navigation.navigate('OnboardingLocation')
      console.log('Continue onPress')
    }).catch((err) =>
      console.log('Error inserting Birthday:', err)
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Enter your Birthday</Text>
      <View style={styles.containerbox}>
        <TextInput
          style={styles.input}
          placeholder="DD"
          placeholderTextColor="#937CA7"
          maxLength={2}
          value={day}
          onChangeText={handleDayChange}
        />
        <TextInput
          style={styles.input}
          placeholder="MM"
          placeholderTextColor="#937CA7"
          maxLength={2}
          value={month}
          onChangeText={handleMonthChange}
        />
        <TextInput
          style={styles.input}
          placeholder="YYYY"
          placeholderTextColor="#937CA7"
          maxLength={4}
          value={year}
          onChangeText={handleYearChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ContinueButtonS onPress={handlePress} />
        <PreviousButton navigation={navigation} screenName="AuthScreen" />
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    top: 100,
  },
  buttonContainer: {
    top: 400,
  },
  containerbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 50,
    marginLeft: 70,
    top: 200,
  },
  input: {
    width: '30%',
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#937CA7",
    fontFamily: 'CabinCondensed-Regular',
  },
})

export default OnboardingBirthday

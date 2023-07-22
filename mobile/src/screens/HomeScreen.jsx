import { View, Platform, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import { TopBar, ToggleBar } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import PurplePlus from '../components/PurplePlus'

const HomeScreen = () => {
    const [haveOutfit, setHaveOutfit] = useState(false);

  return (
    <SafeAreaView>
      <TopBar text="Today" today={true} closet={false} dressup={false}/>
      <View style={styles.container}>
        <View style={styles.purplebox}>
          <PurplePlus />
          <Text style={styles.text}>Clueless?</Text>
          <Text style={styles.text}>Let the magic Unfold!</Text>
        </View>
      </View>
      <ToggleBar />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  purplebox: {
    height: 350,
    width: 254,
    backgroundColor: "#E7DBF1",
    borderRadius: 20,
    marginLeft: 70,
    marginTop: 210,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'space-around'
    
  },
  text: {
    color: "#3A2D56",
    fontSize: 18,
    fontFamily: 'CabinCondensed-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: 0.5, height: 0.5 },

  }
})

export default HomeScreen
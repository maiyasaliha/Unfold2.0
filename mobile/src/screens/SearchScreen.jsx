import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { ToggleBar } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text>SearchScreen</Text>
      <ToggleBar />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default SearchScreen
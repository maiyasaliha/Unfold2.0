import { View, Text, Platform, StyleSheet } from 'react-native'
import React from 'react'
import { PurpleView, ToggleBar } from '../components'
import { SafeAreaView } from 'react-native-safe-area-context'

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}> 
      <Text>SearchScreen</Text>
      <PurpleView is2Press={true} is3Press={false} is4Press={false}/>
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
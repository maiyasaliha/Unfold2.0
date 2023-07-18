import { View, Platform } from 'react-native'
import React from 'react'
import { TopBar, ToggleBar } from '../components'

const HomeScreen = () => {
  return (
    <View>
      <TopBar text="Today"/>
      <ToggleBar />
    </View>
  )
}

export default HomeScreen
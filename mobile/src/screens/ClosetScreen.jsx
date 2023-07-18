import { View, Platform } from 'react-native'
import React from 'react'
import { TopBar, ToggleBar } from '../components'

const ClosetScreen = () => {
  return (
    <View>
      <TopBar text="Closet"/>
      <ToggleBar />
    </View>
  )
}

export default ClosetScreen
import { View, Platform } from 'react-native'
import React from 'react'
import { TopBar, ToggleBar } from '../components'

const DressupScreen = () => {
  return (
    <View>
      <TopBar text="Dressup" today={false} closet={false} dressup={true}/>
      <ToggleBar />
    </View>
  )
}

export default DressupScreen
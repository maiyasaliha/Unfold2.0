import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';


const CustomMarker = ({ coordinate, title }) => {
  return (
    <Marker coordinate={coordinate}>
    <View style={styles.markerWrap}>
      <View style={styles.ring}>
        <View style={styles.marker} />
      </View>
      <Text>{title}</Text>
    </View>
  </Marker>
  )
}

const styles = StyleSheet.create({
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'rgba(147,124,167, 0.3)',
        borderWidth: 1,
        borderColor: '#937CA7',
        justifyContent: 'center',
        alignItems: 'center',
      },
      markerWrap: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#937CA7',
      }
})

export default CustomMarker
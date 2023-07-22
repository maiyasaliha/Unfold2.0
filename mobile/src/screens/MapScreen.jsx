import { View, Text, Platform, StyleSheet, Dimensions, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ToggleBar } from '../components';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 1.3521,
    longitude: 103.8198,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log('Location permission status:', status);
    if (status !== 'granted') {
      alert('Please grant permission to access location');
    }
    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log('User location:', location.coords.latitude, location.coords.longitude);
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title='My Location' />
      </MapView>
      <View style={styles.buttonContainer}>
        <Pressable onPress={userLocation} style={styles.purplebutton}>
          <Text style={styles.text}>Get My Location</Text>
        </Pressable>
      </View>
      <ToggleBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  purplebutton: {
    position: 'absolute',
    backgroundColor: '#937CA7',
    paddingHorizontal: 25,
    height: 50,
    width: 160,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    right: 20,
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    right: -10,
    margin: 16,
  },
});

export default MapScreen;

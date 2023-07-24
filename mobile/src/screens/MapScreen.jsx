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

  markers: [
    {
      coordinate: {
        latitude: 1.304854372698673,
        longitude: 103.83400218150106,
      },
      title: "Lucky Thrifty",
    },

    {
      coordinate: {
        latitude: 1.3047050682867118,
        longitude: 103.83406396000152,
      },
      title: "Thrift Apparel",
    },

    {
      coordinate: {
        latitude: 1.300787011542325,
        longitude: 103.85946766645078,
      },
      title: "Function Five Thrift Shop",
    },

    {
      coordinate: {
        latitude: 1.2877027644734604,
        longitude: 103.80347922412305,
      },
      title: "Nightingale Thrift Shop",
    },

    {
      coordinate: {
        latitude: 1.3049163500328478,
        longitude: 103.90184452227004,
      },
      title: "The Barn @ Katong",
    },

    {
      coordinate: {
        latitude: 1.3721620570803492,
        longitude: 103.85212548963626,
      },
      title: "The Barn @ Ang Mo Kio",
    },

    {
      coordinate: {
        latitude: 1.3196622620381968, 
        longitude: 103.73316853565588,
      },
      title: "The Barn @ Penjuru",
    },
    {
      coordinate: {
        latitude: 1.2774570589929204, 
        longitude: 103.84811294361192,
      },
      title: "The Fashion Pulpit",
    },
    {
      coordinate: {
        latitude: 1.3147249842213204, 
        longitude: 103.8839347589535,
      },
      title: "SSVP Shop",
    },

    {
      coordinate: {
        latitude: 1.3256402713964184, 
        longitude: 103.92898044361343,
      },
      title: "Refash @ Bedok",
    },

    {
      coordinate: {
        latitude: 1.300207286590813, 
        longitude: 103.85506261293176,
      },
      title: "Refash @ Bugis",
    },

    {
      coordinate: {
        latitude: 1.436994215766167, 
        longitude: 103.78560369759586, 
      },
      title: "Refash @ Causeway Point",
    },

    {
      coordinate: {
        latitude: 1.2858957519055927, 
        longitude: 103.84467980497398,
      },
      title: "Refash @ Chinatown Point",
    },

    {
      coordinate: {
        latitude: 1.3432469230395025, 
        longitude: 103.95299468978408,
      },
      title: "Refash @ Eastpoint Mall",
    },

    {
      coordinate: {
        latitude: 1.2923255856095457, 
        longitude: 103.84954502088885,
      },
      title: "Refash @ Funan Mall",
    },

    {
      coordinate: {
        latitude: 1.2655893772014686,  
        longitude: 103.81904199759025,
      },
      title: "Refash @ Harbourfront Centre",
    },

    {
      coordinate: {
        latitude: 1.3794442447818551, 
        longitude: 103.76314717429605,
      },
      title: "Refash @ Hillion Mall",
    },

    {
      coordinate: {
        latitude: 1.430791232190833, 
        longitude: 103.83534016691469,
      },
      title: "Refash @ NorthPoint City",
    },

    {
      coordinate: {
        latitude: 1.3017407816279976, 
        longitude: 103.84490392031486, 
      },
      title: "Refash @ Plaza Singapura",
    },

    {
      coordinate: {
        latitude: 1.3550700451144777, 
        longitude: 103.94464888225261,
      },
      title: "Refash @ Tampines1",
    },

    {
      coordinate: {
        latitude: 1.3028385640984796, 
        longitude: 103.8395661742936,
      },
      title: "Refash @ Centrepoint",
    },

    {
      coordinate: {
        latitude: 1.2873633786400238, 
        longitude: 103.82675951293132,
      },
      title: "Refash @ Tiong Bahru Plaza",
    },
    {
      coordinate: {
        latitude: 1.3353536820212786,  
        longitude: 103.74263150497548,
      },
      title: "Refash @ Westgate",
    },
  ]

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
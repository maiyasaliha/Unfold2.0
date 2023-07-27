import React, { useRef, useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Animated, ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { ToggleBar, CustomMarker } from '../components';




const { width, height } = Dimensions.get("window");
const cardHeight = height / 4;
const cardWidth = cardHeight - 50;

const MapScreen = () => {
  const mapViewRef = useRef(null);
  const scrollViewRef = useRef(null);

  const handleScroll = event => {
    const { y } = event.nativeEvent.contentOffset;
    mapViewRef.current.animateToRegion(
      {
        ...region,
        latitude: region.latitude - y * 0.0015, // Adjust the scroll speed
      },
      1000 // Adjust the animation duration as needed
    );
  };

  const markers = [
    {
      id: 1,
      latitude: 1.304854372698673,
      longitude: 103.83400218150106,
      title: "Lucky Thrifty",
    },
    {
      id: 2,
      latitude: 1.3047050682867118,
      longitude: 103.83406396000152,
      title: 'Thrift Apparel',
    },
    {
      id: 3,
      latitude: 1.300787011542325,
      longitude: 103.85946766645078,
      title: "Function Five Thrift Shop",
    },
    {
      id: 4,
      latitude: 1.2877027644734604,
      longitude: 103.80347922412305,
      title: "Nightingale Thrift Shop",
    },
    {
      id: 5,
      latitude: 1.3049163500328478,
      longitude: 103.90184452227004,
      title: "The Barn @ Katong",
    },
    {
      id: 6,
      latitude: 1.3721620570803492,
      longitude: 103.85212548963626,
      title: "The Barn @ Ang Mo Kio",
    },
    {
      id: 7,
      latitude: 1.3196622620381968,
      longitude: 103.73316853565588,
      title: "The Barn @ Penjuru",
    },
    {
      id: 8,
      latitude: 1.2774570589929204,
      longitude: 103.84811294361192,
      title: "The Fashion Pulpit",
    },
    {
      id: 9,
      latitude: 1.3147249842213204,
      longitude: 103.8839347589535,
      title: "SSVP Shop",
    },
    {
      id: 10,
      latitude: 1.3256402713964184,
      longitude: 103.92898044361343,
      title: "Refash @ Bedok",
    },
    {
      id: 11,
      latitude: 1.300207286590813,
      longitude: 103.85506261293176,
      title: "Refash @ Bugis",
    },
    {
      id: 12,
      latitude: 1.436994215766167,
      longitude: 103.78560369759586,
      title: "Refash @ Causeway Point",

    },
    {
      id: 13,
      latitude: 1.2858957519055927,
      longitude: 103.84467980497398,
      title: "Refash @ Chinatown Point",
    },
    {
      id: 14,
      latitude: 1.3432469230395025,
      longitude: 103.95299468978408,
      title: "Refash @ Eastpoint Mall",
    },
    {
      id: 15,
      latitude: 1.2923255856095457,
      longitude: 103.84954502088885,
      title: "Refash @ Funan Mall",
    },
    {
      id: 16,
      latitude: 1.2655893772014686,
      longitude: 103.81904199759025,
      title: "Refash @ Harbourfront Centre",
    },
    {
      id: 17,
      latitude: 1.3794442447818551,
      longitude: 103.76314717429605,
      title: "Refash @ Hillion Mall",
    },
    {
      id: 18,
      latitude: 1.430791232190833,
      longitude: 103.83534016691469,
      title: "Refash @ NorthPoint City",

    },
    {
      id: 19,
      latitude: 1.3017407816279976,
      longitude: 103.84490392031486,
      title: "Refash @ Plaza Singapura",
    },
    {
      id: 20,
      latitude: 1.3550700451144777,
      longitude: 103.94464888225261,
      title: "Refash @ Tampines1",
    },
    {
      id: 21,
      latitude: 1.3028385640984796,
      longitude: 103.8395661742936,
      title: "Refash @ Centrepoint",
    },
    {
      id: 22,
      latitude: 1.2873633786400238,
      longitude: 103.82675951293132,
      title: "Refash @ Tiong Bahru Plaza",
    },
    {
      id: 23,
      latitude: 1.3353536820212786,
      longitude: 103.74263150497548,
      title: "Refash @ Westgate",
    },
  ];

  // State to store the current region of the map
  const [region, setRegion] = useState({
    latitude: 1.3521,
    longitude: 103.8198,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.content}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {markers.map(marker => (
        <View
          key={marker.id}
          style={styles.contentItem}
        >
          <Text style={styles.contentText}>
            {marker.title}
          </Text>
        </View>
      ))}
      </ScrollView>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={setRegion}
      >
        <Marker coordinate={region} title='My Location' />
        {markers.map(marker => (
          <CustomMarker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title}
            style={styles.marker}
          />
        ))}
      </MapView>
      <ToggleBar />
    </View>
  );
};

const AnimatedMarker = Animated.createAnimatedComponent(Marker);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // This creates enough space at the bottom for the map region animation
  },
  contentItem: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
    borderRadius: 8,
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'purple',
  }
});

export default MapScreen;

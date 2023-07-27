import React, { useRef, useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Animated, View, Text, StyleSheet, Dimensions, Image, FlatList, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { ToggleBar, CustomMarker } from '../components';
import Carousel from 'react-native-snap-carousel';


const { width, height } = Dimensions.get("window");
const cardHeight = height / 4;
const cardWidth = cardHeight - 50;

const MapScreen = () => {
   const mapViewRef = useRef(null);
   const carouselRef = useRef(null);
   const [scrollEnabled, setScrollEnabled] = useState(true); // To control map scroll

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
  const image1 = require('../assets/images/luckythrifty.jpg');
  const image2 = require('../assets/images/fivethrift.png');
  const image3 = require('../assets/images/nightingale.jpg');
  const image4 = require('../assets/images/barnkatong.jpg');
  const image5 = require('../assets/images/barnamk.png');
  const image6 = require('../assets/images/barnpenjuru.png');
  const image7 = require('../assets/images/fashionpulpit.png');
  const image8 = require('../assets/images/ssvp.png');
  const image9 = require('../assets/images/refashbedok.jpg');
  const image10 = require('../assets/images/refashbugis.png');
  const image11 = require('../assets/images/refashcauseway.png');
  const image12 = require('../assets/images/refashchinatown.png');
  const image13 = require('../assets/images/eastpointrefash.jpg');
  const image14 = require('../assets/images/funanrefash.png');
  const image15= require('../assets/images/harbourfrontrefash.png');
  const image16 = require('../assets/images/hillpointrefash.png');
  const image17= require('../assets/images/northpointrefash.png');
  const image18 = require('../assets/images/plazasingrefash.png');
  const image19= require('../assets/images/tampines1refash.png');
  const image20 = require('../assets/images/refashcentreepoints.png');
  const image21= require('../assets/images/tiongbahrurefash.png');
  const image22 = require('../assets/images/westgaterefash.png');

  const Images = [
    { URL: "https://images.app.goo.gl/JQoPthGbvYQR1Zo78" },
    { URL: "https://images.app.goo.gl/ruEAjuGNMnNWeMop8" },
    { URL: "https://images.app.goo.gl/1i3SQdtpLyHKgZir8" },
    { URL: "https://images.app.goo.gl/g7EKNiGoNk1T2Bw58" },
    { URL: "https://images.app.goo.gl/yaLNM8RGfpkT263b6" },
    { URL: "https://images.app.goo.gl/GALtG5tieEPM4yfw5" },
    { URL: "https://images.app.goo.gl/G2ECXUpHWe7dcFNcA" },
    { URL: "https://images.app.goo.gl/uWcjcWccbz9LguQEA" },
    { URL: "https://images.app.goo.gl/UbD4X9Sni7i1gxMA8" },
    { URL: "https://images.app.goo.gl/GqjxSK18UPYAZNyR6" },
    { URL: "https://images.app.goo.gl/umaVVV5q5HANtkci7" },
    { URL: "https://images.app.goo.gl/V6M7pH2tZ5NuwiQZ9" },
    { URL: "https://images.app.goo.gl/9fkb9if2hweXm41R9" },
    { URL: "https://images.app.goo.gl/Ga5Gs6HXKARFCUbEA" },
    { URL: "https://images.app.goo.gl/rgFwAvPtBiwxPrJS7" },
    { URL: "https://images.app.goo.gl/QHMtsdenvJJ6Sf2MA" },
    { URL: "https://images.app.goo.gl/fvreQ45ER5AH3ZfC8" },
    { URL: "https://images.app.goo.gl/d7Qf83NaPx4eQfse6" },
    { URL: "https://images.app.goo.gl/TMff7jNandkFHtr66" },
    { URL: "https://images.app.goo.gl/8sos5c1X9HpuhcZQ8" },
    { URL: "https://images.app.goo.gl/JgftYscw2n1xhiqP8" },
    { URL: "https://images.app.goo.gl/2k7o8oBRgrPoD9a77" },
  ];

  const markers = [
    {
      id: 1,
      latitude: 1.304854372698673,
      longitude: 103.83400218150106,
      title: "Lucky Thrifty",
      image: image1,
    },
    {
      id: 2,
      latitude: 1.300787011542325,
      longitude: 103.85946766645078,
      title: "Function Five Thrift Shop",
      image: image2,
    },
    {
      id: 3,
      latitude: 1.2877027644734604,
      longitude: 103.80347922412305,
      title: "Nightingale Thrift Shop",
      image: image3,
    },
    {
      id: 4,
      latitude: 1.3049163500328478,
      longitude: 103.90184452227004,
      title: "The Barn @ Katong",
      image: image4,
    },
    {
      id: 5,
      latitude: 1.3721620570803492,
      longitude: 103.85212548963626,
      title: "The Barn @ Ang Mo Kio",
      image: image5,
    },
    {
      id: 6,
      latitude: 1.3196622620381968,
      longitude: 103.73316853565588,
      title: "The Barn @ Penjuru",
      image: image6,
    },
    {
      id: 7,
      latitude: 1.2774570589929204,
      longitude: 103.84811294361192,
      title: "The Fashion Pulpit",
      image: image7,
    },
    {
      id: 8,
      latitude: 1.3147249842213204,
      longitude: 103.8839347589535,
      title: "SSVP Shop",
      image: image8,
    },
    {
      id: 9,
      latitude: 1.3256402713964184,
      longitude: 103.92898044361343,
      title: "Refash @ Bedok",
      image: image9,
    },
    {
      id: 10,
      latitude: 1.300207286590813,
      longitude: 103.85506261293176,
      title: "Refash @ Bugis",
      image: image10,
    },
    {
      id: 11,
      latitude: 1.436994215766167,
      longitude: 103.78560369759586,
      title: "Refash @ Causeway Point",
      image: image11,
    },
    {
      id: 12,
      latitude: 1.2858957519055927,
      longitude: 103.84467980497398,
      title: "Refash @ Chinatown Point",
      image: image12,
    },
    {
      id: 13,
      latitude: 1.3432469230395025,
      longitude: 103.95299468978408,
      title: "Refash @ Eastpoint Mall",
      image: image13,
    },
    {
      id: 14,
      latitude: 1.2923255856095457,
      longitude: 103.84954502088885,
      title: "Refash @ Funan Mall",
      image: image14,
    },
    {
      id: 15,
      latitude: 1.2655893772014686,
      longitude: 103.81904199759025,
      title: "Refash @ Harbourfront Centre",
      image: image15,
    },
    {
      id: 16,
      latitude: 1.3794442447818551,
      longitude: 103.76314717429605,
      title: "Refash @ Hillion Mall",
      image: image16,
    },
    {
      id: 17,
      latitude: 1.430791232190833,
      longitude: 103.83534016691469,
      title: "Refash @ NorthPoint City",
      image: image17,
    },
    {
      id: 18,
      latitude: 1.3017407816279976,
      longitude: 103.84490392031486,
      title: "Refash @ Plaza Singapura",
      image: image18,
    },
    {
      id: 19,
      latitude: 1.3550700451144777,
      longitude: 103.94464888225261,
      title: "Refash @ Tampines1",
      image: image19,
    },
    {
      id: 20,
      latitude: 1.3028385640984796,
      longitude: 103.8395661742936,
      title: "Refash @ Centrepoint",
      image: image20,
    },
    {
      id: 21,
      latitude: 1.2873633786400238,
      longitude: 103.82675951293132,
      title: "Refash @ Tiong Bahru Plaza",
      image: image21,
    },
    {
      id: 22,
      latitude: 1.3353536820212786,
      longitude: 103.74263150497548,
      title: "Refash @ Westgate",
      image: image22,
    },
  ];

  // State to store the current region of the map
  const [region, setRegion] = useState({
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
    setRegion({
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

  const handleCardPress = (marker) => {
    // When a card is pressed, move the map to show the corresponding marker
    mapViewRef.current.animateToRegion(
      {
        latitude: marker.latitude,
        longitude: marker.longitude,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      1000 // Adjust the animation duration as needed
    );
  };

  const renderCardItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <View style={styles.card}>
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode='cover'
        />
        <Text style={styles.cardtitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <MapView
        ref={mapViewRef}
        style={styles.map}
        region={region}
      >
        <Marker coordinate={region} title='My Location' />
        {markers.map(marker => (
          <CustomMarker
            key={marker.id}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            style={styles.marker}
          />
        ))}
      </MapView>
      <Carousel
        ref={carouselRef}
        data={markers}
        renderItem={renderCardItem}
        sliderWidth={width}
        itemWidth={cardWidth} // Add some extra width for card spacing
        containerCustomStyle={styles.carouselContainer}
        onScrollBeginDrag={() => setScrollEnabled(true)}
        onScrollEndDrag={() => setScrollEnabled(false)}
      />
      <ToggleBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    top: height * 0.7
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: 20,
    top: height * 0.7
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
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
    shadowColor: "#000000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: cardHeight * 0.7,
    width: cardWidth * 0.7,
    overflow: 'hidden',
    borderRadius: 20
  },
  cardImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 10

  },
  cardtitle: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'CabinCondensed-Regular',
  },
});

export default MapScreen;

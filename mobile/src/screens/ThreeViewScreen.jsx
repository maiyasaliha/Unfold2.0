import { View, Image, StyleSheet, Button, Text, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, CheckboxButton, PurpleView } from '../components'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserId } from '../tempstore/userPreferenceStore';
import { getApiUrl } from '../tempstore/userPreferenceStore'


API_URL = getApiUrl();


const ThreeViewScreen = () => {
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [listOfShoes, setlistOfShoes] = useState([]);
  const [listOfTops, setlistOfTops] = useState([]);
  const [listOfBottoms, setlistOfBottoms] = useState([]);

  const id = getUserId();

  const fetchTop = async () => {
    try {
      const response = await axios.get(`${API_URL}/getTops?userId=${id}`);
      console.log(response.data);
      setlistOfTops(response.data);
      //setlistOfItems(listOfItems.map(x => x.imageurl));
      // console.log(item);
      console.log('successfully retrieved tops');
    } catch (error) {
      console.error('Error fetching tops:', error);
    }
  };

  const fetchBottom = async () => {
    try {
      const response = await axios.get(`${API_URL}/getBottoms?userId=${id}`);
      console.log(response.data);
      setlistOfBottoms(response.data);
      //setlistOfItems(listOfItems.map(x => x.imageurl));
      // console.log(item);
      console.log('successfully retrieved bottoms');
    } catch (error) {
      console.error('Error fetching bottoms:', error);
    }
  };

  const fetchShoe = async () => {
    try {
      const response = await axios.get(`${API_URL}/getShoes?userId=${id}`);
      console.log(response.data);
      setlistOfShoes(response.data);
      //setlistOfItems(listOfItems.map(x => x.imageurl));
      // console.log(item);
      console.log('successfully retrieved shoes');
    } catch (error) {
      console.error('Error fetching shoes:', error);
    }
  };

  // Call fetchItems when the component mounts
  useEffect(() => {
    fetchTop();
    fetchBottom();
    fetchShoe();
  }, []);


  const renderTopItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.imageurl }} style={styles.imageTop} />
      </View>
    );
  };

  const renderBottomItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.imageurl }} style={styles.imageBottom} />
      </View>
    );
  };

  const renderShoeItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.imageurl }} style={styles.imageShoe} />
      </View>
    );
  };

  const handleTopSelection = (index) => {
    setSelectedTop(listOfTops[index]);
    console.log(selectedTop);
  };

  const handleBottomSelection = (index) => {
    setSelectedBottom(listOfBottoms[index]);
    console.log(selectedBottom);

  };
  const handleShoeSelection = (index) => {
    setSelectedShoe(listOfShoes[index]);
    console.log(selectedShoe);

  };

  const handleConfirmSelection = async () => {
    if (selectedTop && selectedBottom && selectedShoe) {
      try {
        const response = await axios.post(`${API_URL}/addOutfit`, {
          userId: id,
          top: selectedTop.imageurl,
          bottom: selectedBottom.imageurl,
          shoes: selectedShoe.imageurl,
        });

        if (response.status === 200) {
          console.log('Outfit uploaded successfully.');
          alert('Outfit uploaded successfully.');
        } else {
          console.error('Failed to upload Outfit.');
        }
      } catch (error) {
        console.error('Error uploading Outfit:', error);
      }
    } else {
      alert("Please select a top, bottom and shoe before confirming.");
    }
    console.log('Confirm Selection onPress');
  }
  const allArraysEmpty =
    listOfTops.length === 0 &&
    listOfBottoms.length === 0 &&
    listOfShoes.length === 0;

  return (
    <SafeAreaView style={styles.container}>
      {allArraysEmpty ? (
        <View>
          <Text style={styles.emptyMessage}>Insert items into your wardrobe</Text>
          <Text style={styles.emptyMessage}>Dress Up!</Text>
        </View>
      ) : (
        <View>
          <View style={{ height: 300, marginTop: 90, bottom: -40 }}>
            <Carousel
              data={listOfTops}
              renderItem={renderTopItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleTopSelection}
            />
          </View>
          <View style={{ height: 300, top: -100 }}>
            <Carousel
              data={listOfBottoms}
              renderItem={renderBottomItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleBottomSelection}
            />
          </View>
          <View style={{ height: 300, top: -180 }}>
            <Carousel
              data={listOfShoes}
              renderItem={renderShoeItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleShoeSelection}
            />
          </View>
        </View>
      )}
      <ToggleBar />
      <PurpleView is2Press={true} is3Press={false} is4Press={false} />
      <CheckboxButton onPress={handleConfirmSelection} />
      <TopBar text="Dress Up" today={false} closet={false} dressup={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  checkboxcontainer: {

  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBottom: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  imageTop: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  imageShoe: {
    width: 170,
    height: 170,
    borderRadius: 10,
  },
  emptyMessage: {
    top: 130,
    fontSize: 20,
    color: '#937CA7',
    textAlign: 'center',
    fontFamily: 'CabinCondensed-Regular',
  },
});

export default ThreeViewScreen;

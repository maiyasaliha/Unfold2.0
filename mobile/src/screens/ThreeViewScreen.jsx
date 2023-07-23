import { View, Image, StyleSheet, Button, Text, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, CheckboxButton, PurpleView } from '../components'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserId } from '../tempstore/userPreferenceStore';



const ThreeViewScreen = () => {
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const id = getUserId();

  const [listOfTops, setlistOfTops] = useState([]);
  const [listOfBottoms, setlistOfBottoms] = useState([]);
  const [listOfShoes, setlistOfShoes] = useState([]);


  const fetchTops = async () => {
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

  const fetchBottoms = async () => {
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

  const fetchShoes = async () => {
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
    fetchTops();
    fetchBottoms();
    fetchShoes();
  }, []);

  // useEffect(() => {
  //   console.log('listOfTops:', listOfTops);
  //   console.log('listOfBottoms:', listOfBottoms);
  // }, [listOfTops, listOfBottoms]);

  // const topsData = listOfTops.map(x => x.imageurl);

  // const bottomsData = listOfBottoms.map(x => x.imageurl);

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
  };

  const handleBottomSelection = (index) => {
    setSelectedBottom(listOfBottoms[index]);
  };

  const handleShoeSelection = (index) => {
    setSelectedShoe(listOfShoes[index]);
  };

  const handleConfirmSelection = async () => {
    if (selectedTop && selectedShoe && selectedBottom) {
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
      alert("Please select a top, bottom and shoes before confirming.");
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
          <View style={{ height: 220, marginTop: 120, bottom: -20 }}>
            <Carousel
              data={listOfTops}
              renderItem={renderTopItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleTopSelection}
            />
          </View>
          <View style={{ height: 250, top: -40 }}>
            <Carousel
              data={listOfBottoms}
              renderItem={renderBottomItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleBottomSelection}
            />
          </View>
          <View style={{ height: 100, top: -40 }}>
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
      <PurpleView is2Press={false} is3Press={true} is4Press={false} />
      <CheckboxButton onPress={handleConfirmSelection} />
      <TopBar text="Dress Up" today={false} closet={false} dressup={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

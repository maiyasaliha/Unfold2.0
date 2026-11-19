import { View, Image, StyleSheet, Button, Text, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, CheckboxButton, PurpleView } from '../components'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserId } from '../tempstore/userPreferenceStore';
import { getApiUrl } from '../tempstore/userPreferenceStore'


API_URL = getApiUrl();


const FourViewScreen = () => {
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [listOfAccessories, setlistOfAccessories] = useState([]);
  const [listOfShoes, setlistOfShoes] = useState([]);
  const [listOfTops, setlistOfTops] = useState([]);
  const [listOfBottoms, setlistOfBottoms] = useState([]);

  const id = getUserId();

  const fetchTop = async () => {
    try {
      const response = await axios.get(`${API_URL}/getTops?userId=${id}`);
      console.log(response.data);
      setlistOfTops(response.data);
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
      console.log('successfully retrieved shoes');
    } catch (error) {
      console.error('Error fetching shoes:', error);
    }
  };
  const fetchAccessories = async () => {
    try {
      const response = await axios.get(`${API_URL}/getAccessories?userId=${id}`);
      console.log(response.data);
      setlistOfAccessories(response.data);
      console.log('successfully retrieved accessories');
    } catch (error) {
      console.error('Error fetching accessories:', error);
    }
  };

  // Call fetchItems when the component mounts
  useEffect(() => {
    fetchTop();
    fetchBottom();
    fetchShoe();
    fetchAccessories();
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

  const renderAccessoryItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.imageurl }} style={styles.imageAccessory} />
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
  const handleAccessorySelection = (index) => {
    setSelectedAccessory(listOfAccessories[index]);
    console.log(selectedAccessory);

  };

  const handleConfirmSelection = async () => {
    if (selectedTop && selectedBottom && selectedShoe && selectedAccessory) {
      try {
        const response = await axios.post(`${API_URL}/addOutfit`, {
          userId: id,
          top: selectedTop.imageurl,
          bottom: selectedBottom.imageurl,
          shoes: selectedShoe.imageurl,
          accessories: selectedAccessory.imageurl,
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
      alert("Please select a top, bottom, accessory and shoe before confirming.");
    }
    console.log('Confirm Selection onPress');
  }
  const allArraysEmpty =
    listOfTops.length === 0 &&
    listOfBottoms.length === 0 &&
    listOfAccessories.length === 0 &&
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
          <View style={{ height: 150, marginTop: 120, }}>
            <Carousel
              data={listOfAccessories}
              renderItem={renderAccessoryItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleAccessorySelection}
            />
          </View>
          <View style={{ height: 300, top: -50 }}>
            <Carousel
              data={listOfTops}
              renderItem={renderTopItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleTopSelection}
            />
          </View>
          <View style={{ height: 200, top: -220 }}>
            <Carousel
              data={listOfBottoms}
              renderItem={renderBottomItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleBottomSelection}
            />
          </View>
          <View style={{ height: 90, top: -230 }}>
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
    width: 210,
    height: 210,
    borderRadius: 10,
  },
  imageTop: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  imageShoe: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  emptyMessage: {
    top: 130,
    fontSize: 20,
    color: '#937CA7',
    textAlign: 'center',
    fontFamily: 'CabinCondensed-Regular',
  },
  imageAccessory: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default FourViewScreen;

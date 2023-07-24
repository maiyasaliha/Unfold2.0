import { View, Image, StyleSheet, Button, Text, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, CheckboxButton, PurpleView } from '../components'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getUserId } from '../tempstore/userPreferenceStore';


const DressupScreen = () => {
  const [selectedOnepiece, setSelectedOnepiece] = useState(null);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [listOfOnepiece, setlistOfOnePiece] = useState([]);
  const [listOfShoes, setlistOfShoes] = useState([]);

  const id = getUserId();

  const fetchOnePiece = async () => {
    try {
      const response = await axios.get(`${API_URL}/getOnepiece?userId=${id}`);
      console.log(response.data);
      setlistOfOnePiece(response.data);
      //setlistOfItems(listOfItems.map(x => x.imageurl));
      // console.log(item);
      console.log('successfully retrieved onepiece');
    } catch (error) {
      console.error('Error fetching onepiece:', error);
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
    fetchOnePiece();
    fetchShoe();
  }, []);


  const renderOnepieceItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.imageurl }} style={styles.imageTop} />
      </View>
    );
  };

  const renderShoeItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.imageurl }} style={styles.imageBottom} />
      </View>
    );
  };

  const handleOnepieceSelection = (index) => {
    setSelectedOnepiece(listOfOnepiece[index]);
    console.log(selectedOnepiece);
  };

  const handleShoesSelection = (index) => {
    setSelectedShoe(listOfShoes[index]);
    console.log(selectedShoe);

  };

  const handleConfirmSelection = async () => {
    if (selectedOnepiece && selectedShoe) {
      try {
        const response = await axios.post(`${API_URL}/addOutfit`, {
          userId: id,
          onepiece: selectedOnepiece.imageurl,
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
      alert("Please select both a onepiece and shoes before confirming.");
    }
    console.log('Confirm Selection onPress');
  }
  const allArraysEmpty =
    listOfOnepiece.length === 0 &&
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
              data={listOfOnepiece}
              renderItem={renderOnepieceItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleOnepieceSelection}
            />
          </View>
          <View style={{ height: 300, top: 60 }}>
            <Carousel
              data={listOfShoes}
              renderItem={renderShoeItem}
              sliderWidth={400}
              itemWidth={200}
              onSnapToItem={handleShoesSelection}
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
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  imageTop: {
    width: 300,
    height: 300,
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

export default DressupScreen;

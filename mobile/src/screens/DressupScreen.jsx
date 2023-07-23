import { View, Image, StyleSheet, Button, Text, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, CheckboxButton, PurpleView } from '../components'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';


const DressupScreen = () => {
  const [selectedOnepiece, setSelectedOnepiece] = useState(null);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [listOfOnepiece, setlistOfOnePiece] = useState([]);
  const [listOfShoes, setlistOfShoes] = useState([]);

  const fetchOnePiece = async () => {
    try {
      const response = await axios.get(`${API_URL}/getOnepiece`);
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
      const response = await axios.get(`${API_URL}/getShoes`);
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
  };

  const handleShoesSelection = (index) => {
    setSelectedShoe(listOfShoes[index]);
  };

  const handleConfirmSelection = () => {
    // if (selectedTop && selectedBottom) {
    //   // Show a dress-up preview with the selected combination
    //   showDressUpPreview(selectedTop, selectedBottom);
    // } else {
    //   alert("Please select both a top and a bottom before confirming.");
    // }
    console.log('Confirm Selection onPress');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar text="Dress Up" today={false} closet={false} dressup={true} />
      <CheckboxButton onPress={handleConfirmSelection} />
      <View style={{ height: 300, marginTop: 60, bottom: -40, }}>
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
      <ToggleBar />
      <PurpleView is2Press={true} is3Press={false} is4Press={false} />
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
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  imageTop: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
});

export default DressupScreen;

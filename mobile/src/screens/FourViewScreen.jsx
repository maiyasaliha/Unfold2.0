import { View, Image, StyleSheet, Button, Text, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, CheckboxButton, PurpleView } from '../components'
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';


const FourViewScreen = () => {
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);


  const [listOfTops, setlistOfTops] = useState([]);
  const [listOfBottoms, setlistOfBottoms] = useState([]);
  const [listOfShoes, setlistOfShoes] = useState([]);
  const [listOfAccessories, setlistOfAccessories] = useState([]);



  const fetchTops = async () => {
    try {
      const response = await axios.get(`${API_URL}/getTops`);
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
      const response = await axios.get(`${API_URL}/getBottoms`);
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
  const fetchAccessories = async () => {
    try {
      const response = await axios.get(`${API_URL}/getAccessories`);
      console.log(response.data);
      setlistOfAccessories(response.data);
      //setlistOfItems(listOfItems.map(x => x.imageurl));
      // console.log(item);
      console.log('successfully retrieved accessories');
    } catch (error) {
      console.error('Error fetching accessories:', error);
    }
  };

  // Call fetchItems when the component mounts
  useEffect(() => {
    fetchAccessories();
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
  const renderAccessoryItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item.imageurl }} style={styles.imageAccessory} />
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

  const handleAccessorySelection = (index) => {
    setSelectedAccessory(listOfAccessories[index]);
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
      <View style={{ height: 150, marginTop: 65}}>
        <Carousel
          data={listOfAccessories}
          renderItem={renderAccessoryItem}
          sliderWidth={400}
          itemWidth={200}
          onSnapToItem={handleAccessorySelection}
        />
      </View>
      <View style={{ height: 220, bottom: -40, top: -45 }}>
        <Carousel
          data={listOfTops}
          renderItem={renderTopItem}
          sliderWidth={400}
          itemWidth={200}
          onSnapToItem={handleTopSelection}
        />
      </View>
      <View style={{ height: 250, top: -140 }}>
        <Carousel
          data={listOfBottoms}
          renderItem={renderBottomItem}
          sliderWidth={400}
          itemWidth={200}
          onSnapToItem={handleBottomSelection}
        />
      </View>
      <View style={{ height: 100, top: -170}}>
        <Carousel
          data={listOfShoes}
          renderItem={renderShoeItem}
          sliderWidth={400}
          itemWidth={200}
          onSnapToItem={handleShoeSelection}
        />
      </View>
      <ToggleBar />
      <PurpleView is2Press={false} is3Press={false} is4Press={true} />
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
    width: 220,
    height: 220,
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
  imageAccessory: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default FourViewScreen;

import { View, Platform, StyleSheet, ScrollView, Text } from 'react-native';
import React, { useState } from 'react';
import { TopBar, ToggleBar, WardrobeContainer, ItemsButton, OutfitsButton, FavouritesButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { getApiUrl } from '../tempstore/userPreferenceStore';


API_URL = getApiUrl();


const OutfitsFavScreen = () => {
  const [haveItems, setHaveItems] = useState(false);
  const navigation = useNavigation()


  return (
    <SafeAreaView style={styles.container}>
      <TopBar text="Closet" today={false} closet={true} dressup={false} />
      <View style={styles.contentcontainer}>
        <View style={styles.buttoncontainer}>
          <ItemsButton isPressed={false} />
          <OutfitsButton isPressed={true} />
          <View style={styles.heartcontainer}>
            <FavouritesButton isPressed={true} navigation={navigation} screenName={'ClosetOutfitsScreen'} />
          </View>
        </View>
        {!haveItems ? (
          <View style={styles.textContainer}>
            <Text style={styles.text}>No favourite outfits found in your Closet</Text>
            <Text style={styles.text}>Like outfits to view them!</Text>

          </View>
        ) : (
          <ScrollView style={styles.scrollContainer}>
            <WardrobeContainer />
          </ScrollView>
        )}
      </View>

      <ToggleBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {

  },
  text: {
    fontSize: 20,
    color: '#937CA7',
    fontFamily: 'CabinCondensed-Regular',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: 20,

  },
  contentcontainer: {
    flex: 1,
    top: 100,

  },
  buttoncontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 135,
  },
  heartcontainer: {
    left: 65,
  }
});

export default OutfitsFavScreen;

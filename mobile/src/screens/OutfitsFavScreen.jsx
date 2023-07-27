import { View, Platform, StyleSheet, ScrollView, Text, Image } from 'react-native';
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
            <Image style={styles.image} source={require('../assets/images/lock.png')} />
                <Text style={styles.text}>Unlock Favourite Outfits in Unfold 2.0!</Text>

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
  },
  image: {
    height: 130,
    width: 100,
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 150,
    tintColor: '#937CA7'
},
});

export default OutfitsFavScreen;

import { View, Platform, StyleSheet, ScrollView, Text, FlatList, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, WardrobeContainer, ItemsButton, OutfitsButton, FavouritesButton, OutfitsContainer } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { getUserId } from '../tempstore/userPreferenceStore';
import { getApiUrl } from '../tempstore/userPreferenceStore'


API_URL = getApiUrl();


const ClosetOutfitsScreen = () => {

    const numColumns = 2; // Set the number of columns you want to display
    const id = getUserId();
    const itemWidth = Dimensions.get('window').width / numColumns;

    const [haveOutfits, setHaveOutfits] = useState(false);
    const [listOfOutfits, setlistOfOutfits] = useState([]);
    const [item, setItem] = useState();
    const navigation = useNavigation()



    const fetchOutfits = async () => {
        try {
            const response = await axios.get(`${API_URL}/getOutfits?userId=${id}`);
            console.log(response.data);
            setlistOfOutfits(response.data);
            //setlistOfItems(listOfItems.map(x => x.imageurl));
            // console.log(item);
            setHaveOutfits(true);
            console.log('successfully retrieved outfits');
        } catch (error) {
            console.error('Error fetching outfits:', error);
        }
    };

    // Call fetchItems when the component mounts
    useEffect(() => {
        fetchOutfits();
    }, []);




    return (
        <SafeAreaView style={styles.container}>
            <TopBar text="Closet" today={false} closet={true} dressup={false} />
            <View style={styles.contentcontainer}>
                <View style={styles.buttoncontainer}>
                    <ItemsButton isPressed={false} />
                    <OutfitsButton isPressed={true} />
                    <View style={styles.heartcontainer}>
                        <FavouritesButton isPressed={false} navigation={navigation} screenName={'OutfitsFavScreen'} />
                    </View>
                </View>
                {listOfOutfits.length === 0 ? (
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Create outfits to view them!</Text>
                    </View>
                ) : (
                    <FlatList
                        data={listOfOutfits}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={numColumns} // Use the calculated number of columns
                        renderItem={({ item }) => (
                            <View style={{ width: itemWidth, ...styles.scrollContainer }}>
                                <OutfitsContainer key={item.id} onePiece={item.onepiece} shoes={item.shoes} top={item.top} bottom={item.bottom} accessory={item.accessories}/>
                            </View>
                        )}
                    />

                )}
            </View>

            <ToggleBar />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexDirection: 'row',
        paddingTop: 15,
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
        top: 90,

    },
    buttoncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 135,
    },
    togglecontainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    heartcontainer: {
        left: 65,
    }
});

export default ClosetOutfitsScreen;

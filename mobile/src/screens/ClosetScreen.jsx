import { View, Platform, StyleSheet, ScrollView, Text, FlatList, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, WardrobeContainer, ItemsButton, OutfitsButton, FavouritesButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { getUserId } from '../tempstore/userPreferenceStore';
import { getApiUrl } from '../tempstore/userPreferenceStore'


API_URL = getApiUrl();

const ClosetScreen = () => {

    const numColumns = 2; // Set the number of columns you want to display
    const id = getUserId();
    const itemWidth = Dimensions.get('window').width / numColumns;

    const [haveItems, setHaveItems] = useState(false);
    const [listOfItems, setlistOfItems] = useState([]);
    const [item, setItem] = useState();
    const navigation = useNavigation()



    const fetchItems = async () => {
        try {
            const response = await axios.get(`${API_URL}/getItem?userId=${id}`);
            console.log(response.data);
            setlistOfItems(response.data);
            //setlistOfItems(listOfItems.map(x => x.imageurl));
            // console.log(item);
            setHaveItems(true);
            console.log('successfully retrieved items');
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    // Call fetchItems when the component mounts
    useEffect(() => {
        fetchItems();
    }, []);




    return (
        <SafeAreaView style={styles.container}>
            <TopBar text="Closet" today={false} closet={true} dressup={false} />
            <View style={styles.contentcontainer}>
                <View style={styles.buttoncontainer}>
                    <ItemsButton isPressed={true} />
                    <OutfitsButton isPressed={false} />
                    <View style={styles.heartcontainer}>
                        <FavouritesButton isPressed={false} navigation={navigation} screenName={'ItemsFavScreen'} />
                    </View>
                </View>
                {listOfItems.length === 0 ? (
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Insert items into your Closet</Text>
                        <Text style={styles.text}>to view them!</Text>
                    </View>
                ) : (
                    <FlatList
                        data={listOfItems}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={numColumns} // Use the calculated number of columns
                        renderItem={({ item }) => (
                            <View style={{ width: itemWidth, ...styles.scrollContainer }}>
                                <WardrobeContainer key={item.id} image={item.imageurl} />
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

export default ClosetScreen;

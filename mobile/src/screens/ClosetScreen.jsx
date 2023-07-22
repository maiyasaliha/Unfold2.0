import { View, Platform, StyleSheet, ScrollView, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { TopBar, ToggleBar, WardrobeContainer, ItemsButton, OutfitsButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";

API_URL = Platform.OS === 'ios' ? 'http://192.168.0.31:5000' : 'http://192.168.0.31:5000';


const ClosetScreen = () => {
    const [haveItems, setHaveItems] = useState(false);
    const [listOfItems, setlistOfItems] = useState([]);
    const [item, setItem] = useState();

    const fetchItems = async () => {
        try {
            const response = await axios.get(`${API_URL}/getItems`);
            console.log(response.data[0].imageurl);
            setItem(response.data[0].imageurl);
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
                </View>
                {!haveItems ? (
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Insert items into your Closet</Text>
                        <Text style={styles.text}>to view them!</Text>
                    </View>
                ) : (
                    <WardrobeContainer image={item}/>
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
    togglecontainer: {
        flex: 1,
        justifyContent: 'flex-end',
    }
});

export default ClosetScreen;

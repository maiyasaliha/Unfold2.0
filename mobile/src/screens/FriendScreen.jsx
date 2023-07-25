import { View, Platform, StyleSheet, ScrollView, Text, FlatList, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WardrobeContainer, ItemsButton, OutfitsButton, BackArrowButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { getApiUrl } from '../tempstore/userPreferenceStore'


API_URL = getApiUrl();

const FriendScreen = ({ route }) => {

    const numColumns = 2; // Set the number of columns you want to display
    const itemWidth = Dimensions.get('window').width / numColumns;
    const { text, id, image } = route.params;
    const [haveItems, setHaveItems] = useState(false);
    const [listOfItems, setlistOfItems] = useState([]);
    const [item, setItem] = useState();
    const navigation = useNavigation()



    const fetchItems = async () => {
        try {
            const response = await axios.get(`${API_URL}/getItem?userId=${id}`);
            console.log(response.data);
            setlistOfItems(response.data);
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
            <View style={styles.contentcontainer}>
                <BackArrowButton navigation={navigation} screenName='SearchScreen' />
                <Image style={styles.image} source={require('../assets/images/deafultusericonjpg.jpg')} />
                
                <View style={styles.buttoncontainer}>
                    <ItemsButton isPressed={true} screenName='FriendScreen' id={id} text={text} image={image} />
                    <OutfitsButton isPressed={false} screenName='FriendOutfitsScreen' id={id} text={text} image={image}/>
                </View>
                {listOfItems.length === 0 ? (
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{text} has no items to display</Text>
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
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
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
    image: {
        width: 116,
        height: 116,
        borderRadius: 58,
        alignSelf: 'center',
        marginBottom: 20
      },
});

export default FriendScreen;

import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BackArrowButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';


const ItemCardScreen = ({ route }) => {
    const navigation = useNavigation();
    const image = route.params;
    const [itemInfo, setItemInfo] = useState()

    const fetchItem = async () => {
        try {
            // const response = await axios.get(`${API_URL}/getItemwithurl`, {
            //     params: { image },
            // });
            // console.log(response.data);
            // setItemInfo(response.data);
            console.log('successfully retrieved info');
        } catch (error) {
            console.error('Error fetching item info:', error);
        }
    };

    // Call fetchItems when the component mounts
    useEffect(() => {
        fetchItem();
    }, []);

    return (
        <SafeAreaView>
            <BackArrowButton navigation={navigation} screenName={'ClosetScreen'} />
            <Image style={styles.image} source={{ uri: image }} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image: {
        height: 400,
        width: Dimensions.get('window').width,
    },
})

export default ItemCardScreen
import { View, Platform, StyleSheet, ScrollView, Text, FlatList, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WardrobeContainer, ItemsButton, OutfitsButton, BackArrowButton } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { getApiUrl } from '../tempstore/userPreferenceStore'


API_URL = getApiUrl();

const FriendOutfitsScreen = () => {
    const navigation = useNavigation()






    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentcontainer}>
                <View style={styles.backContainer}>
                    <BackArrowButton navigation={navigation} screenName='SearchScreen' />
                </View>
                <Image style={styles.image} source={require('../assets/images/lock.png')} />
                <Text style={styles.text}>Unlock Friend Outfits in Unfold 2.0!</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#FFFFFF'
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
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    image: {
        height: 130,
        width: 100,
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 150,
        tintColor: '#937CA7'
    },
    backContainer: {
        top: -30
    }
});

export default FriendOutfitsScreen;

import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, } from 'react-native';
import React from 'react';
import HeartButton from './HeartButton';
import { useNavigation } from '@react-navigation/native';

const OutfitsContainer = ({ top, bottom, onePiece, shoes, accessory }) => {
    //   const navigation = useNavigation();

    const handlePress = () => {
        // Navigate to the ItemCardScreen and pass the 'image' parameter
        console.log('item pressed');
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={handlePress} style={styles.whitebox}>
                <Image style={styles.bottom} source={{ uri: bottom }} />
                <Image style={styles.top} source={{ uri: top }} />
                <Image style={styles.onePiece} source={{ uri: onePiece }} />
                <Image style={styles.shoes} source={{ uri: shoes }} />
                <Image style={styles.accessory} source={{ uri: accessory }} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    whitebox: {
        height: 184.65,
        width: 152,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 25,
        borderRadius: 16.89,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    heartcontainer: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 10,
        left: 50,
    },
    top: {
        height: 80,
        width: 80,
        top: 40,
        right: 20,
    },
    bottom: {
        height: 100,
        width: 70,
        top: 195,
    },
    onePiece: {
        height: 130,
        width: 60,
        bottom: 30,
        right: 15,
    },
    shoes: {
        height: 60,
        width: 60,
        bottom: 100,
        left: 40
    },
    accessory: {
        height: 50,
        width: 50,
        bottom: 210,
        left: 40,
    },
});

export default OutfitsContainer;

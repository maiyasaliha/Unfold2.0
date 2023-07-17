import React, { useState } from 'react'
import { View, TextInput, Image, StyleSheet } from 'react-native'

const LocationInput = () => {
    const [postalCode, setPostalCode] = useState('')

    const handlePostalCodeChange = (text) => {
        // Remove any non-digit characters from the input
        const formattedPostalCode = text.replace(/\D/g, '')
        setPostalCode(formattedPostalCode)
        console.log('Location Entered')
    };

    return (
        <View style={styles.containerBox}>
            <Image source={require('../assets/images/sgflag.png')} style={styles.image} />
            <TextInput
                style={styles.input}
                placeholder="Enter postal code"
                placeholderTextColor="#937CA7"
                keyboardType="numeric"
                maxLength={6}
                value={postalCode}
                onChangeText={handlePostalCodeChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 100,
        top: 210,
    },
    input: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
    },
    image: {
        width: 40,
        height: 40,
        marginRight: 10,
    },

});

export default LocationInput;

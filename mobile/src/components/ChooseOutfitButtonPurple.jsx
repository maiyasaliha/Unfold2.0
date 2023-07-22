import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const ChooseOutfitButtonPurple = () => {

    const navigation = useNavigation();

    const toggleOverlay = () => {
        //navigation.navigate('ChooseOutfitOverlay')
        console.log('Un choose Outfit onPress')
    };

    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={toggleOverlay} style={styles.purplebutton}>
                <Text style={styles.text}>Choose Outfit</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 19,
        color: "#FFFFFF",
        fontFamily: 'CabinCondensed-Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 3,
        textShadowOffset: { width: 2, height: 2 },
    },
    buttonContainer: {
        marginBottom: 10,
    },
    purplebutton: {
        backgroundColor: "#937CA7",
        paddingHorizontal: 25,
        height: 62,
        width: 160,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },

})

export default ChooseOutfitButtonPurple

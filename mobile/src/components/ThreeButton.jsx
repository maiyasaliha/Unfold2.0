import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ThreeButton = ({ is3Press }) => {
    const navigation = useNavigation();

    const on3Press = () => {
        navigation.navigate('ThreeViewScreen');
        console.log('3 onPress');
    };

    return (
        <View>
            <Pressable onPress={on3Press}>
                <Image
                    style={[styles.image, is3Press ? styles.whiteImage : styles.greyImage]}
                    source={require('../assets/images/3.png')}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 30,
        width: 30,
        marginLeft: 20,
        marginRight: 20,
    },
    whiteImage: {
        tintColor: '#FFFFFF', // White color
    },
    greyImage: {
        tintColor: '#D3D3D3', // Grey color
    },
});

export default ThreeButton;

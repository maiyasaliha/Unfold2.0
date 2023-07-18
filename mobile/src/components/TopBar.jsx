import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';;
import TodayButton from './TodayButton';
import ClosetButton from './ClosetButton';
import DressupButton from './DressupButton';

const TopBar = ({ text }) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.buttonContainer}>
                    <TodayButton navigation={navigation} screenName='HomeScreen' />
                    <ClosetButton navigation={navigation} screenName='ClosetScreen' />
                    <DressupButton navigation={navigation} screenName='DressupScreen' />
                </View>
                <View style={styles.line} />
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    whiteContainer: {
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 25,
        height: 114,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center', // Align items in the center on the x-axis
    },
    buttonContainer: {
        alignItems: 'center', // Align the HomeButton in the center on the x-axis
        flexDirection: 'row',
    },
    container: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: "#000000",
        fontFamily: 'CabinCondensed-Regular',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 1,
        textShadowOffset: { width: 1, height: 1 },
    },
    line: {
        height: 1,
        width: 400,
        backgroundColor: '#3A2D56',
    },
});

export default TopBar;

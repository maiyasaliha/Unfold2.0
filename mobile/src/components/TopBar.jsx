import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TodayButton from './TodayButton';
import ClosetButton from './ClosetButton';
import DressupButton from './DressupButton';

const TopBar = ({ text, today, closet, dressup }) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.whiteContainer}>
                <Text style={styles.text}>{text}</Text>
                <View style={styles.buttonContainer}>
                    <TodayButton isPressed={today}/>
                    <ClosetButton isPressed={closet}/>
                    <DressupButton isPressed={dressup}/>
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
        position: 'absolute'
    },
    buttonContainer: {
        alignItems: 'center', // Align the HomeButton in the center on the x-axis
        flexDirection: 'row',
    },
    container: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1,
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

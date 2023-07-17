import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeButton from './HomeButton';
import { useNavigation } from '@react-navigation/native';
import PinButton from './PinButton';
import UserButton from './UserButton';

const ToggleBar = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.purpleContainer}>
                <View style={styles.buttonContainer}>
                    <HomeButton navigation={navigation} screenName="HomeScreen" />
                    <PinButton navigation={navigation} screenName="MapScreen" />
                    <UserButton navigation={navigation} screenName="UserScreen" />
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    purpleContainer: {
        backgroundColor: '#654F77',
        paddingHorizontal: 25,
        height: 78,
        width: 400,
        justifyContent: 'center',
        alignItems: 'center', // Align items in the center on the x-axis
    },
    buttonContainer: {
        alignItems: 'center', // Align the HomeButton in the center on the x-axis
        flexDirection: 'row',
        bottom: 30,
    },
    container: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 707,
      },
});

export default ToggleBar;

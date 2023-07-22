import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import HeartButton from './HeartButton'

const WardrobeContainer = ({ image }) => {


    return (
        <View style={styles.container}>
            <View style={styles.whitebox}>
                <View style={styles.heartcontainer}>
                    <HeartButton />
                </View>
                <Image style={styles.image} source={{ uri: image }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    whitebox: {
        height: 184.65,
        width: 152,
        backgroundColor: "#FFFFFF",
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
    image: {
        height: 140,
        width: 110,
    }
})
export default WardrobeContainer
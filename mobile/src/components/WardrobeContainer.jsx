import { View, Text } from 'react-native'
import React from 'react'

const WardrobeContainer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.whitebox} />
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
    }
})
export default WardrobeContainer
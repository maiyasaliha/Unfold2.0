import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const HeightInput = () => {
    const [height, setHeight] = useState('');

    const handleHeightChange = (text) => {
        setHeight(text);
        console.log('Height Entered')
    };

    return (
        <View style={styles.containerbox}>
            <TextInput
                style={styles.input}
                placeholder="Height in metres"
                placeholderTextColor="#937CA7"
                value={height}
                onChangeText={handleHeightChange}
                textAlign='center'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containerbox: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 200,
        marginLeft: 10,

    },
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
        marginRight: 10,
    },
});
export default HeightInput
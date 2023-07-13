import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const EmailInput = () => {
    const [email, setEmail] = useState('')

    const handleEmailChange = (text) => {
        setEmail(text);
        console.log('Email Entered')
    };
    return (
        <View style={styles.containerbox}>
            <View style={styles.purpleContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#937CA7"
                    value={email}
                    onChangeText={handleEmailChange}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    containerbox: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 125

    },
    input: {
        width: '100%',
        height: 40,
        fontSize: 20,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
    },
    purpleContainer: {
        backgroundColor: "#E7DBF1",
        paddingHorizontal: 25,
        height: 58,
        width: 251,
        borderRadius: 12,
        justifyContent: 'center',

    },
});

export default EmailInput
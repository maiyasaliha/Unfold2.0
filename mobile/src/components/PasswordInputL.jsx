import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const PasswordInputL = () => {
    const [password, setPassword] = useState('')

    const handlePasswordChange = (text) => {
        setPassword(text);
        console.log('Password Entered')
      };
    return (
        <View style={styles.container}>
            <View style={styles.purpleContainer}>
                <TextInput 
                secureTextEntry={true}
                style={styles.input}
                placeholder="Password"
                placeholderTextColor= "#937CA7"
                value={password}
                onChangeText={handlePasswordChange}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 150,

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

export default PasswordInputL
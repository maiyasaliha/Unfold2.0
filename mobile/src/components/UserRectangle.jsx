import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const UserRectangle = ({ text, image, id }) => {
    const navigation = useNavigation()

    const onPressButton = () => {
        navigation.navigate('FriendScreen', {image: image, text: text, id: id});
        console.log('Account onPress');
    };

    return (
        <View>
            <Pressable onPress={onPressButton} style={styles.userContainer}>
                {image
                    ? <Image style={styles.image} source={{ uri: image }} />
                    : <Image style={styles.image} source={require('../assets/images/deafultusericonjpg.jpg')} />
                }
                <Text style={styles.textName}>{text}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    textName: {
        fontSize: 17,
        marginLeft: 20,
        fontFamily: 'CabinCondensed-Regular',

    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    }
})

export default UserRectangle
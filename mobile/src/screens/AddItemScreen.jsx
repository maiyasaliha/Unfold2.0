import { Image, View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.129:5000' : 'http://192.168.0.129:5000';

//const userId = 20;

const AddItemScreen = () => {

    const [hasGalleryPermission, setGallerPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [imageBase64, setImageBase64] = useState('');

    useEffect(() => {
        (async () => {
            const gallerStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setGallerPermission(gallerStatus.status == 'granted');
        })();
    }, []);

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                quality: 1,
                base64: true,
            });
            console.log(result);

            if (!result.canceled) {
                setImage(result.assets[0].uri);
                setImageBase64(result.base64);
            }
            console.log('Pick Image onPress')
        } catch (err) {
            console.log('Error picking umage:', err);
        }
    };

    if (hasGalleryPermission == false) {
        return <Text>No access to Gallery</Text>
    }

    const uploadImage = async () => {
        try {
          // Make the API request using Axios to send the Base64 image data to the backend
          const response = await axios.post(`${API_URL}/addItem`, {
            userId: 20,
            imageBase64: imageBase64, // Send the Base64 data in the request body
          });
    
          if (response.status === 200) {
            console.log('Item uploaded successfully.');
          } else {
            console.error('Failed to upload item.');
          }
        } catch (error) {
          console.error('Error uploading item:', error);
        }
      };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => pickImage()} style={styles.purplebutton}>
                    <Text style={styles.text}>Pick Image</Text>
                </Pressable>
            </View>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <View style={styles.buttonContainer}>
                <Pressable onPress={uploadImage} style={styles.purplebutton}>
                    <Text style={styles.text}>Upload Image</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    purplebutton: {
        backgroundColor: "#937CA7",
        paddingHorizontal: 25,
        height: 52.2,
        width: 180,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: "#FFFFFF",
        fontFamily: 'CabinCondensed-Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 3,
        textShadowOffset: { width: 2, height: 2 },
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },
})

export default AddItemScreen
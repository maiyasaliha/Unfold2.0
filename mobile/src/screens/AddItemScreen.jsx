import { Image, View, Text, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { BackArrowButton } from '../components';
import { useNavigation } from '@react-navigation/native';


const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.31:5000' : 'http://192.168.0.31:5000';


//const userId = 20;

const AddItemScreen = () => {

    const [hasGalleryPermission, setGallerPermission] = useState(null);
    const [image, setImage] = useState('');
    const [imageBase64, setImageBase64] = useState('');
    const [colour, setColour] = useState('');
    const [type, setType] = useState('');
    const [comments, setComments] = useState('');
    const [length, setLength] = useState('');
    const [material, setMaterial] = useState('');
    const [style, setStyle] = useState('');
    const [neckline, setNeckline] = useState('');
    const [sleeveLength, setSleeveLength] = useState('');
    const [straptype, setStraptype] = useState('');
    const [toe, setToe] = useState('');
    const [heelheight, setHeelheight] = useState('');
    const [season, setSeason] = useState('');
    const [others, setOthers] = useState('');

    const handleColourChange = (text) => {
        setColour(text);
        console.log('Colour Entered')
    };
    const handleTypeChange = (text) => {
        setType(text);
        console.log('Type Entered')
    };
    const handleCommentsChange = (text) => {
        setComments(text);
        console.log('Comments Entered')
    };
    const handleLengthChange = (text) => {
        setLength(text);
        console.log('Length Entered')
    };
    const handleMaterialChange = (text) => {
        setMaterial(text);
        console.log('Material Entered')
    };
    const handleStyleChange = (text) => {
        setStyle(text);
        console.log('Style Entered')
    };
    const handleNecklineChange = (text) => {
        setNeckline(text);
        console.log('Neckline Entered')
    };
    const handleSleeveLengthChange = (text) => {
        setSleeveLength(text);
        console.log('SleeveLength Entered')
    };
    const handleStraptypeChange = (text) => {
        setStraptype(text);
        console.log('Straptype Entered')
    };
    const handleToeChange = (text) => {
        setToe(text);
        console.log('Toe Entered')
    };
    const handleHeelheightChange = (text) => {
        setHeelheight(text);
        console.log('Heelheight Entered')
    };
    const handleSeasonChange = (text) => {
        setSeason(text);
        console.log('Season Entered')
    };
    const handleOthersChange = (text) => {
        setOthers(text);
        console.log('Others Entered')
    };


    const navigation = useNavigation();


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
            });
            console.log(result);

            if (!result.canceled) {
                let newfile = { 
                    uri: result.uri, 
                    type: 'test/${result.uri.split(".")[1]}', 
                    name: 'test.${result.uri.split(".")[1]}'
                }
                handleUpload(newfile)
            }
            console.log('Pick Image onPress')
        } catch (err) {
            console.log('Error picking umage:', err);
        }
    };

    const handleUpload = (image) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', '***REMOVED***')
        data.append("could_name", "***REMOVED***")

        fetch("https://api.cloudinary.com/v1_1/***REMOVED***/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(d => {
                setImage(d.url)
                console.log('successfully uploaded to cloud')

            })
    }

    const uploadImage = async () => {
        try {
            //   Make the API request using Axios to send the Base64 image data to the backend
            const response = await axios.post(`${API_URL}/addItemwithdesc`, {
                userId: 10,
                image: image, // Send the Base64 data in the request body
                colour: colour,
                type: type,
                toe: toe,
                length: length,
                material: material,
                straptype: straptype,
                style: style,
                season: season,
                neckline: neckline,
                comments: comments,
                others: others,
                sleeveLength: sleeveLength,
                heelheight: heelheight,

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
            <BackArrowButton navigation={navigation} screenName={'HomeScreen'} />
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => pickImage()} style={styles.purplebutton}>
                    <Text style={styles.text}>Pick Image</Text>
                </Pressable>
            </View>
            {image && <View>
                <Image source={{ uri: image }} style={styles.image} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item colour"
                    placeholderTextColor="#937CA7"
                    value={colour}
                    onChangeText={handleColourChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item type"
                    placeholderTextColor="#937CA7"
                    value={type}
                    onChangeText={handleTypeChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item length if applicable"
                    placeholderTextColor="#937CA7"
                    value={length}
                    onChangeText={handleLengthChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item material"
                    placeholderTextColor="#937CA7"
                    value={material}
                    onChangeText={handleMaterialChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item style"
                    placeholderTextColor="#937CA7"
                    value={style}
                    onChangeText={handleStyleChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item neckline if applicable"
                    placeholderTextColor="#937CA7"
                    value={neckline}
                    onChangeText={handleNecklineChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item sleeve length if applicable"
                    placeholderTextColor="#937CA7"
                    value={sleeveLength}
                    onChangeText={handleSleeveLengthChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item strap type if applicable"
                    placeholderTextColor="#937CA7"
                    value={straptype}
                    onChangeText={handleStraptypeChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item toe if applicable"
                    placeholderTextColor="#937CA7"
                    value={toe}
                    onChangeText={handleToeChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter item heel height if applicable"
                    placeholderTextColor="#937CA7"
                    value={heelheight}
                    onChangeText={handleHeelheightChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter season if applicable"
                    placeholderTextColor="#937CA7"
                    value={season}
                    onChangeText={handleSeasonChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter any comments if applicable"
                    placeholderTextColor="#937CA7"
                    value={comments}
                    onChangeText={handleCommentsChange}
                    textAlign='center'
                />
                <TextInput
                    style={styles.input}
                    placeholder="others"
                    placeholderTextColor="#937CA7"
                    value={others}
                    onChangeText={handleOthersChange}
                    textAlign='center'
                />
            </View>}
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
        paddingHorizontal: 40,
        top: -20,
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
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
        marginRight: 10,
    },
    scrollContainer: {
        flex: 1,
    }
})

export default AddItemScreen
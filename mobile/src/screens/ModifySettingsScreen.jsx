import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ToggleBar } from '../components';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import { getUserId, getApiUrl } from '../tempstore/userPreferenceStore';


API_URL = getApiUrl();

const ModifySettingsScreen = () => {
    const [user, setUser] = useState();
    const [birthday, setBirthday] = useState();
    const [bodyshape, setBodyshape] = useState();
    const [colourCombos, setColourCombos] = useState();
    const [faceshape, setFaceshape] = useState();
    const [gender, setGender] = useState();
    const [height, setHeight] = useState();
    const [location, setLocation] = useState();
    const [skintone, setSkintone] = useState();
    const [style, setStyle] = useState();

    const [profilePicture, setProfilePicture] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(false);



    const id = getUserId();

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${API_URL}/getName?userId=${id}`);
            console.log(response.data);
            setUser(response.data.name);
            console.log('successfully retrieved user');
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    const fetchPreference = async () => {
        try {
            const response = await axios.get(`${API_URL}/getPreference?userId=${id}`);
            console.log(response.data);
            setBirthday(response.data.birthday);
            setBodyshape(response.data.bodyshape);
            setColourCombos(response.data.colourCombos);
            setFaceshape(response.data.faceshape);
            setGender(response.data.gender);
            setHeight(response.data.height);
            setLocation(response.data.location);
            setSkintone(response.data.skintone);
            setStyle(response.data.styles);
            console.log('successfully retrieved user preference');
        } catch (error) {
            console.error('Error fetching user preference:', error);
        }
    };

    const fetchPicture = async () => {
        try {
            const response = await axios.get(`${API_URL}/getPicture?userId=${id}`);
            console.log(response.data);
            setProfilePicture(response.data.profilepicture);
            console.log('successfully retrieved picture');
        } catch (error) {
            console.error('Error fetching picture:', error);
        }
    };

    const formatDate = (birthday) => {
        const date = new Date(birthday);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 to month since it's zero-based
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleBirthdayChange = (text) => {
        setBirthday(text);
        console.log('Birthday Updated')
    };

    const handleBodyshapeChange = (text) => {
        setBodyshape(text);
        console.log('Bodyshape Updated')
    };

    const handleColourChange = (text) => {
        setColourCombos(text);
        console.log('ColourCombos Updated')
    };

    const handleFaceshapeChange = (text) => {
        setFaceshape(text);
        console.log('Faceshape Updated')
    };
    const handleGenderChange = (text) => {
        setGender(text);
        console.log('Gender Updated')
    };
    const handleHeightChange = (text) => {
        setHeight(text);
        console.log('Height Updated')
    };
    const handleLocationChange = (text) => {
        setLocation(text);
        console.log('Location Updated')
    };
    const handleSkintoneChange = (text) => {
        setSkintone(text);
        console.log('Skintone Updated')
    };
    const handleStyleChange = (text) => {
        setStyle(text);
        console.log('Style Updated')
    };

    // Call fetchItems when the component mounts
    useEffect(() => {
        fetchUser();
        fetchPreference();
        fetchPicture();
    }, []);


    useEffect(() => {
        (async () => {
            const gallerStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
            setGalleryPermission(gallerStatus.status == 'granted');
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
                    type: `test/${result.uri.split('.')[1]}`,
                    name: `test.${result.uri.split('.')[1]}`,
                };
                handleUpload(newfile);
            }
        } catch (err) {
            console.log('Error picking image:', err);
        }
    };

    const handleUpload = (image) => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', '***REMOVED***');
        data.append('cloud_name', '***REMOVED***');

        fetch('https://api.cloudinary.com/v1_1/***REMOVED***/image/upload', {
            method: 'post',
            body: data,
        })
            .then((res) => res.json())
            .then((d) => {
                setProfilePicture(d.url);
                console.log('successfully uploaded to Cloudinary');
                saveProfilePictureToDatabase(d.url);
            });
    };

    const saveProfilePictureToDatabase = async (url) => {
        try {
            const response = await axios.post(`${API_URL}/SetDp`, {
                userId: id,
                profilepicture: url,
            });

            if (response.status === 200) {
                console.log('Profile Picture saved successfully to the database.');
            } else {
                console.error('Failed to save profile picture to the database.');
            }
        } catch (error) {
            console.error('Error saving profile picture to the database:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {profilePicture ? (
                <TouchableOpacity style={styles.profilePictureContainer}>
                    <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={pickImage} style={styles.addProfilePictureButton}>
                    <Text style={styles.profilePictureText}>Add profile picture</Text>
                </TouchableOpacity>
            )}
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Name</Text>
                <Text style={styles.input}>{user}</Text>
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Birthday</Text>
                <TextInput
                    style={styles.input}
                    placeholder={formatDate(birthday) || "enter birthday YYYY-MM-DD"}
                    value={formatDate(birthday)}
                    onChangeText={handleBirthdayChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Body Shape</Text>
                <TextInput
                    style={styles.input}
                    placeholder={bodyshape || "enter body shape"}
                    value={bodyshape}
                    onChangeText={handleBodyshapeChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Colour</Text>
                <TextInput
                    style={styles.input}
                    placeholder={colourCombos || "enter colour"}
                    value={colourCombos}
                    onChangeText={handleColourChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Face Shape</Text>
                <TextInput
                    style={styles.input}
                    placeholder={faceshape || "enter face shape"}
                    value={faceshape}
                    onChangeText={handleFaceshapeChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Gender</Text>
                <TextInput
                    style={styles.input}
                    placeholder={gender || "enter gender"}
                    value={gender}
                    onChangeText={handleGenderChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Height</Text>
                <TextInput
                    style={styles.input}
                    placeholder={height || "enter height"}
                    value={height}
                    onChangeText={handleHeightChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Location</Text>
                <TextInput
                    style={styles.input}
                    placeholder={location || "enter location"}
                    value={location}
                    onChangeText={handleLocationChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Skin Undertone</Text>
                <TextInput
                    style={styles.input}
                    placeholder={skintone || "enter skin undertone"}
                    value={skintone}
                    onChangeText={handleSkintoneChange}
                    textAlign='center'
                />
            </View>
            <View style={styles.fieldcontainer}>
                <Text style={styles.title}>Style</Text>
                <TextInput
                    style={styles.input}
                    placeholder={style || "enter style"}
                    value={style}
                    onChangeText={handleStyleChange}
                    textAlign='center'
                />
            </View>
            <ToggleBar />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    fieldcontainer: {
        flexDirection: 'row',
        paddingHorizontal: 50,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 20
    },
    title: {
        fontSize: 20,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
        marginRight: 8,
    },
    input: {
        fontSize: 20,
        color: "#654F77",
        fontFamily: 'CabinCondensed-Regular',
    },
    profilePictureContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 50,
        left: 130,
    },
    profilePicture: {
        width: 116,
        height: 116,
        borderRadius: 58,
    },
    profilePictureText: {
        fontSize: 18,
        color: '#654F77',
        textAlign: 'center',
        fontFamily: 'CabinCondensed-Regular',
    },
    addProfilePictureButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 50,
        backgroundColor: '#D8BFD8',
        left: 130,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 60
    },

})

export default ModifySettingsScreen;

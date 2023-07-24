import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Platform, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackArrowButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import { setUserId } from '../tempstore/userPreferenceStore';

const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.31:5000' : 'http://192.168.0.31:5000';

const AuthScreen = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const navigation = useNavigation();

    const onChangeHandler = () => {
        setIsLogin(!isLogin);
        setMessage('');
    };

    const onLoggedIn = token => {
        fetch(`${API_URL}/private`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
            .then(async res => {
                try {
                    const jsonRes = await res.json();
                    if (res.status === 200) { //if successful
                        setMessage(jsonRes.message);
                        console.log(jsonRes);
                    }
                } catch (err) {
                    console.log(err);
                };
            })
            .catch(err => {
                console.log(err);
            });

    }

    const fetchUserIdByEmail = email => {
        return fetch(`${API_URL}/getId?email=${email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(async response => {
                // Check if the response status is OK (200)
                try {
                    const jsonRes = await response.json();
                    if (response.status === 200) {
                        console.log(jsonRes.userId);
                        setUserId(jsonRes.userId);
                    }
                } catch (err) {
                    console.log(err);
                };
            })
            // .then((data) => {
            //     // Extract the userId from the response data
            //     const userId = data.userId;
            //     setUserId(userId);
            // })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.log('Error fetching user ID:', error.message);
            });
    };

    const onSubmitHandler = () => {
        const payload = {
            email,
            name,
            password,
        };
        fetch(`${API_URL}/${isLogin ? 'login' : 'signup'}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(async res => {
                try {
                    const jsonRes = await res.json();
                    if (res.status !== 200) { //if unsuccessful
                        setIsError(true);
                        setMessage(jsonRes.message);
                        console.log(jsonRes);
                    } else { //if successful
                        onLoggedIn(jsonRes.token);
                        setIsError(false);
                        setMessage(jsonRes.message);
                        console.log(jsonRes);
                        fetchUserIdByEmail(email);
                        if (!isLogin) { //if not login, signup
                            navigation.navigate('OnboardingBirthday');
                            console.log('Unfold onPress');
                        } if (isLogin) {
                            navigation.navigate('HomeScreen');
                            console.log('Unfold onPress');
                        }

                    }
                } catch (err) {
                    console.log(err);
                };
            })
            .catch(err => {
                console.log(err);
            });

    };

    const getMessage = () => {
        const status = isError ? `Error: ` : `Success: `;
        return status + message;
    }

    return (
        <SafeAreaView style={styles.container}>
            <BackArrowButton navigation={navigation} screenName="LogoScreen" />
            <Text style={styles.heading}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
            <View style={styles.form}>
                <View style={styles.inputs}>
                    <View style={styles.purpleContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                            placeholderTextColor="#937CA7"
                            onChangeText={setEmail}
                        ></TextInput>
                    </View>
                    {!isLogin && <View style={styles.purpleContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#937CA7"
                            onChangeText={setName}
                        ></TextInput>
                    </View>}
                    <View style={styles.purpleContainer}>
                        <TextInput
                            secureTextEntry={true}
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#937CA7"
                            onChangeText={setPassword}
                        ></TextInput>
                    </View>
                    <Text style={[styles.message, { color: isError ? 'red' : 'green' }]}>{message ? getMessage() : null}</Text>
                    <Pressable style={styles.button} onPress={onSubmitHandler}>
                        <Text style={styles.buttonText}>Unfold</Text>
                    </Pressable>
                    <Pressable onPress={onChangeHandler}>
                        <Text style={styles.buttonAltText}>{isLogin ? 'New Here?' : ''}</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    heading: {
        fontSize: 36,
        color: "#000000",
        fontFamily: 'CantoraOne-Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 3,
        textShadowOffset: { width: 2, height: 2 },
        textAlign: 'center',
        marginTop: 40,
        marginRight: 10,
        marginBottom: -30,
    },
    form: {
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: '5%',
    },
    inputs: {
        alignItems: 'center',
        top: 70,
        marginBottom: -75,
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
        marginBottom: 25,
    },
    button: {
        backgroundColor: "#937CA7",
        paddingHorizontal: 25,
        height: 58,
        width: 248,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: 'CantoraOne-Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 3,
        textShadowOffset: { width: 2, height: 2 },
    },
    buttonAltText: {
        fontSize: 20,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
        textDecorationLine: 'underline',
    },
    message: {
        fontSize: 16,
        marginVertical: '5%',
    },
    purplebutton: {
        backgroundColor: "#937CA7",
        paddingHorizontal: 25,
        height: 58,
        width: 248,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textwhite: {
        fontSize: 24,
        color: "#FFFFFF",
        fontFamily: 'CantoraOne-Regular',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowRadius: 3,
        textShadowOffset: { width: 2, height: 2 },
    },
    buttonContainer: {
        marginTop: 280,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
});


export default AuthScreen;
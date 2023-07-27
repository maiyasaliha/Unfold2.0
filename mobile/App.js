import React, { useEffect, view } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
	OnboardingBirthday,
	OnboardingLocation,
	SignUpScreen,
	LogoScreen,
	OnboardingHeight,
	OnboardingSkintone,
	OnboardingGender,
	HomeScreen,
	ForgotPassword,
	LoginScreen,
	OnboardingFaceshape,
	OnboardingStyles,
	OnboardingBodyshape,
	OnboardingColourcombos,
	SearchScreen,
	MapScreen,
	UserScreen,
	AuthScreen,
	ClosetScreen,
	DressupScreen,
	AddItemScreen,
	ClosetOutfitsScreen,
	ItemsFavScreen,
	OutfitsFavScreen,
	ItemCardScreen,
	ThreeViewScreen,
	FourViewScreen,
	FriendScreen
} from './src/screens';
import { TailwindProvider } from 'tailwindcss-react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import FriendOutfitsScreen from './src/screens/FriendOutfitsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		'CantoraOne-Regular': require('./src/assets/fonts/CantoraOne-Regular.ttf'),
		'CabinCondensed-Regular': require('./src/assets/fonts/CabinCondensed-Regular.ttf'),
	});

	if (!fontsLoaded) {
		return null; // or a loading screen/component
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="LogoScreen" component={LogoScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="HomeScreen" component={HomeScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="SearchScreen" component={SearchScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="FriendScreen" component={FriendScreen}
					options={{
						headerShown: false,
					}}
				/>

				<Stack.Screen name="AddItemScreen" component={AddItemScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="AuthScreen" component={AuthScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="SignUpScreen" component={SignUpScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="LoginScreen" component={LoginScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="ForgotPassword" component={ForgotPassword}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingBirthday" component={OnboardingBirthday}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingLocation" component={OnboardingLocation}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingHeight" component={OnboardingHeight}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingGender" component={OnboardingGender}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingSkintone" component={OnboardingSkintone}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingFaceshape" component={OnboardingFaceshape}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingBodyshape" component={OnboardingBodyshape}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingStyles" component={OnboardingStyles}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OnboardingColourcombos" component={OnboardingColourcombos}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="ClosetScreen" component={ClosetScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="ClosetOutfitsScreen" component={ClosetOutfitsScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="DressupScreen" component={DressupScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="FourViewScreen" component={FourViewScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="ThreeViewScreen" component={ThreeViewScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="MapScreen" component={MapScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="UserScreen" component={UserScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="ItemsFavScreen" component={ItemsFavScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="OutfitsFavScreen" component={OutfitsFavScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="ItemCardScreen" component={ItemCardScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen name="FriendOutfitsScreen" component={FriendOutfitsScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}



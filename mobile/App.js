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
	AuthScreen} from './src/screens';
import { TailwindProvider } from 'tailwindcss-react-native';
import * as Font from 'expo-font';


const Stack = createNativeStackNavigator();

export default function App() {
	useEffect(() => {
		async function loadFont() {
			await Font.loadAsync({
				'CantoraOne-Regular': require('./src/assets/fonts/CantoraOne-Regular.ttf'),
			});
		}

		loadFont();
	}, []);
	useEffect(() => {
		async function loadFont() {
			await Font.loadAsync({
				'CabinCondensed-Regular': require('./src/assets/fonts/CabinCondensed-Regular.ttf'),
			});
		}

		loadFont();
	}, []);

	return (
		<TailwindProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="LogoScreen" component={LogoScreen}
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
					<Stack.Screen name="HomeScreen" component={HomeScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name="MapScreen" component={MapScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name="SearchScreen" component={SearchScreen}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen name="UserScreen" component={UserScreen}
						options={{
							headerShown: false,
						}}
					/>

				</Stack.Navigator>
			</NavigationContainer>
		</TailwindProvider>
	);
}



import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { ContinueButton, PressableOption, PressableOptionwithImage, PreviousButton } from '../components';
import { useNavigation } from '@react-navigation/native';
// import { faCircle} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const OnboardingFaceshape = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Choose your Face</Text>
      <Text style={styles.text}>shape</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PressableOption text="Oval                                     " />
        <PressableOption text="Round                                     " />
        <PressableOption text="Square                                     " />
        <PressableOption text="Rectangle                                     " />
        <PressableOption text="Triangle                                     " />
        <PressableOption text="Diamond                                    " />
        <PressableOption text="Oblong                                     " />
        <PressableOption text="Heart                                     " />
      </ScrollView>
      <ContinueButton navigation={navigation} screenName="OnboardingBodyshape" />
      <PreviousButton navigation={navigation} screenName="OnboardingSkintone" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 36,
    color: '#000000',
    fontFamily: 'CantoraOne-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 3,
    textShadowOffset: { width: 2, height: 2 },
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 40,
  },
  scrollContainer: {
    justifyContent: 'space-between', // Move the justifyContent style here
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default OnboardingFaceshape;

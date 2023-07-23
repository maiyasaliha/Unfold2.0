import { Text, SafeAreaView, StyleSheet, ScrollView, View, Platform, Pressable } from 'react-native';
import React, { useState } from 'react';
import { PreviousButton, ContinueButtonS } from '../components';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { getUserId } from '../tempstore/userPreferenceStore';


const API_URL = Platform.OS === 'ios' ? 'http://192.168.0.31:5000' : 'http://192.168.0.31:5000';



const OnboardingStyles = () => {
  const navigation = useNavigation();

  const [styles, setstyle] = useState('');
  const [athleisureSelected, setAthleisureselected] = useState(false);
  const [bohemianSelected, setBohemianselected] = useState(false);
  const [businessSelected, setBusinessselected] = useState(false);
  const [chicSelected, setChicselected] = useState(false);
  const [classicSelected, setClassicselected] = useState(false);
  const [coquetteSelected, setCoquetteselected] = useState(false);
  const [ethnicSelected, setEthnicselected] = useState(false);
  const [gothSelected, setGothselected] = useState(false);
  const [grungeSelected, setGrungeselected] = useState(false);
  const [kawaiiSelected, setKawaiiselected] = useState(false);
  const [minimalistSelected, setMinimalistselected] = useState(false);
  const [parisianSelected, setParisianselected] = useState(false);
  const [preppySelected, setPreppyselected] = useState(false);
  const [punkSelected, setPunkselected] = useState(false);
  const [retroSelected, setRetroselected] = useState(false);
  const [streetwearSelected, setStreetwearselected] = useState(false);
  const [trendySelected, setTrendyselected] = useState(false);
  const [vintageSelected, setVintageselected] = useState(false);
  const [y2kSelected, setY2kselected] = useState(false);

  const athleisurePress = () => {
    setAthleisureselected(!athleisureSelected);
    setstyle('Athleisure');
    console.log('Athleisure Option Pressed')
  };
  const bohemianPress = () => {
    setBohemianselected(!bohemianSelected);
    setstyle('Bohemian');
    console.log('Bohemian Option Pressed')
  };
  const businessPress = () => {
    setBusinessselected(!businessSelected);
    setstyle('Business');
    console.log('Business Option Pressed')
  };
  const chicPress = () => {
    setChicselected(!chicSelected);
    setstyle('Chic');
    console.log('Chic Option Pressed')
  };
  const classicPress = () => {
    setClassicselected(!classicSelected);
    setstyle('Classic');
    console.log('Classic Option Pressed')
  };
  const coquettePress = () => {
    setCoquetteselected(!coquetteSelected);
    setstyle('Coquette');
    console.log('Coquette Option Pressed')
  };
  const ethnicPress = () => {
    setEthnicselected(!ethnicSelected);
    setstyle('Ethnic');
    console.log('Ethnic Option Pressed')
  };
  const gothPress = () => {
    setGothselected(!gothSelected);
    setstyle('Goth');
    console.log('Goth Option Pressed')
  };
  const grungePress = () => {
    setGrungeselected(!grungeSelected);
    setstyle('Grunge');
    console.log('Grunge Option Pressed')
  };
  const kawaiiPress = () => {
    setKawaiiselected(!kawaiiSelected);
    setstyle('Kawaii');
    console.log('Kawaii Option Pressed')
  };
  const minimalistPress = () => {
    setMinimalistselected(!minimalistSelected);
    setstyle('Minimalist');
    console.log('Minimalist Option Pressed')
  };
  const parisianPress = () => {
    setParisianselected(!parisianSelected);
    setstyle('Parisian');
    console.log('Parisian Option Pressed')
  };
  const preppyPress = () => {
    setPreppyselected(!preppySelected);
    setstyle('Preppy');
    console.log('Preppy Option Pressed')
  };
  const punkPress = () => {
    setPunkselected(!punkSelected);
    setstyle('Punk');
    console.log('Punk Option Pressed')
  };
  const retroPress = () => {
    setRetroselected(!retroSelected);
    setstyle('Retro');
    console.log('Retro Option Pressed')
  };
  const streetwearPress = () => {
    setStreetwearselected(!streetwearSelected);
    setstyle('Streetwear');
    console.log('Streetwear Option Pressed')
  };
  const trendyPress = () => {
    setTrendyselected(!trendySelected);
    setstyle('Trendy');
    console.log('Trendy Option Pressed')
  };
  const vintagePress = () => {
    setVintageselected(!vintageSelected);
    setstyle('Vintage');
    console.log('Vintage Option Pressed')
  };
  const y2kPress = () => {
    setY2kselected(!y2kSelected);
    setstyle('Y2K');
    console.log('Y2K Option Pressed')
  };
  
  

  const handlePress = () => {
    axios.post(`${API_URL}/styles`, {
      userId: getUserId(),
      styles: styles,
    }).then((response) => {
      console.log('Styles Added:', styles)
      navigation.navigate('HomeScreen')
      console.log('Continue onPress')
    }).catch((err) =>
      console.log('Error inserting Styles:', err)
    )
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>Choose your preferred</Text>
      <Text style={style.text}>styles</Text>
      <ScrollView contentContainerStyle={style.scrollContainer}>
      <Pressable onPress={athleisurePress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Athleisure                          </Text>
            <View style={style.radioButton}>
              {athleisureSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={bohemianPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Bohemian                          </Text>
            <View style={style.radioButton}>
              {bohemianSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={businessPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Business Casual                 </Text>
            <View style={style.radioButton}>
              {businessSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={chicPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Chic                                </Text>
            <View style={style.radioButton}>
              {chicSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={classicPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Classic                          </Text>
            <View style={style.radioButton}>
              {classicSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={coquettePress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Coquette                           </Text>
            <View style={style.radioButton}>
              {coquetteSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={ethnicPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Ethnic                             </Text>
            <View style={style.radioButton}>
              {ethnicSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={gothPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Goth                                 </Text>
            <View style={style.radioButton}>
              {gothSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={grungePress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Grunge                         </Text>
            <View style={style.radioButton}>
              {grungeSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={kawaiiPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Kawaii                          </Text>
            <View style={style.radioButton}>
              {kawaiiSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={minimalistPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Minimalist                   </Text>
            <View style={style.radioButton}>
              {minimalistSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={parisianPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Parisian                          </Text>
            <View style={style.radioButton}>
              {parisianSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={preppyPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Preppy                          </Text>
            <View style={style.radioButton}>
              {preppySelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={punkPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Punk                                    </Text>
            <View style={style.radioButton}>
              {punkSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={retroPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Retro                               </Text>
            <View style={style.radioButton}>
              {retroSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={streetwearPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Streetwear                         </Text>
            <View style={style.radioButton}>
              {streetwearSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={trendyPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Trendy                          </Text>
            <View style={style.radioButton}>
              {trendySelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={vintagePress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Vintage                       </Text>
            <View style={style.radioButton}>
              {vintageSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
        <Pressable onPress={y2kPress} style={style.button}>
          <View style={style.purpleContainer}>
            <Text value={styles} style={style.buttonText}>Y2K                                 </Text>
            <View style={style.radioButton}>
              {y2kSelected && <View style={style.radioInnerCircle} />}
            </View>
          </View>
        </Pressable>
      </ScrollView>
      <ContinueButtonS onPress={handlePress} />
      <PreviousButton navigation={navigation} screenName="OnboardingColourcombos" />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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
  button: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#937CA7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,

  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#937CA7',
  },
  buttonText: {
    fontSize: 20,
    color: '#937CA7',
    fontFamily: 'CabinCondensed-Regular',
    marginLeft: 35,
    marginRight: 60,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 0.5,
    textShadowOffset: { width: 0.5, height: 0.5 },
  },
  purpleContainer: {
    backgroundColor: "#E7DBF1",
    paddingHorizontal: 25,
    height: 58,
    width: 295,
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4, // Required for Android shadow
    marginBottom: 20,

  },
});

export default OnboardingStyles;

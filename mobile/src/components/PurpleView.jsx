import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';
import TwoButton from './TwoButton';
import ThreeButton from './ThreeButton';
import FourButton from './FourButton';

const PurpleView = ({ is2Press, is3Press, is4Press }) => {

  return (
    <View style={styles.purplebox}>
        <TwoButton is2Press={is2Press} />
        <ThreeButton is3Press={is3Press} />
        <FourButton is4Press={is4Press} />
    </View>
  );
};

const styles = StyleSheet.create({
  purplebox: {
    backgroundColor: '#937CA7',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    width: 214,
    height: 50,
    bottom: 35,
    alignItems: 'center',
  },

});

export default PurpleView;

import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${progress}%` }]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 5,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
  },
  progress: {
    height: '100%',
    backgroundColor: '#937CA7',
    borderRadius: 30,
  },
});

export default ProgressBar;

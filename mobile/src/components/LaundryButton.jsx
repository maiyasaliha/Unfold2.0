import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LaundryButton = () => {
  const [isYes, setIsYes] = useState(true);

  const handleToggle = () => {
    setIsYes(!isYes);
  };

  return (
    <TouchableOpacity
      style={[styles.toggleButton, { backgroundColor: !isYes ? '#937CA7' : '#D3D3D3' }]}
      onPress={handleToggle}
    >
      <Text style={[styles.toggleButtonText, { color: !isYes ? '#FFFFFF' : '#937CA7' }]}>
        {!isYes ? 'Yes' : 'No'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  toggleButton: {
    paddingVertical: 5,
    paddingHorizontal: 17,
    borderRadius: 30,
    height: 32,
    width: 57,
    alignSelf: 'center',
    marginTop: 16,
    marginLeft: 170
  },
  toggleButtonText: {
    fontSize: 17,
    fontFamily: 'CabinCondensed-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowRadius: 1,
    textShadowOffset: { width: 1, height: 1 },
  },
});

export default LaundryButton;

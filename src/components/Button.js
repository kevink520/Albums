import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default Button = ({text, onPress}) => (
  <TouchableOpacity 
    style={styles.buttonStyles}
    onPress={onPress}
  >
    <Text style={styles.textStyles}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonStyles: {
    borderColor: '#007aff',
    borderWidth: 1,
  },

  textStyles: {
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    color: '#007aff',
  },
});


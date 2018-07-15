import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default Header = ({ headerText }) => (
  <View style={styles.viewStyles}>
    <Text style={styles.textStyles}>{headerText}</Text>
  </View>
);

const styles = StyleSheet.create({
  viewStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 20,
    marginBottom: 15,
    backgroundColor: '#e0e0ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    elevation: 1,
  },

  textStyles: {
    fontSize: 20,
  },
});


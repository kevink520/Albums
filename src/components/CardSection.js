import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default CardSection = ({style, children}) => (
  <View style={style || styles}>
    {children}
  </View>
);

const styles = StyleSheet.create({});


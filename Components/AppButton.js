import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 20,
    color: '#ffcc00',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontFamily: 'notoserif',
    fontWeight: 'normal',
  },
});

export default AppButton;

import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const MainButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#222222',
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
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

export default MainButton;

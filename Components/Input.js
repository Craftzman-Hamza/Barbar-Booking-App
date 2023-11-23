import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ResultsDetail from './ResultsDetail';
const Input = ({placeholder, pass, onChangeText, value, iconName, type}) => {
  console.log(placeholder);
  return (
    <View style={styles.backgroundStyle}>
      <Icon name={iconName} style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder={placeholder}
        keyboardType={type}
        secureTextEntry={pass}
        placeholderTextColor="#CCCCCC"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
    marginTop: 10,
    height: 60,
    borderRadius: 3,
    paddingLeft: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#808080',
  },
  iconStyle: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center',
  },
  inputStyle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '700',
  },
});
export default Input;

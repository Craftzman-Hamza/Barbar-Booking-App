import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MainButton from '../Components/MainButton';
import Input from '../Components/Input';
import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const [isSelected, setSelection] = useState(false);

  const __doSignUp = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars');
      setValid(false);
      return;
    } else if (!email) {
      setError('Invalid Email');
      setValid(false);
      return;
    }
    __doCreateUser(email, password);
  };

  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
  };

  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        Alert.alert('Success ✅', 'Account created successfully');
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <View style={styles.ContainerStyle}>
      <View style={styles.HeaderStyle}>
        <Image
          resizeMode="contain"
          source={require('../Components/Pics/logo.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.InputContainer}>
        <Input
          placeholder="Enter Email"
          error={isValid}
          onChangeText={(text) => {
            setError;
            setEmail(text);
          }}
          // error={isValid}
        />
        <Input
          placeholder="Password (must be 6-15 charcters)"
          pass={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
      {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={(newValue) => setSelection(newValue)}
          style={styles.checkbox}
        />
        <Text style={{fontSize: 16}}>I have read and agree to the</Text>
        <Text style={{color: '#9acee2', fontSize: 16}}> Terms Of Service</Text>
        <Text style={{fontSize: 16}}></Text>
      </View>
      <View style={{marginHorizontal: 18}}>
        <Text
          style={{
            fontSize: 16,
            color: '#9acee2',
            marginLeft: 15,
            marginTop: -3,
          }}>
          Privacy Policy
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <MainButton
          title="Register"
          onPress={() => {
            if (!isSelected) {
              Alert.alert(
                'Terms and Services',
                'Read and agree our terms and services',
                [
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
              );
            } else if (!validate(email)) {
              Alert.alert('Invalid email', 'Enter valid email', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            } else if (password == '') {
              Alert.alert('Empty fields', 'Please fill all fields', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            } else {
              __doSignUp();
              console.log('done');
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    alignItems: 'center',
    marginTop: '15%',
  },
  ContainerStyle: {
    flex: 1,
    backgroundColor: 'white',
  },
  FaceStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'notoserif',
  },
  TagStyle: {
    fontSize: 13,
    color: '#C0C0C0',
    marginTop: -5,
  },
  InputContainer: {
    marginHorizontal: 15,
    paddingTop: 50,
  },
  CheckStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ButtonContainer: {
    paddingTop: 30,
    marginHorizontal: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  checkbox: {
    alignSelf: 'center',
    borderColor: 'black',
    backgroundColor: 'black',
  },
  image: {
    width: 100,
    height: 130,
    borderRadius: 360,
    alignSelf: 'center',
  },
});
export default SignUpScreen;

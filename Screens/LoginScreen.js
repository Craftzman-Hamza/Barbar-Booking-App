import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import AppButton from '../Components/AppButton';
import MainButton from '../Components/MainButton';
import Input from '../Components/Input';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const __doSingIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Authenticated successfully');
      }
    } catch (e) {
      console.error(e.message);
    }
  };
  GoogleSignin.configure({
    webClientId:
      '489675436750-dkdoafensp3o040rga1u03i30ice6smr.apps.googleusercontent.com',
  });

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
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
          onChangeText={(text) => {
            setEmail(text);
          }}
          iconName={'mail'}
        />
        <Input
          placeholder="Enter Password"
          pass={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          iconName={'lock-closed'}
        />
      </View>
      <View style={styles.CheckStyle}>
        <AppButton
          title="Register now"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
        <AppButton title="Forgot Password?" />
      </View>
      <View style={styles.ButtonContainer}>
        <MainButton
          title="Log In"
          onPress={() => {
            if (email == '' || password == '') {
              Alert.alert('Input Error', 'Enter email and password', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ]);
            } else {
              __doSingIn(email, password);
            }
          }}
        />
      </View>
      <View style={styles.LogStyle}>
        <View style={styles.LineStyle}></View>
        <Text style={styles.LogTextStyle}>Log In with</Text>
        <View style={styles.LineStyle}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          paddingTop: 15,
        }}>
        <TouchableOpacity
          style={styles.WithContainer}
          onPress={() => {
            onGoogleButtonPress();
          }}>
          <Image
            style={styles.imagestyle}
            source={require('../Components/Pics/google.png')}
          />
          <Text style={{fontSize: 25}}>Google</Text>
        </TouchableOpacity>
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
  LogStyle: {
    paddingTop: 55,
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LineStyle: {
    width: 120,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  LogTextStyle: {
    color: '#FDAE1D',
    fontSize: 18,
  },
  WithContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagestyle: {
    height: 50,
    width: 50,
  },
  image: {
    width: 180,
    height: 130,
    borderRadius: 360,
    alignSelf: 'center',
  },
});
export default LoginScreen;

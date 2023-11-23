import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  Modal,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import MainButton from '../Components/MainButton';
import Input from '../Components/Input';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Form({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [dateandtime, setdateandtime] = useState('');
  const [email, setEmail] = useState('');
  const {title} = route.params;
  const {pic} = route.params;
  const {address} = route.params;
  const {disc} = route.params;
  const {barberEmail} = route.params;

  const Booking = async () => {
    const uID = await auth().currentUser.uid;
    const data = await firestore().collection('AppointmentReq').doc(uID).get();
    const email = await auth().currentUser.email;
    console.log(email);
    setEmail(email);
    if (dateandtime == '') {
      Alert.alert('Date and Time missing', 'Please Enter date and time', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else if (data.data() != null && dateandtime != '') {
      await firestore()
        .collection('AppointmentReq')
        .doc(uID)
        .update({
          address: address,
          dateandtime: dateandtime,
          email: email,
          barberEmail: barberEmail,
        })
        .then(() => {
          console.log('Data saved');
          Alert.alert('Booking Request Sent');
        });
    } else {
      await firestore()
        .collection('AppointmentReq')
        .doc(uID)
        .set({
          address: address,
          dateandtime: dateandtime,
          email: email,
          barberEmail: barberEmail,
        })
        .then(() => {
          console.log('Data saved');
          Alert.alert('Booking Request Sent');
        });
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{flex: 1 / 2, justifyContent: 'center', alignItems: 'center'}}>
        <Image resizeMode="contain" source={pic} style={styles.image} />
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{title}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 25}}>{address}</Text>
        <View
          style={{
            height: 3,
            width: '100%',
            backgroundColor: 'black',
            marginTop: 50,
          }}
        />
      </View>
      <View
        style={{flex: 1 / 2, alignItems: 'center', justifyContent: 'center'}}>
        <SafeAreaView>
          <ScrollView style={{overflow: 'scroll'}}>
            <Text>{disc}</Text>
          </ScrollView>
        </SafeAreaView>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>- Date and time -</Text>
            <Text style={styles.modalText}>
              ( MM/DD/YYYY hh:mm Pakistan Standard Time )
            </Text>
            <Input
              placeholder="Enter Date and Time"
              onChangeText={(text) => {
                setdateandtime(text);
              }}
              type={'number-pad'}
              style={styles.modalInput}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible), Booking();
              }}>
              <Text style={styles.textStyle}>Confirm Booking</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={{paddingTop: 20}}>
        <MainButton title="BOOK NOW!" onPress={() => setModalVisible(true)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 360,
  },
  ButtonContainer: {
    paddingTop: 30,
    marginHorizontal: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#222222',
  },
  buttonClose: {
    backgroundColor: '#222222',
  },
  textStyle: {
    color: '#ffcc00',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalInput: {
    textAlign: 'auto',
  },
});
export default Form;

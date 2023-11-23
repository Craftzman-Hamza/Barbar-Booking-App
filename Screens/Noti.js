import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Noti = () => {
  const [pendingText, setpendingText] = useState('No Status Yet');
  const [acceptedAppointment, setAcceptedAppointment] = useState('');
  const [appointmentStat, setAppointmentStat] = useState([]);
  const [RejectedAppointment, setRejectedAppointment] = useState('');
  const [email, setEmail] = useState(auth().currentUser.email);

  const Clearappointdata = async () => {
    var x = firestore()
      .collection('appointmentAnswer')
      .where('userEmail', '==', email);
    x.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.delete();
      });
    });
  };

  useEffect(() => {
    firestore()
      .collection('appointmentAnswer')
      .where('userEmail', '==', email)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          setAppointmentStat(doc.data());
        });
      });
  });

  if (appointmentStat.Msg == 'Appoinment Accepted') {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>
          {appointmentStat.Msg}
        </Text>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            console.log(appointmentStat.Msg);
            Clearappointdata();
          }}>
          <Text style={styles.appButtonText}>Clear Appointment Status</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (appointmentStat.Msg == 'Appoinment Rejected') {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>
          {appointmentStat.Msg}
        </Text>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            console.log(appointmentStat.Msg);
            Clearappointdata();
          }}>
          <Text style={styles.appButtonText}>Clear Appointment Status</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 30}}>{pendingText}</Text>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => {
            console.log(appointmentStat.Msg);
            Clearappointdata();
          }}>
          <Text style={styles.appButtonText}>Clear Appointment Status</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

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

    //textTransform: "uppercase"
  },
});
export default Noti;

import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import BarberResultList from '../Components/BarberResultList';
import firestore from '@react-native-firebase/firestore';

const BarberList = ({route}) => {
  const {hair} = route.params;
  const [barberList, setBarber] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot((querySnapshot) => {
        const barberList = [];
        querySnapshot.forEach((documentSnapshot) => {
          barberList.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.adress,
          });
        });
        setBarber(barberList);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <BarberResultList results={barberList} hair={hair} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default BarberList;

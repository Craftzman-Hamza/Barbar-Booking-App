import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Carousel from '../Components/Carousel';
import ResultsList from '../Components/ResultsList';
import firestore from '@react-native-firebase/firestore';

const FemaleStyleScreen = ({navigation}) => {
  const [hairStyleDataArr, sethairStyleDataArr] = useState([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection('femaleHairStyles')
      .onSnapshot((querySnapshot) => {
        const hairStyleDataArr = [];
        querySnapshot.forEach((documentSnapshot) => {
          hairStyleDataArr.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        sethairStyleDataArr(hairStyleDataArr);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <SafeAreaView style={styles.Container}>
      <FlatList
        keyExtractor={(item, index) => 'key' + index}
        data={hairStyleDataArr}
        ListHeaderComponent={<Carousel data={hairStyleDataArr} />}
        ListFooterComponent={
          <ResultsList
            results={hairStyleDataArr}
            navigation={navigation}
            title="Latest"
          />
        }
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default FemaleStyleScreen;

import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {useNavigation} from '@react-navigation/native';

const ResultsList = ({title, results}) => {
  const navigation = useNavigation();
  if (!results) {
    return null;
  }
  return (
    <View style={styles.conatainer}>
      <View style={styles.conatiner2}>
        <Text style={styles.title}>{title} </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator
        numColumns={2} // set number of columns
        columnWrapperStyle={styles.row} // space them out evenly
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BarberList', {hair: item});
              }}
              style={styles.touchStyle}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
    paddingTop: 5,
    color: 'white',
  },
  touchStyle: {
    backgroundColor: 'white',
    marginBottom: 5,
    elevation: 2,
    borderRadius: 10,
    borderWidth: 1,
  },
  conatainer: {
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  conatiner2: {
    flexDirection: 'row',
  },
  CountStyle: {
    fontSize: 18,
    color: '#CCCCCC',
    paddingTop: 5,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
export default ResultsList;

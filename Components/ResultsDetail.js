import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const ResultsDetail = ({result}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <View style={{backgroundColor: '#ced3db', borderRadius: 10}}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={{uri: result.src}}
        />
        <View style={{flexDirection: 'row-reverse'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ARScreen', {hair: result});
            }}>
            <Icon name="camera" style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 120,
  },
  conatiner: {
    // marginLeft: 15,
  },
  iconStyle: {
    paddingRight: 3,
    fontSize: 35,
  },
});
export default ResultsDetail;

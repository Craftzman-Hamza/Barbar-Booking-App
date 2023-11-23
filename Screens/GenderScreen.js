import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const GenderScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          flex: 0.5,
        }}>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Hi,</Text>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>
          Select Your Gender
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={styles.WithContainer}
          onPress={() => navigation.navigate('MaleStyleScreen')}>
          <Image
            style={styles.imagestyle}
            resizeMode="stretch"
            source={require('../Components/Pics/qwe.png')}
          />
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Male</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity
          style={styles.WithContainer}
          onPress={() => navigation.navigate('FemaleStyleScreen')}>
          <Image
            style={styles.imagestyle}
            resizeMode="stretch"
            source={require('../Components/Pics/zxc.png')}
          />
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  WithContainer: {
    alignItems: 'center',
  },
  imagestyle: {
    height: 200,
    width: 120,
  },
  line: {
    height: 200,
    width: 5,
    backgroundColor: 'black',
  },
});
export default GenderScreen;

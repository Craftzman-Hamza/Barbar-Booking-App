import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const BarberResultsDetail = ({result}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.conatiner}>
      <SafeAreaView>
        <View style={{flex: 1, borderRadius: 4, backgroundColor: '#ced3db'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{uri: result.url}}
            />
            <View style={{width: '80%', overflow: 'scroll'}}>
              <Text>{result.name}</Text>
              <Text>Location:{result.adress}</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  conatiner: {
    // marginLeft: 15,
    flex: 1,
  },
});
export default BarberResultsDetail;

import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
  return (
    <View style={styles.cardView}>
      <View style={{flex: 1, borderRadius: 10, backgroundColor: '#ced3db'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            style={styles.image}
            resizeMode="center"
            source={{uri: item.src}}
          />
        </View>
        <View style={styles.textView}>
          <Text style={styles.itemTitle}> {item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 20,
    height: height / 3,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'black',
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'black',
    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.8, height: 0.8},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default CarouselItem;

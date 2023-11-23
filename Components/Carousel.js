import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
} from 'react-native';
import CarouselItem from './CarouselItem';

const {width, heigth} = Dimensions.get('window');

function infiniteScroll(dataList) {
  const numberOfData = dataList.length;
  let scrollValue = 0,
    scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numberOfData) scrollValue = scrollValue + width;
    else {
      scrollValue = 0;
      scrolled = 0;
    }
  }, 3000);
}

const Carousel = ({data}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    console.log(data);
    infiniteScroll(dataList);
  });

  if (data) {
    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <CarouselItem item={item} />;
          }}
        />
      </View>
    );
  }

  console.log('Please provide Images');
  return null;
};

const styles = StyleSheet.create({
  dotView: {flexDirection: 'row', justifyContent: 'center'},
});

export default Carousel;

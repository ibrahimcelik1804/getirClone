import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppColors} from '../../theme/color';

const {height, width} = Dimensions.get('window');
const ImageCarousel = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onViewRef = useRef(viewableItems => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index || 0);
    }
  });

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: height * 0.25,
        paddingTop: 25,
      }}>
      <FlatList
        style={{width: width * 0.5, height: height * 0.21}}
        data={images}
        renderItem={item => (
          <Image
            source={{uri: item.item}}
            style={{
              width: width * 0.5,
              height: height * 0.21,
              resizeMode: 'stretch',
            }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width * 0.5}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
      />
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 25,
            height: 12,
          }}>
          {images.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    activeIndex === index ? AppColors.PURPLE : AppColors.GRAY,
                },
              ]}></View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});

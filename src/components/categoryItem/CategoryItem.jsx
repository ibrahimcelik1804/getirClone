import { Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {CATEGORY} from '../../utils/router';

const {width, height} = Dimensions.get('window');

const CategoryItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(CATEGORY,{category:item})}
      style={{
        width: width * 0.25,
        height: width * 0.24,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      <Image
        style={{width: width * 0.18, height: width * 0.18, borderRadius: 8}}
        source={{
          uri: item.src,
        }}
      />
      <Text style={{fontSize: 12, color: AppColors.GRAY, fontWeight: '500'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

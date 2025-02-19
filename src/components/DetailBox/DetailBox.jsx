import {View, Text} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';

const DetailBox = ({price, name, quantity}) => {
  return (
    <View
      style={{width: '100%', backgroundColor: 'white', alignItems: 'center'}}>
      <Text
        style={{
          color: AppColors.PURPLE,
          fontWeight: 'bold',
          marginTop: 12,
          fontSize: 20,
        }}>
        <Text>₺</Text>
        {price}
      </Text>
      <Text style={{fontWeight: '600', fontSize: '16', marginTop: 12}}>
        {name}
      </Text>
      <Text
        style={{
          color: AppColors.GRAY,
          fontWeight: '600',
          marginTop: 8,
          paddingBottom: 17,
        }}>
        {quantity}
      </Text>
    </View>
  );
};

export default DetailBox;

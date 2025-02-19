import {View, Text} from 'react-native';
import ProductItem from '../../components/ProductItem/ProductItem';
import React from 'react';
import productGetir from '../../assets/productGetir';
import {AppColors} from '../../theme/color';

const ProductContainer = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {productGetir.slice(0, 2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
      <Text style={{color: AppColors.GRAY, fontWeight: '900', padding: 14}}>
        Çubuk
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'white',
          paddingVertical: 10,
        }}>
        {productGetir.slice(2).map(item => (
          <ProductItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

export default ProductContainer;

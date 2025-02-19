import {View, Text, ActivityIndicator, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import {AppColors} from '../../theme/color';
import DetailBox from '../../components/DetailBox/DetailBox';
import DetailProperty from '../../components/DetailProperty/DetailProperty';
import CardButton from '../../components/CardButton/CardButton';

const ProductDetailScreen = ({route}) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(route.params.product);
  }, []);
  console.log('our product', product);

  if (!product) {
    return <ActivityIndicator color={AppColors.PURPLE} />;
  }

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View>
          {product.images && <ImageCarousel images={product.images} />}
        </View>
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: AppColors.GRAY,
            fontWeight: '600',
          }}>
          detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
};

export default ProductDetailScreen;

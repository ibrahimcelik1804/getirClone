import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import productGetir from '../../assets/productGetir';
import CardItem from '../../components/CardItem/CardItem';
import {AppColors} from '../../theme/color';
import ProductItem from '../../components/ProductItem/ProductItem';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');

const CardScreen = ({cardItems}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const getProductsPrice = () => {
    let total = 0;
    cardItems.forEach(product => {
      total += product.product.fiyat;
      setTotalPrice(total);
    });
    cardItems.length ? null : setTotalPrice(0);
  };
  useEffect(() => {
    getProductsPrice();
  }, [cardItems]);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <FlatList
          style={{}}
          data={cardItems}
          renderItem={({item}) => (
            <CardItem product={item.product} quantity={item.quantity} />
          )}
        />
        <Text
          style={{padding: 15, fontWeight: 'bold', color: AppColors.PURPLE}}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          style={{backgroundColor: 'white'}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}>
          {productGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: '4%',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          backgroundColor: '#f8f8f8',
        }}>
        <TouchableOpacity
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: AppColors.PURPLE,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Devam
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}>
          <Text
            style={{
              color: AppColors.PURPLE,
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            <Text>₺</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};
const mapStateProps = state => {
  const {cardItems} = state;
  return {
    cardItems: cardItems,
  };
};

export default connect(mapStateProps, null)(CardScreen);

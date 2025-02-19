import {View, Text, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {Add} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/router';
import {connect} from 'react-redux';
import * as actions from '../../redux/actions/cardActions';

const {width, height} = Dimensions.get('window');

const ProductItem = ({item, addItemToCard}) => {
  console.log('Ürün:', item);
  console.log('addItemToCard fonksiyonu:', addItemToCard);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(PRODUCTDETAIL, {product: item})}
      style={{
        width: width * 0.28,
        marginTop: 10,
        //  backgroundColor: 'red',
        height: height * 0.24,
        marginLeft: 12,
        marginBottom: 6,
      }}>
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: AppColors.GRAY,
        }}
        source={{
          uri: item.image,
        }}
      />
      <View style={{marginTop: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 11.4,
            color: '#747990',
            textDecorationLine: 'line-through',
            alignItems: 'center',
          }}>
          <Text>₺</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: AppColors.PURPLE,
            fontWeight: '500',
            marginLeft: 4,
            alignItems: 'center',
          }}>
          <Text>₺</Text> {item.fiyatIndirimli}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '600',
          marginTop: 5,
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: '#747990 ',
          fontSize: 12,
          marginTop: 4,
          fontWeight: '500',
        }}>
        {item.miktar}
      </Text>
      <TouchableOpacity
        onPress={() => {
          addItemToCard(item);
        }}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30,
          borderWidth: 0.2,
          borderColor: AppColors.WHITEGRAY,
          backgroundColor: 'white',
          position: 'absolute',
          right: -6,
          top: -6,
          borderRadius: 6,
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
        }}>
        <Add size="22" color={AppColors.PURPLE} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToCard: product =>
      dispatch(actions.addToCard({quantity: 1, product})),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);

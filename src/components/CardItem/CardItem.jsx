import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {AppColors} from '../../theme/color';
import * as actions from '../../redux/actions/cardActions';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');
const CardItem = ({product, quantity, removeFromCard}) => {
  return (
    <View style={{width: '100%', backgroundColor: 'white'}}>
      <View
        style={{
          borderBottomWidth: 0.4,
          marginHorizontal: width * 0.04,
          borderBottomColor: 'lightgrey',
          height: height * 0.13,
          width: width * 0.92,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              borderWidth: 0.4,
              borderColor: 'lightgray',
              borderRadius: 8,
              padding: 4,
            }}>
            {' '}
            <Image
              source={{uri: product.image}}
              style={{
                width: height * 0.09,
                height: height * 0.09,
              }}
            />
          </View>

          <View style={{marginLeft: 10}}>
            <Text
              style={{fontSize: 13, fontWeight: '600', maxWidth: width * 0.46}}>
              {' '}
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: AppColors.LIGTHGRAY,
                fontWeight: '600',
              }}>
              {product.miktar}
            </Text>
            <Text
              style={{
                color: AppColors.PURPLE,
                marginTop: 6,
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              <Text>₺</Text>
              {product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            shadowOpacity: 0.4,
            shadowColor: 'gray',
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.5,
            height: height * 0.038,
            borderRadius: 8,
            width: width * 0.2,
            borderColor: AppColors.WHITEGRAY,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            onPress={() => removeFromCard(product)}
            style={{flex: 1, alignItems: 'center'}}>
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              backgroundColor: AppColors.PURPLE,
              height: height * 0.037,
              justifyContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 12}}>
              {quantity}
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text>+</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    removeFromCard: product => dispatch(actions.removeFromCard(product)),
  };
};

export default connect(null, mapDispatchToProps)(CardItem);

import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import * as actions from '../../redux/actions/cardActions';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');
const CardButton = ({item, addItemToCard}) => {
  return (
    <TouchableOpacity onPress={()=>addItemToCard(item)}
      style={{
        width: '100%',
        height: height * 0.11,
        backgroundColor: 'white',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          backgroundColor: AppColors.PURPLE,
          height: height * 0.06,
          width: '90%',
          marginHorizontal: '5%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: -10,
        }}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    addItemToCard: product =>
      dispatch(actions.addToCard({quantity: 1, product})),
  };
};

export default connect(null, mapDispatchToProps)(CardButton);

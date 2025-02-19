import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState} from 'react';
import categoriesGetir from '../../assets/categoriesGetir';
import {AppColors} from '../../theme/color';

const {height, width} = Dimensions.get('window');

const CategoryBox = ({item, active}) => {
  return (
    <View
      style={[
        {
          paddingHorizontal: 9,
          flexDirection: 'row',
          alignItems: 'center',
        },
        item.name == active.name && {
          borderBottomColor: AppColors.YELLOW,
          borderBottomWidth: 2.5,
        },
      ]}>
      <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}>
        {item.name}
      </Text>
    </View>
  );
};

const CategoryFiltering = ({category}) => {
  const [categories, setCategories] = useState(categoriesGetir);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{
        width: '100%',
        height: height * 0.065,
        backgroundColor: AppColors.LIGHTPURPLE,
       
      }}
      bounces={true}
      horizontal={true}>
      {categoriesGetir.map(item => (
        <CategoryBox key={item.id} item={item} active={category} />
      ))}
    </ScrollView>
  );
};

export default CategoryFiltering;

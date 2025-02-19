import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../theme/color';

const {height, width} = Dimensions.get('window');

const TypeBox = ({item, active, setCat}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          paddingHorizontal: 12,
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 12,
          borderRadius: 6,
          height: height * 0.044,
        },
        item == active
          ? {backgroundColor: AppColors.PURPLE}
          : {borderColor: '#f0eff7', borderWidth: 1.3},
      ]}>
      <Text
        style={[
          {fontSize: 12, color: '#7849F7', fontWeight: '600'},
          item == active && {color: 'white'},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

const TypeFiltering = () => {
  const [category, setCategory] = useState('Birlikte İyi Gider');
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      style={{
        width: '100%',
        flexDirection: 'row',
        height: height * 0.072,
        paddingVertical: height * 0.014,
        backgroundColor: 'white',
        paddingHorizontal: 12,
        borderBottomColor:"lightgrey",
        borderWidth: 1,
        
      }}>
      {['Birlikte İyi Gider', 'Çubuk', 'Kutu', 'Külah', 'Çoklu', 'Bar'].map(
        item => (
          <TypeBox setCat={setCategory} item={item} active={category} />
        ),
      )}
    </ScrollView>
  );
};

export default TypeFiltering;

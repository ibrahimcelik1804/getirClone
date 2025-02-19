import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../theme/color';
import {ArrowDown2} from 'iconsax-react-native';

const DetailProperty = () => {
  const [details, setDetails] = useState([
    'Sütlü kıtır çikolatalı ve badem parçacıklarıyla kaplı vanilya lezzeti',
    'içindekiler',
    'Besin Değerleri',
    'Kullanım',
    'Ek Bilgiler',
  ]);

  const TextCompomemt = ({detail, index}) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderBottomColor: 'lightgray',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: index === 0 ? '#4e4e4e' : AppColors.LIGTHGRAY,
            fontSize: index === 0 ? 10.5 : 13,
            fontWeight: index === 0 ? '400' : '500',
          }}>
          {detail}
        </Text>
        {index != 0 && <ArrowDown2 size="24" color="#9f9f9f" />}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}>
      {details.map((item, index) => (
        <TextCompomemt key={index} index={index} detail={item} />
      ))}
    </View>
  );
};

export default DetailProperty;

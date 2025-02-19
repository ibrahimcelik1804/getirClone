import {View, Text, Image} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import styles from './styles';
import {ArrowRight2} from 'iconsax-react-native';

const HeaderMain = () => {
  return (
    <View>
      <View style={styles.headerMain}>
        <View style={styles.headerOne}>
          <Image
            style={styles.image}
            source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
          />
          <View style={styles.headerOneView}>
            <Text style={{fontWeight: '600', fontSize: 12}}>Ev: </Text>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 12,
                color: 'gray',
              }}>
              Taşkent cad. Esentepe Mah. Toki Sitesi ...
            </Text>
            <ArrowRight2 size="18" color="black" />
          </View>
        </View>
        <View style={styles.headerTwo}>
          <Text
            style={{color: AppColors.PURPLE, fontSize: 10, fontWeight: 'bold'}}>
            TVS
          </Text>
          <Text
            style={{color: AppColors.PURPLE, fontSize: 20, fontWeight: 'bold'}}>
            11
            <Text
              style={{
                color: AppColors.PURPLE,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              dk
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderMain;

import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import HeaderMain from '../../components/headerMain/HeaderMain';
import BannerCarousel from '../../components/bannerCarousel/bannerCarousel';
import {AppColors} from '../../theme/color';
import MainCategories from '../../components/mainCategories/MainCategories';

const HomeScreen = () => {
  return (
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{backgroundColor: AppColors.WHITEGRAY}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
};

export default HomeScreen;

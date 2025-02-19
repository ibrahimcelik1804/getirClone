import {Text, Image, TouchableOpacity, Dimensions, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CARDSCREEN, CATEGORY, HOME, PRODUCTDETAIL} from '../utils/router';
import HomeScreen from '../screens/homeScreen';
import {AppColors} from '../theme/color';
import CategoryFilterScreen from '../screens/categoryFilterScreen';
import ProductDetailScreen from '../screens/productDetaiScreen';
import {CloseSquare, Heart, Trash} from 'iconsax-react-native';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from '@react-navigation/native';
import CardScreen from '../screens/cardScreen';
import {connect} from 'react-redux';
import cardItems from '../redux/reducers/cardItem';
import * as actions from '../redux/actions/cardActions';

const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get('window');

const MyStack = ({navigation, route, cardItems, clearCard}) => {
  const tabHiddenRoutes = [PRODUCTDETAIL, CARDSCREEN];
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log('Route Name is ', routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log('Kapat ', routeName);
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      console.log('Aç ', routeName);
      navigation.setOptions({tabBarStyle: {display: 'true'}});
    }
  }, [navigation, route]);

  const [totalPrice, setTotalPrice] = useState(0);
  const getProductsPrice = () => {
    var total = 0;
    cardItems.forEach(cardItem => {
      const price = (total += cardItem.product.fiyat);
      setTotalPrice(price);
    });
  };

  useEffect(() => {
    getProductsPrice();
  }, [cardItems, navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: AppColors.PURPLE},
          headerTitle: () => (
            <Image
              style={{width: 70, height: 30}}
              source={require('../../src/assets/getirlogo.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name={CATEGORY}
        component={CategoryFilterScreen}
        options={{
          headerTintColor: 'white',
          headerBackTitleVisible: false,
          headerStyle: {backgroundColor: AppColors.PURPLE},
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(CARDSCREEN);
              }}
              style={{
                backgroundColor: 'white',
                marginRight: width * 0.03,
                width: width * 0.2,
                height: 33,
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 6,
                borderRadius: 8,
              }}>
              <Image
                style={{width: 23, height: 23}}
                source={require('../../src/assets/cart.png')}
              />
              <View style={{height: 33, width: 3, backgroundColor: 'white'}} />
              <View
                style={{
                  flex: 1,
                  height: 33,
                  backgroundColor: '#f3effe',
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: AppColors.PURPLE,
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}>
                  <Text> ₺</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        headerBackTitleVisible
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{paddingLeft: 10}}>
              <CloseSquare size="32" color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{paddingRight: 5}}>
              <Heart size="32" color="#32177a" variant="Bold" />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerTintColor: 'white',
          headerStyle: {backgroundColor: AppColors.PURPLE},
          headerTitle: () => (
            <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
              Ürün Detayı
            </Text>
          ),
        }}
        name={PRODUCTDETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: AppColors.PURPLE,
            color: 'white',
            fontWeight: '900',
          },
          headerTintColor: 'white',
          headerTitle: () => (
            <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
              Sepetim
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => clearCard()}
              style={{paddingRight: 8}}>
              <Trash size="32" color="white" variant="Bold" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingLeft: 8}}
              onPress={() => navigation.goBack()}>
              <CloseSquare size="32" color="white" variant="Bold" />
            </TouchableOpacity>
          ),
        }}
        name={CARDSCREEN}
        component={CardScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

const mapStateToProps = state => {
  const {cardItems} = state;
  return {
    cardItems: cardItems,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearCard: () => dispatch(actions.clearCard()),
  };
};

function HomeNavigation({navigation, route, cardItems, clearCard}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cardItems={cardItems}
      clearCard={clearCard}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigation);

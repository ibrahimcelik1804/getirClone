import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GIFT, HOME, LIST, SEARCH, USER} from '../utils/router';
import {AppColors} from '../theme/color';
import HomeNavigation from './homeNavigation';
import {
  Gift,
  HomeHashtag,
  SearchNormal1,
  Task,
  User,
} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();
const RootNavigation = () => {
  const CustomTabsBarBottom= ({ children }) => {
    return (
      <TouchableOpacity
        style={{
          height: 58,
          width: 58,
          backgroundColor: AppColors.PURPLE,
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: -8,
          borderWidth: 2,
          borderColor: 'white',
        }}>
        <Task size={32} color={AppColors.YELLOW} variant={'Linear'} />
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: AppColors.PURPLE,
        tabBarInactiveTintColor: AppColors.GRAY,
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        name={HOME}
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <HomeHashtag
              size={focused ? 35 : 25}
              color={color}
              variant="Bold"
            />
          ),
        }}
      />
      <Tab.Screen
        name={SEARCH}
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <SearchNormal1
              size={focused ? 35 : 25}
              color={color}
              variant="Bold"
            />
          ),
        }}
      />
      <Tab.Screen
        name={LIST}
        component={HomeNavigation}
        options={{tabBarButton: props => <CustomTabsBarBottom {...props} />}}
      />
      <Tab.Screen
        name={USER}
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <User size={focused ? 35 : 25} color={color} variant="Bold" />
          ),
        }}
      />
      <Tab.Screen
        name={GIFT}
        component={HomeNavigation}
        options={{
          tabBarIcon: ({color, focused}) => (
            <Gift size={focused ? 35 : 25} color={color} variant="Bold" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;

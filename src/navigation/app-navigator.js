/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {InventoryContext} from '../context/context';
import HomeScreen from '_screens/home';
import InsuranceScreen from '_screens/insurance';
import InventoryScreen from '_screens/inventory';
import MenuScreen from '_screens/menu';
import SearchScreen from '_screens/search';
import {Colors, Fonts} from '_styles';
import {inventoryData} from '../utils/data';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Inventory"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: Fonts.FONT_SIZE_12,
          paddingBottom: Platform.OS === 'android' ? 3 : 0,
        },
        tabBarStyle: {marginTop: 10, borderTopWidth: 0, padding: 5},

        tabBarIcon: ({color}) => {
          const icons = {
            Home: 'home-outline',
            Insurance: 'umbrella-outline',
            Inventory: 'briefcase-outline',
            Search: 'magnify',
            Menu: 'menu',
          };

          return <Icon name={icons[route.name]} color={color} size={26} />;
        },
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.GRAY_DARK,
        presentation: 'modal',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Insurance" component={InsuranceScreen} />
      <Tab.Screen name="Inventory" component={InventoryScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Menu" component={MenuScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabNav" component={TabNavigator} />
    </Stack.Navigator>
  );
};

const AppNavigatorStack = () => {
  const [inventoryItems, setInventoryItems] = useState(inventoryData);
  return (
    <InventoryContext.Provider value={{inventoryItems, setInventoryItems}}>
      <AppNavigator />
    </InventoryContext.Provider>
  );
};

export default AppNavigatorStack;

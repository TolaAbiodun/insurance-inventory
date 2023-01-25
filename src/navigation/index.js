// RootNavigator
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigatorStack from './app-navigator';

// RootNavigator
const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <AppNavigatorStack />
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;

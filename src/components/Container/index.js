import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './style';

const Container = ({style, children}) => {
  return (
    <SafeAreaView>
      <View style={[styles.wrapper, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Container;

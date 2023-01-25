import {StyleSheet, Appearance, SafeAreaView} from 'react-native';
import React from 'react';
import RootNavigator from '_navigation';
import {Toast} from '_components';
import {Colors} from '_styles';

const colorScheme = Appearance.getColorScheme();

const App = () => {
  return (
    <>
      {colorScheme === 'dark' && <SafeAreaView style={styles.topSafeArea} />}
      <RootNavigator />
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: Colors.PRIMARY,
  },
});

export default App;

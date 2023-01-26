import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStore = async key => {
  const value = await AsyncStorage.getItem(key);
  return JSON.parse(value);
};

export const saveToStore = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    alert(e);
  }
};

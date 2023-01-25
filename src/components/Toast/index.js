/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Text,
  DeviceEventEmitter,
  Platform,
  ToastAndroid,
  Animated,
  View,
  TouchableOpacity,
} from 'react-native';
import {SHOW_TOAST_MESSAGE} from '_utils/constant';
import {Colors} from '_styles';

import {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const colors = {
  info: Colors.TOAST_INFO,
  success: Colors.TOAST_SUCCESS,
  danger: Colors.TOAST_DANGER,
};

const Toast = () => {
  const [messageType, setMessageType] = useState(null);
  const timeOutRef = useRef(null);

  const animatedOpacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: animatedOpacity.value,
    };
  }, []);

  const [timeOutDuration, setTimeOutDuration] = useState(5000);

  const [message, setMessage] = useState(null);

  const onNewToast = data => {
    if (Platform.OS === 'android' && data.useNativeToast) {
      return ToastAndroid.show(data.message, ToastAndroid.LONG);
    }
    if (data.duration) {
      setTimeOutDuration(data.duration);
    }
    setMessage(data.message);
    setMessageType(data.type);
  };

  const closeToast = useCallback(() => {
    setMessage(null);
    setTimeOutDuration(500);
    animatedOpacity.value = withTiming(0);
    clearInterval(timeOutRef.current);
  }, [animatedOpacity]);

  useEffect(() => {
    if (message) {
      timeOutRef.current = setInterval(() => {
        if (timeOutDuration === 0) {
          closeToast();
        } else {
          setTimeOutDuration(prev => prev - 1000);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timeOutRef.current);
    };
  }, [closeToast, message, timeOutDuration]);

  useEffect(() => {
    if (message) {
      animatedOpacity.value = withTiming(1, {duration: 1000});
    }
  }, [message, animatedOpacity]);

  useEffect(() => {
    DeviceEventEmitter.addListener(SHOW_TOAST_MESSAGE, onNewToast);

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  if (!message) {
    return null;
  }

  return (
    <Animated.View
      onPress={closeToast}
      style={[
        {
          position: 'absolute',
          bottom: '12%',
          left: '4%',
          right: '4%',
          backgroundColor: colors[messageType],
          zIndex: 1,
          elevation: 1,
          borderRadius: 7,
          justifyContent: 'space-between',
          flexDirection: 'row',
        },
        animatedStyle,
      ]}>
      <View
        style={{
          padding: 10,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Icon
          name={
            messageType === 'success'
              ? 'check-circle-outline'
              : 'alert-circle-outline'
          }
          size={22}
          color={Colors.WHITE}
        />
        <Text
          style={{
            marginLeft: 7,
            color: 'white',
            fontSize: 17,
          }}>
          {message}
        </Text>
      </View>
      <View
        style={{
          padding: 10,
        }}>
        <TouchableOpacity onPress={closeToast}>
          <Icon name="close" size={22} color={Colors.WHITE} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Toast;

import React, {useState, useEffect} from 'react';
import {View, Text, Modal, TouchableOpacity, Animated} from 'react-native';
import styles from './style';

const RNModal = ({visible, onClose, children}) => {
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  const slideUp = {
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <Modal animationType="none" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.animatedView, slideUp]}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={onClose}
              style={{alignSelf: 'flex-end', padding: 10}}>
              <Text style={styles.headerBtn}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.headerBtn}>Add</Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 1, padding: 20}}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default RNModal;

import {Text, View, Image, Platform} from 'react-native';
import React from 'react';
import styles from './style';

const generateBoxShadowStyle = (
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
) => {
  if (Platform.OS === 'ios') {
    styles.boxShadow = {
      shadowColor: shadowColorIos,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    };
  } else if (Platform.OS === 'android') {
    styles.boxShadow = {
      elevation,
      shadowColor: shadowColorAndroid,
    };
  }
};

generateBoxShadowStyle(0, 6, '#8A8A8A', 0.2, 3, 4, '#8A8A8A');

const Card = ({name, purchasePrice, imgUrl}) => {
  return (
    <View style={[styles.cardContainer, styles.boxShadow]}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.imageWrapper}
          source={{
            uri: imgUrl,
          }}
        />
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.descText}>{name}</Text>
        <Text style={styles.priceText}>{purchasePrice}</Text>
      </View>
    </View>
  );
};

export default Card;

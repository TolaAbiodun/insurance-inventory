import {StyleSheet} from 'react-native';
import {Fonts} from '_styles';
import {Colors} from '_styles';

export default StyleSheet.create({
  cardContainer: {
    width: '47%',
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    borderWidth: 0.5,
    borderColor: Colors.GRAY_LIGHT_1,
    marginBottom: 20,
  },
  imageWrapper: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  descriptionContainer: {
    textAlign: 'left',
    padding: 15,
  },
  descText: {
    fontSize: Fonts.FONT_SIZE_18,
    fontWeight: Fonts.FONT_WEIGHT_MEDIUM,
    height: 50,
  },
  priceText: {
    color: Colors.GRAY_DARK,
    fontSize: Fonts.FONT_SIZE_16,
  },
});

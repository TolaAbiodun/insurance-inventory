import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '_styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'left',
    // marginBottom: 50,
  },
  headerText: {
    fontSize: Fonts.FONT_SIZE_26,
    fontWeight: Fonts.FONT_WEIGHT_BOLD,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
  },
  separator: {
    height: 15,
  },
  inputLabel: {
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: Fonts.FONT_WEIGHT_MEDIUM,
    marginBottom: 5,
  },
  error: {
    color: Colors.RED,
    paddingTop: 4,
    fontSize: 12,
  },
  imageSelectorWrapper: {
    height: 130,
    width: 130,
    borderWidth: 0.6,
    borderColor: Colors.GRAY_MEDIUM,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  descText: {
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: Fonts.FONT_WEIGHT_MEDIUM,
  },
  selectedImg: {width: 130, height: 130, borderRadius: 130 / 2},
});

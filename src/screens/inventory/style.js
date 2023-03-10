import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '_styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'left',
    // marginBottom: 100,
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
    height: 120,
    width: 120,
    borderWidth: 0.6,
    borderColor: Colors.GRAY_LIGHT_2,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  descText: {
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: Fonts.FONT_WEIGHT_MEDIUM,
  },
  selectedImg: {
    width: 120,
    height: 120,
    borderRadius: 130 / 2,
  },
  deleteBtn: {
    position: 'absolute',
    bottom: -10,
    left: 90,
    zIndex: 1,
  },
  kbdView: {
    flex: 1,
  },
});

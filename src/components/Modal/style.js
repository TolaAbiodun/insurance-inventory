import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '_styles';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
  },
  headerBtn: {
    color: Colors.PRIMARY,
    fontSize: Fonts.FONT_SIZE_18,
    fontWeight: Fonts.FONT_WEIGHT_BOLD,
    marginRight: 10,
  },
  animatedView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 7,
    zIndex: 1,
  },
});

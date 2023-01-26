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
    padding: 10,
    borderBottomColor: 'lightgray',
  },
  headerBtn: {
    color: Colors.PRIMARY,
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: Fonts.FONT_WEIGHT_MEDIUM,
  },
  animatedView: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 7,
  },
});

import {StyleSheet} from 'react-native';
import {Fonts} from '_styles';
import {Colors} from '_styles';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    borderWidth: 0.4,
    borderColor: Colors.GRAY_DARK,
    borderRadius: 7,
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    marginLeft: 15,
    fontWeight: Fonts.FONT_WEIGHT_MEDIUM,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    marginLeft: 20,
    marginTop: 5,
    shadowColor: Colors.GRAY_DARK,
    shadowRadius: 2,
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.5,
    elevation: 2,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 0.4,
    borderColor: Colors.GRAY_DARK,
  },
});

import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '_styles';

export default StyleSheet.create({
  wrapper: {
    height: 50,
    borderRadius: 7,
    paddingHorizontal: 5,
    backgroundColor: Colors.WHITE,
  },

  wrapperLarge: {
    height: 100,
    borderRadius: 7,
    paddingHorizontal: 5,
    textAlignVertical: 'center',
    backgroundColor: Colors.WHITE,
  },

  inputContainer: {
    paddingVertical: 12,
    width: '100%',
  },

  inputLabel: {
    fontSize: Fonts.FONT_SIZE_16,
    fontWeight: Fonts.FONT_WEIGHT_MEDIUM,
    marginBottom: 5,
  },

  textInput: {
    flex: 1,
    fontSize: Fonts.FONT_SIZE_14,
    width: '100%',
    padding: 5,
  },

  error: {
    color: Colors.RED,
    paddingTop: 4,
    fontSize: 12,
  },
});

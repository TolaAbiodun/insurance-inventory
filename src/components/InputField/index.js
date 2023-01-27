/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Colors} from '_styles';
import styles from './style';

const InputField = ({
  onChangeText,
  iconPosition,
  icon,
  inputContainerStyle,
  style,
  value,
  label,
  error,
  hasLargeText,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'right') {
        return 'row';
      } else if (iconPosition === 'left') {
        return 'row-reverse';
      }
    }
  };

  const getBorderWidth = () => {
    if (focused) {
      return 2;
    } else {
      return 0.6;
    }
  };

  const getBorderColor = () => {
    if (error) {
      return Colors.RED;
    } else if (focused) {
      return Colors.PRIMARY;
    } else {
      return Colors.GRAY_DARK;
    }
  };
  return (
    <View style={[styles.inputContainer, inputContainerStyle]}>
      {label && <Text style={styles.inputLabel}>{label}</Text>}

      <View
        style={[
          hasLargeText ? styles.wrapperLarge : styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {
            borderColor: getBorderColor(),
            flexDirection: getFlexDirection(),
            borderWidth: getBorderWidth(),
          },
        ]}>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          placeholderTextColor={Colors.GRAY_MEDIUM}
          {...props}
        />
        <View>{icon && icon}</View>
      </View>

      {error !== '' && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default InputField;

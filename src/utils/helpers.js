import {DeviceEventEmitter} from 'react-native';
import {SHOW_TOAST_MESSAGE} from '../utils/constant';

export const toast = {
  info: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'info'});
  },
  success: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {
      ...options,
      type: 'success',
    });
  },
  danger: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'danger'});
  },
};

export const clean_euro_format = amount => {
  var formatterNGR = new Intl.NumberFormat('en-DE', {
    maximumSignificantDigits: 10,
    style: 'currency',
    currency: 'EUR',
  });
  return formatterNGR.format(amount);
};

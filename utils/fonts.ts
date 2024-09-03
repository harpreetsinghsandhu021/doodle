import {isIOS} from './platform'; // Adjust the import path as needed

export const fontFamilies = {
  ROBOTO: {
    normal: isIOS() ? 'Roboto-Regular' : 'Roboto-Regular',
    medium: isIOS() ? 'Roboto-Medium' : 'Roboto-Medium',
    bold: isIOS() ? 'Roboto-Bold' : 'Roboto-Bold',
    light: isIOS() ? 'Roboto-Light' : 'Roboto-Light',
    thin: isIOS() ? 'Roboto-Thin' : 'Roboto-Thin',
  },
};

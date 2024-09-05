import {atom} from 'recoil';

export const modal = atom({
  key: 'modal',
  default: {
    visible: false,
    background: '',
  },
});

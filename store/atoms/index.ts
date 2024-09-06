import {atom} from 'recoil';
import {authAtom, modalAtom} from '../../types/auth/types';
import ReactNativeRecoilPersist from 'react-native-recoil-persist';

export const modal = atom<modalAtom>({
  key: 'modal',
  default: {
    visible: false,
    background: '',
    activeTodo: null,
  },
});

export const authState = atom<authAtom>({
  key: 'authState',
  default: {
    isLoggedIn: false,
    user: null,
    token: null,
  },
  effects_UNSTABLE: [ReactNativeRecoilPersist.persistAtom],
});

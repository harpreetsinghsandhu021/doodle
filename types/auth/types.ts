import {z} from 'zod';
import authSchema from './schema';
import {User} from '../user';
import {Todo} from '../todo';

export type auth = z.infer<typeof authSchema>;

export type authAtom = {
  isLoggedIn: boolean;
  user: User | null;
  token: string | null;
};

export type modalAtom = {
  visible: boolean;
  background: string;
  activeTodo: null | Todo;
};

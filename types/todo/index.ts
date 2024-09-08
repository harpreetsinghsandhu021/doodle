import {z} from 'zod';
import {User} from '../user';
import todoSchema from './schema';

export interface Todo {
  id: number;
  title: string;
  status: Status;
  description?: string;
  userId: number;
  user?: User;
  createdAt: Date;
  updatedAt: Date;
}

export enum Status {
  Ongoing = 'ongoing',
  Completed = 'completed',
  InProcess = 'inprocess',
  Cancelled = 'cancelled',
}

export type createTodo = z.infer<typeof todoSchema>;

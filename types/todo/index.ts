import {User} from '../user';

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

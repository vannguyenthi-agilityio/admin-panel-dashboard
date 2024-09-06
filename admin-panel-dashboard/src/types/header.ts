import { IUser } from './common';

export interface IHeader {
  className?: string;
  user?: IUser;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

import { VariantProps } from "class-variance-authority";

import { headerStyles } from '@/components/Header/style';

import { IUser } from './common';

export interface IHeader
  extends Omit<VariantProps<typeof headerStyles>, "">  {
  className?: string;
  user?: IUser;
}

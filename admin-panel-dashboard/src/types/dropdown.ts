import { VariantProps } from "class-variance-authority";

import { dropdownStyles } from '@/components/Dropdown/style';

import { IUser } from './common';
export interface IListDropDown {
  name: string;
  href: string;
}

export interface IDropdown
  extends Omit<VariantProps<typeof dropdownStyles>, "">  {
  className?: string;
  user?: IUser;
  listDropDown?: IListDropDown[];
  hasLogOut?: boolean;
}

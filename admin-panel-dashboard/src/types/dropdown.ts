import { type ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

import { dropdownStyles } from '@/components/Dropdown/style';

export interface IUser {
  name: string;
  avatar: string;
  id?: number;
}

export interface IListDropDown {
  name: string;
  href: string;
}

export interface IDropdown
  extends Omit<ComponentProps<"div">, "size">,
    Omit<VariantProps<typeof dropdownStyles>, "">  {
  user?: IUser;
  listDropDown?: IListDropDown[];
  hasLogOut?: boolean;
}

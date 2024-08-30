import { type ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

import { selectStyles } from '@/components/commons/Select/style';

export interface OptionType {
  option: string;
  value: string;
  id?: number;
}

export interface ISelect
  extends Omit<ComponentProps<"select">, "onChange">,
    Omit<VariantProps<typeof selectStyles>, "iconElement">  {
  options: OptionType[];
  label?: string;
  required?: boolean;
  iconElement?: React.ReactNode;
  errorMessage?: string;
  onChange?: (event: any) => void;
}

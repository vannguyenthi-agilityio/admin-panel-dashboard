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
    Omit<VariantProps<typeof selectStyles>, "onChange">  {
  options: OptionType[];
  label?: string;
  required?: boolean;
  onChange?: (event: any) => void;
}

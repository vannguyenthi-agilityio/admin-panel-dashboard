import { type ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";

import { inputStyles } from '@/components/commons/Input/style';

export interface IInput
  extends Omit<ComponentProps<"input">, "size">,
    Omit<VariantProps<typeof inputStyles>, "hasLeftElement" | "hasRightElement"> {
  borderHide?: boolean;
  label?: string;
  errorMessage?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

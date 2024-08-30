import { type ComponentProps } from "react";
import { VariantProps } from "class-variance-authority";

import { toastStyles } from '@/components/commons/Toast/style';

export enum TOAST_TYPE {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface IToast
  extends Omit<ComponentProps<"div">, "size">,
    Omit<VariantProps<typeof toastStyles>, "iconElement">  {
  toastType?: TOAST_TYPE;
  message?: string;
  title?: string;
  hasIconClose?: boolean;
  iconElement?: React.ReactNode;
}

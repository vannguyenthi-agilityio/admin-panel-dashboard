import { VariantProps } from "class-variance-authority";

import { toastStyles } from '@/components/commons/Toast/style';

export enum TOAST_TYPE {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface IToast
  extends Omit<VariantProps<typeof toastStyles>, "iconElement">  {
  className?: string;
  toastType?: TOAST_TYPE;
  onClose?: () => void;
  message?: string;
  title?: string;
  hasIconClose?: boolean;
  iconElement?: React.ReactNode;
}

import { ReactNode, useState } from "react";

import { Loading, Toast } from "@/components";

export enum TOAST_TYPE {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export const buildToastRenderer = ({ type, message }: ToastProps) => {
  switch (type) {
    case TOAST_TYPE.WARNING:
      return {
        message: message ?? "Warning!",
      };

    case TOAST_TYPE.ERROR:
      return {
        message: message ?? "Error!"
      };

    case TOAST_TYPE.SUCCESS:
    default:
      return {
        message: message ?? "Success!",
      };
  }
};
export interface ToastProps {
  type?: TOAST_TYPE;
  message?: string;
}

type ToastState = ToastProps & { isOpen: boolean };

export type TWithToast<T> = {
  openToast: (toast: ToastProps, callback?: () => void) => void;
} & T;

export const withToast = <T,>(
  Child: (props: TWithToast<T>) => ReactNode,
  enableLoading?: boolean,
) => {
  const RenderToast = (props: T) => {
    const [isLoading, setLoading] = useState(false);
    const [toast, setToast] = useState<ToastState>({
      isOpen: false,
      type: TOAST_TYPE.SUCCESS,
    });

    const closeToast = () => {
      setToast({
        ...toast,
        isOpen: false,
      });
    };

    const openToast = (
      { type = TOAST_TYPE.SUCCESS, message }: ToastProps,
      callback?: () => void,
    ) => {
      const isShowLoading = callback && enableLoading;

      isShowLoading && setLoading(true);

      setToast({ isOpen: true, type, message });

      setTimeout(() => {
        closeToast();
        isShowLoading && setLoading(false);
        callback?.();
      }, 3000);
    };

    const { message } = buildToastRenderer(toast);

    return (
      <>
        {toast.isOpen && (
          <Toast
            message={message}
            onClose={closeToast}
          />
        )}
        {isLoading ? (
          <Loading fillColor="#fff"/>
        ) : (
          <Child {...props} openToast={openToast} />
        )}
      </>
    );
  };

  return RenderToast;
};

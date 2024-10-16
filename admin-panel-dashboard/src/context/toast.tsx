import { TWithToast, ToastProps, withToast } from "@/hocs/withToast";
import { ReactNode, createContext, useContext, useMemo } from "react";

// Constants
import { MESSAGES_ERROR } from '@/constants';

interface IToastContext {
  openToast: (toast: ToastProps, callback?: () => void) => void;
}

const initialToastContext: IToastContext = { openToast: () => {} };

const ToastContext = createContext<IToastContext>(initialToastContext);

const ToastProvider = ({
  children,
  openToast,
}: TWithToast<{
  children: ReactNode;
}>) => {
  const value = useMemo(() => ({ openToast }), [openToast]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

const ToastProviderWithToast = withToast(ToastProvider);
export default ToastProviderWithToast;

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(MESSAGES_ERROR.TOAST_CONTEXT_ERROR);
  }

  return context.openToast;
};


import { memo, forwardRef } from "react";

// Icons
import {
  CheckIcon,
  CloseIcon
} from '@/components/Icons';

// Types
import { IToast } from "@/types";

// Helpers
import { clsxMerge } from '@/helpers';

// Componenets
import { Button } from '@/components';

import { toastStyles } from './style';

const Toast =  forwardRef<HTMLDivElement, IToast>(
  ({ 
    message,
    title = "Well done!",
    className,
    hasIconClose,
    toastType,
    toastSize,
    iconElement = <CheckIcon />,
    onClose,
    ...props }, ref) => (
    <div
      id={`toast-${toastType}`}
      className="flex absolute top-20 right-4 items-start w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
      data-testid="toast"
      {...props}
      ref={ref}
    >
      <div
        className={clsxMerge(
        toastStyles({ toastType, toastSize }),
        className
      )}
      >
        {iconElement}
      </div>
      <div className="flex flex-col">
        <div className="ms-4 text-xl font-medium">{title}</div>
        <div  data-testid="message-toast" className="ms-4 mt-2 text-sm font-normal">{message}</div>
      </div>
      {hasIconClose &&
        <Button
          className="p-0"
          buttonType='transprent'
          leftIcon={<CloseIcon stroke="#000"/>}
          onClick={onClose}
        />
      }
    </div>
  )
);

Toast.displayName = "Toast";
export default memo(Toast);

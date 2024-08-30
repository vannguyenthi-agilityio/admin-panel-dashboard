
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
    onChange,
    ...props }, ref) => (
    <div
      id={`toast-${toastType}`}
      className="flex items-start w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
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
        <div className="ms-4 mt-2 text-sm font-normal">{message}</div>
      </div>
      {hasIconClose &&
        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
          <CloseIcon stroke="#000"/>
        </button>
      }
    </div>
  )
);

Toast.displayName = "Toast";
export default memo(Toast);

import { cva } from 'class-variance-authority';

export const toastStyles = cva(
  'inline-flex items-center justify-center flex-shrink-0 rounded-lg',
  {
    variants: {
      toastType: {
        success: 'text-green-500 bg-green-500',
        warning: 'bg-yellow-500 bg-yellow-500',
        error: 'bg-red-500 border-red-500',
      },
      toastSize: {
        xs: ["h-6", "w-6", "text-xs", "px-2", "py-0"],
        sm: ["h-8", "w-8",  "text-sm", "px-2", "py-2"],
        md: ["h-12", "w-12", "text-md", "px-2", "py-2"],
        lg: ["h-14", "w-14", "text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      toastType: "success",
      toastSize: "sm",
    },
  }
);

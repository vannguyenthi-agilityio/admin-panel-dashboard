import { cva } from 'class-variance-authority';

export const modalStyles = cva(
  'font-primary font-light rounded-xl shadow p-6 w-full transition-all',
  {
    variants: {
      variant: {
        primary: ["bg-white", "text-dark"],
        secondary: ["bg-transparent", "text-darker"],
      },
      size: {
        xs: ["text-xs", "px-4", "py-3"],
        sm: ["text-sm", "px-6", "py-5"],
        md: ["text-md", "px-8", "py-6"],
        lg: ["text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

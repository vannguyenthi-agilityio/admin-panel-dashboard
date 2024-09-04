import { cva } from 'class-variance-authority';

export const dropdownStyles = cva(
  'font-primary font-light text-sm text-white border focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center',
  {
    variants: {
      variant: {
        primary: ["bg-white", "text-dark"],
        secondary: ["bg-transparent", "text-darker"],
      },
      size: {
        xs: ["text-xs", "px-2", "py-0"],
        sm: ["text-sm", "px-2", "py-1.5"],
        md: ["text-md", "px-2", "py-2"],
        lg: ["text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

import { cva } from 'class-variance-authority';

export const notFoundStyles = cva(
  'flex items-center justify-center w-full min-h-[calc(100vh-200px)]',
  {
    variants: {
      variant: {
        primary: ["bg-transparent", "text-red-500"],
        secondary: ["bg-gray-100", "text-darker"],
      },
      size: {
        xs: ["text-xs", "px-2", "py-0"],
        sm: ["text-sm", "px-2", "py-2"],
        md: ["text-md", "px-2", "py-2"],
        lg: ["text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

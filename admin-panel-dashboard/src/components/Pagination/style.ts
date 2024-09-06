import { cva } from 'class-variance-authority';

export const paginationStyles = cva(
  'w-full flex items-senter font-primary font-light text-sm antialiased font-primary flex gap-5 flex-col md:flex-row items-start w-full justify-between p-6 appearance-none cursor-pointer',
  {
    variants: {
      variant: {
        primary: ["bg-transparent", "text-dark"],
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
      size: "sm",
    },
  }
);

import { cva } from 'class-variance-authority';

// Types
import { SIZE_TYPE } from "@/types";

export const paginationStyles = cva(
  'w-full flex flex-wrap sm:flex-nowrap items-center justify-center font-primary font-light text-sm antialiased font-primary flex gap-6 flex-col sm:flex-row items-start w-full justify-between appearance-none cursor-pointer mt-6',
  {
    variants: {
      variant: {
        primary: ["bg-transparent", "text-dark"],
        secondary: ["bg-gray-100", "text-darker"],
      },
      size: {
        xs: ["text-xs", "px-2", "py-0"],
        sm: ["text-sm", "px-0", "py-2"],
        md: ["text-md", "px-2", "py-2"],
        lg: ["text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: SIZE_TYPE.SM,
    },
  }
);

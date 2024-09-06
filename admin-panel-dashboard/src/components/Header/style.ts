import { cva } from 'class-variance-authority';

export const headerStyles = cva(
  'w-full flex align-center gap-2 font-primary font-light text-sm bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 py-2 transition duration-300 ease focus:outline-none appearance-none cursor-pointer',
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

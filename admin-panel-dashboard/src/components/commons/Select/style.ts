import { cva } from 'class-variance-authority';

export const selectStyles = cva(
  'w-full font-primary font-light text-sm bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer',
  {
    variants: {
      variant: {
        primary: ["bg-transparent", "text-dark"],
        secondary: ["bg-gray-100", "text-darker"],
      },
      selectSize: {
        xs: ["h-6", "text-xs", "px-2", "py-0"],
        sm: ["h-10", "text-sm", "px-2", "py-2"],
        md: ["h-12", "text-md", "px-2", "py-2"],
        lg: ["h-14", "text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      variant: "primary",
      selectSize: "sm",
    },
  }
);

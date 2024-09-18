import { cva } from 'class-variance-authority';

export const sidebarStyles = cva(
  'bg-dark antialiased w-[260px] h-full transition-all ease-in',
  {
    variants: {
      isCollapse: {
        false: "translate-x-0 xl:w-[260px]",
        true: "w-[100px] xl:translate-x-0"
      },
      size: {
        xs: ["text-xs", "px-1", "py-2"],
        sm: ["text-sm", "px-4", "py-8"],
        md: ["text-md", "px-4", "py-8"],
        lg: ["text-lg", "px-4", "py-8"],
      },
    },
    defaultVariants: {
      isCollapse: false,
      size: "sm",
    },
  }
);

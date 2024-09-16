import { cva } from 'class-variance-authority';

export const sidebarStyles = cva(
  'bg-dark antialiased w-[260px] z-50 px-4 py-6 fixed top-0 left-0 h-[calc(100vh)] transition-all ease-in',
  {
    variants: {
      isCollapse: {
        false: "translate-x-0 xl:w-[260px] delay-10 duration-300",
        true: "translate-x-[-10rem] xl:translate-x-0 xl:w-[100px] delay-10 duration-300"
      },
      size: {
        xs: ["text-xs", "px-1", "py-0"],
        sm: ["text-sm", "px-4", "py-6"],
        md: ["text-md", "px-4", "py-6"],
        lg: ["text-lg", "px-4", "py-6"],
      },
    },
    defaultVariants: {
      isCollapse: false,
      size: "sm",
    },
  }
);

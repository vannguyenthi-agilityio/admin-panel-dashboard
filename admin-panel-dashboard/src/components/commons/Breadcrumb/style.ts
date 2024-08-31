import { cva } from 'class-variance-authority';

export const breadcrumbStyles = cva(
  'flex px-5 py-3',
  {
    variants: {
      activeLink: {
        true: "text-tertiary",
        false: "text-seldom"
      },
      size: {
        xs: ["text-xs", "px-1", "py-0"],
        sm: ["text-sm", "px-0", "py-2"],
        md: ["text-md", "px-2", "py-2"],
        lg: ["text-lg", "px-2", "py-2"],
      },
    },
    defaultVariants: {
      activeLink: true,
      size: "sm",
    },
  }
);

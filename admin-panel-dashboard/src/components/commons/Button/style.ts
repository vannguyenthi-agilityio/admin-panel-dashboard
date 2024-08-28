import { cva } from 'class-variance-authority';

/**
 * Button styles for the Button component.
 */
export const buttonStyles = cva(
  'flex flex-row gap-x-4 font-primary text-sm uppercase font-medium rounded-lg disabled:cursor-not-allowed items-center justify-center',
  {
    variants: {
      buttonType: {
        primary:
          'bg-transprent text-darker border-greyish hover:bg-greyish',
        secondary:
          'bg-blood text-white border-blood hover:bg-blood',
        warning:
          'bg-yellow-500 text-white border-yellow-500 hover:bg-yellow-600',
        outline:
          'bg-white text-darker hover:bg-greyish border hover:border-greyish border-greyish hover:shadow-md',
        disabled: 'bg-disable text-disable border-disable cursor-not-allowed',
        error: 'bg-red-500 text-white border-red-500 hover:bg-red-600',
        blood: 'bg-white text-blood hover:bg-gray-100 border hover:border-blood border-blood hover:shadow-md',
      },
      size: {
        default: ['text-base'],
        small: ['text-sm'],
        large: ['text-lg'],
        xxl: ['text-2xl'],
      },
      spacing: {
        default: ['py-2', 'px-4'],
        small: ['py-1', 'px-2'],
        large: ['py-3', 'px-6'],
        xxl: ['py-4', 'px-8'],
      },
      rounded: {
        default: 'rounded-md',
        sm: 'rounded-sm',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        xxl: 'rounded-2xl',
        none: 'rounded-none',
        full: 'rounded-full',
      },
    },
    compoundVariants: [
      {
        buttonType: 'outline',
        size: 'small',
        spacing: 'default',
        rounded: 'lg',
      },
    ],
    defaultVariants: {
      buttonType: 'outline',
      size: 'small',
      rounded: 'lg',
      spacing: 'default',
    },
  }
);

import { type ComponentPropsWithRef, ReactNode } from 'react';
import { type VariantProps } from 'class-variance-authority';

// Helpers
import { clsxMerge } from '@/helpers';
import { buttonStyles } from './style';

type ButtonElementProps = ComponentPropsWithRef<'button'>;

export interface ButtonProps
  extends ButtonElementProps,
    VariantProps<typeof buttonStyles> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
}

export default function Button({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsxMerge(
        buttonStyles({ buttonType, size, rounded, spacing }),
        className
      )}
      type="button"
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
}

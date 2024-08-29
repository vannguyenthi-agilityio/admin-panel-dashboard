import { memo } from 'react';

// Helpers
import { clsxMerge } from '@/helpers';

// Types
import { IButton } from "@/types";

import { buttonStyles } from './style';

const Button = memo(({
  className,
  buttonType,
  size,
  rounded,
  label,
  rightIcon,
  spacing,
  leftIcon,
  ...props
}: IButton) => (
  <button
    className={clsxMerge(
      buttonStyles({ buttonType, size, rounded, spacing }),
      className
    )}
    type="button"
    {...props}
  >
    {leftIcon && leftIcon}
    {label && label}
    {rightIcon && rightIcon}
  </button>
));
Button.displayName = "Button";
export default Button;

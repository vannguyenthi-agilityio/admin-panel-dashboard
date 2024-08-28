// Helpers
import { clsxMerge } from '@/helpers';

// Types
import { IButton } from "@/types";

import { buttonStyles } from './style';

const Button = ({
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
    {Boolean(leftIcon) && leftIcon}
    {Boolean(label) && label}
    {Boolean(rightIcon) && rightIcon}
  </button>
);
Button.displayName = "Button";
export default Button;

import { memo, forwardRef } from "react";

// Types
import { IInput } from "@/types";

// Helpers
import { clsxMerge } from '@/helpers';

import { inputStyles } from './style';

const Input = forwardRef<HTMLInputElement, IInput>((
  {
    borderHide,
    className,
    label,
    required,
    leftElement,
    rightElement,
    placeholder,
    errorMessage,
    size = "default",
    ...props
  },
  ref
) => {
  const classNameLabel = required
    ? "text-sm font-medium after:content-['*'] after:text-red-500 after:text-md"
    : "text-sm font-medium";

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id} className={classNameLabel}>
          {label}
        </label>
      )}
      <div className="relative w-full mt-1">
        {leftElement && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-dark-gray">
            {leftElement}
          </div>
        )}
        <input
          className={clsxMerge(
            inputStyles({
              hasBorder: !borderHide,
              hasLabel: !!label,
              hasLeftElement: !!leftElement,
              size
            }),
            className
          )}
          placeholder={placeholder ?? " "}
          ref={ref}
          {...props}
        />

        {rightElement && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-dark-gray">
            {rightElement}
          </div>
        )}
      </div>
      {errorMessage && (
        <p className="pt-1 text-xs text-red-500 dark:text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
});

Input.displayName = "Input";
export default memo(Input);

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
    contentPrefix,
    size = "default",
    ...props
  },
  ref
) => {
  const classNameLabel = required
    ? "text-sm font-medium after:content-['*'] after:text-red-500 after:text-md"
    : "text-sm font-medium";

  return (
    <>
      {label && (
        <label htmlFor={props.id} className={classNameLabel}>
          {label}
        </label>
      )}
      <div className="relative w-full sm:w-auto min-w-[320px]">
        {leftElement && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-dark-gray w-[40px]">
            {leftElement}
          </div>
        )}
        {contentPrefix && (
          <span className={`absolute top-[12px] text-xs min-h-[30px] text-darker ${leftElement ? 'left-[35px]' : 'left-[10px]'}`}>
            {contentPrefix}
          </span>
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
    </>
  );
});

Input.displayName = "Input";
export default memo(Input);

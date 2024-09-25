
import { memo, forwardRef } from "react";

import {
  ArrowDownIcon,
} from '@/components/Icons';

import { MONTHS } from "@/constants";

// Types
import { ISelect, OptionType } from "@/types";

// Helpers
import { clsxMerge } from '@/helpers';

import { selectStyles } from './style';

const Select =  forwardRef<HTMLSelectElement, ISelect>((
  { required,
    label,
    name,
    options = MONTHS,
    className,
    errorMessage,
    variant,
    selectSize,
    iconElement = <ArrowDownIcon />,
    onChange,
    onBlur,
    ...props }, ref) => {
  const classNameLabel = `text-grey text-sm font-medium capitalize ${required ? "after:content-['*'] after:text-red-500 after:text-md" : ""}`;
  return (
    <div className="w-full">
     {label && <label className={clsxMerge(classNameLabel)}>{label}</label>}
      <div className="relative">
        <select
          className={clsxMerge(
            selectStyles({ variant, selectSize }),
            className
          )}
          id={name}
          data-testid={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        >
          {options.map((item: OptionType) => (
            <option
              key={item.value}
              value={item.value.toString()}
              data-testid={`option-${item.value}`}
              className="cursor-pointer"
            >
              {item.option}
            </option>
            ))}
        </select>
        {iconElement && (
          <div className="ml-1 absolute top-[18px] right-3 text-slate-700">
            {iconElement}
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

Select.displayName = "Select";
export default memo(Select);

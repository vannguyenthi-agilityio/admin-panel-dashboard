
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
    variant,
    selectSize,
    onChange,
    ...props }, ref) => {
  const classNameLabel = required
    ? "text-grey text-sm dark:text-lighter capitalize after:content-['*'] after:text-red-500 after:text-md"
    : "text-grey text-sm dark:text-lighter capitalize";
  return (
    <div className="w-full">
     {label && <label className={classNameLabel}>{label}</label>}
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
          {...props}
        >
          {options.map((item: OptionType) => (
            <option
              key={item.value}
              value={item.value.toString()}
              data-testid={`month-${item.value}`}
              className="cursor-pointer"
            >
              {item.option}
            </option>
            ))}
        </select>
        <ArrowDownIcon  className="ml-1 absolute top-[18px] right-3 text-slate-700"/>
    </div>
  </div>
  );
});

Select.displayName = "Select";
export default memo(Select);

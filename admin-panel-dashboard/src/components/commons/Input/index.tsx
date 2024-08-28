import { cva, cx, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";
import { Label } from "../Label";

// Floating label styles require the 'peer' variant on the input.
const inputStyles = cva(
  "peer block w-full flex-1 appearance-none rounded-[10px] border-gray-light bg-white px-4 text-base text-black placeholder-text-gray focus:border-blue-50 focus:ring-blue-500 hover:enabled:border-dark-gray aria-invalid:!border-red disabled:text-gray disabled:cursor-not-allowed",
  {
    defaultVariants: {
      hasBorder: true,
      hasLabel: false,
      hasLeftElement: false
    },
    variants: {
      hasBorder: {
        true: "border",
        false: "focus:outline-[#E7EBED] h-[33px]"
      },
      hasLabel: {
        false: "",
        true: "placeholder:opacity-0 focus:placeholder:opacity-100"
      },
      hasLeftElement: {
        false: "",
        true: "pl-9"
      },
      size: {
        sm: "py-[7px]",
        default: "py-[13px]"
      }
    }
  }
);

export interface InputProps
  extends Omit<ComponentProps<"input">, "size">,
    Omit<VariantProps<typeof inputStyles>, "hasLeftElement"> {
  borderHide?: boolean;
  label?: string;
  leftElement?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    borderHide,
    className,
    label,
    leftElement,
    placeholder,
    size = "default",
    ...props
  },
  ref
) {
  return (
    <div className="relative w-full">
      {!!leftElement && (
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-dark-gray">
          {leftElement}
        </div>
      )}

      <input
        {...props}
        className={cx(
          inputStyles({
            hasBorder: !borderHide,
            hasLabel: !!label,
            hasLeftElement: !!leftElement,
            size
          }),
          className
        )}
        // A placeholder is required to style the floating label, which checks for the presence of a placeholder on the input.
        placeholder={placeholder ?? " "}
        ref={ref}
      />

      {/* Since we're using 'peer' styles, the label must be after the textarea element. */}
      {label && (
        <Label hasLeftElement={!!leftElement} htmlFor={props.id}>
          {label}
        </Label>
      )}
    </div>
  );
});

Input.displayName = "Input";

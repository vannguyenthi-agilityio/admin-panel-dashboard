import { cva } from 'class-variance-authority';

export const inputStyles = cva(
  "peer block w-full flex-1 font-primary text-sm font-light appearance-none rounded-lg border-gray-light bg-white px-2 text-sm text-tertiary placeholder-text-gray focus:outline-none hover:enabled:border-dark-gray aria-invalid:!border-red disabled:text-gray disabled:cursor-not-allowed",
  {
    defaultVariants: {
      hasBorder: true,
      hasLabel: false,
      hasLeftElement: false,
      hasRightElement: false
    },
    variants: {
      hasBorder: {
        true: "border",
        false: "focus:outline-darker h-[33px]"
      },
      hasLabel: {
        false: "",
        true: "placeholder:opacity-0 focus:placeholder:opacity-100"
      },
      hasLeftElement: {
        false: "",
        true: "pl-9"
      },
      hasRightElement: {
        false: "",
        true: "pr-9"
      },
      size: {
        sm: "py-1",
        default: "py-[9px]"
      }
    }
  }
);

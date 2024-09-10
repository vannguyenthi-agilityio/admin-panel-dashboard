export interface IInput {
  id?: string;
  borderHide?: boolean;
  size?: "sm" | "default";
  label?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  required?: boolean;
  'aria-invalid'?: boolean;
  name: string;
  defaultValue?: string;
  type: string;
  className?: string;
  placeholder?: string;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

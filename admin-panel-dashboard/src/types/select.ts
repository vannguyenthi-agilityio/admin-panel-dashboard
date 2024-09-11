export interface OptionType {
  option: string | number;
  value: string;
  id?: number;
}

export interface ISelect {
  id?: string;
  options: OptionType[];
  name?: string;
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  variant?: 'primary' | 'secondary';
  selectSize?: 'xs' | 'sm' | 'md' | 'lg';
  'aria-invalid'?: boolean,
  'aria-selected'?: boolean,
  className?: string;
  required?: boolean;
  disabled?: boolean;
  iconElement?: React.ReactNode;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

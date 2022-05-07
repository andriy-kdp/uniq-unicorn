import { InputProps } from "./../input/input.types";
export type SelectOption = {
  id: string | number;
  value: string | number;
  label: string;
  icon?: React.ReactNode;
};

export type SelectOptions = SelectOption[];

export type SelectProps = {
  options: SelectOptions;
  value: SelectOption | null;
  onSelect: (newValue: SelectOption) => void;
  InputProps?: InputProps;
  optionsPosition?: "bottom" | "top";
};

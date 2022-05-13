import { InputProps } from "./../input/input.types";
import { CSSProperties } from "react";

export type SelectProps = {
  options: SelectOptions;
  value: SelectOption | null;
  onSelect: SelectHandler;
  InputProps?: Omit<InputProps, "value">;
  optionsPosition?: "bottom" | "top";
  borderRadius?: InputProps["borderRadius"];
  fullWidth?: boolean;
  label?: InputProps["label"];
  name?: InputProps["name"];
  maxWidth?: CSSProperties["maxWidth"];
  borderColor?: InputProps["borderColor"];
  noAdornment?: boolean;
};

export type SelectOption = {
  id: string | number;
  value: string | number;
  label: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  abbr?: string;
};

export type SimpleSelectEvent = {
  target: {
    name: InputProps["name"];
    value: SelectOption;
  };
};

export type SelectHandler = (event: SimpleSelectEvent) => void;

export type SelectOptions = SelectOption[];

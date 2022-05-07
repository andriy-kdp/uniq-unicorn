import React from "react";
import { Inp } from "./input.styles";

export type InputProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onIconClick?: React.MouseEvent<HTMLDivElement>;
  placeholder?: string;
  helperText?: string;
  label?: string;
  fullWidth?: boolean;
  startIcon?: React.ReactNode;
  InputNativeProps?: React.InputHTMLAttributes<HTMLInputElement>;
  RootProps?: React.HTMLAttributes<HTMLDivElement>;
  IconRootProps?: React.HTMLAttributes<HTMLDivElement>;
  LabelRootProps?: React.HTMLAttributes<HTMLSpanElement>;
};

export const Input: React.FC<InputProps> = (props) => {
  const {
    onChange,
    value,
    startIcon,
    label,
    placeholder,
    fullWidth,
    helperText,
    InputNativeProps,
    IconRootProps,
    RootProps,
    LabelRootProps: LabelProps,
  } = props;
  return (
    <Inp.Body fullWidth={fullWidth} {...RootProps}>
      {label && <Inp.Input.Label {...LabelProps}>{label}</Inp.Input.Label>}
      <Inp.Container>
        {startIcon && (
          <Inp.Icon.Container {...IconRootProps}>
            {startIcon}
          </Inp.Icon.Container>
        )}
        <Inp.Input.Main
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...InputNativeProps}
        />
      </Inp.Container>
      {helperText && <Inp.Input.HelperText>{helperText}</Inp.Input.HelperText>}
    </Inp.Body>
  );
};

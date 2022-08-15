import React, { PropsWithChildren } from "react";
import { Inp } from "./input.styles";
import { InputProps } from "./input.types";

export const Input: React.FC<PropsWithChildren<InputProps>> = (props) => {
  const {
    onChange,
    onStartIconClick: onIconClick,
    value,
    startIcon,
    label,
    placeholder,
    fullWidth,
    helperText,
    InputNativeProps,
    IconRootProps,
    RootProps,
    LabelRootProps,
    endIcon,
    _select,
    borderRadius,
    borderColor,
    name,
    error,
  } = props;
  return (
    <Inp.Body fullWidth={fullWidth} {...RootProps}>
      {label && <Inp.Input.Label {...LabelRootProps}>{label}</Inp.Input.Label>}
      <Inp.Root borderRadius={borderRadius} borderColor={borderColor} error={error}>
        {startIcon && (
          <Inp.Icon.Root onClick={onIconClick} {...IconRootProps}>
            {startIcon}
          </Inp.Icon.Root>
        )}
        <Inp.Input.Input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          _select={_select}
          startIcon={startIcon}
          {...InputNativeProps}
        />
        {endIcon && (
          <Inp.Icon.Root onClick={onIconClick} {...IconRootProps}>
            {endIcon}
          </Inp.Icon.Root>
        )}
      </Inp.Root>
      {Boolean(helperText) && <Inp.Input.HelperText error={error}>{helperText}</Inp.Input.HelperText>}
    </Inp.Body>
  );
};

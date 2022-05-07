import React, { PropsWithChildren } from "react";
import { Inp } from "./input.styles";
import { InputProps } from "./input.types";

export const Input: React.FC<PropsWithChildren<InputProps>> = (props) => {
  const {
    onChange,
    onIconClick,
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
    _select,
  } = props;
  return (
    <Inp.Body fullWidth={fullWidth} {...RootProps}>
      {/* {children && childrenPosition === "before" && children} */}
      {label && <Inp.Input.Label {...LabelRootProps}>{label}</Inp.Input.Label>}
      <Inp.Root>
        {startIcon && (
          <Inp.Icon.Root onClick={onIconClick} {...IconRootProps}>
            {startIcon}
          </Inp.Icon.Root>
        )}
        <Inp.Input.Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          _select={_select}
          startIcon={startIcon}
          {...InputNativeProps}
        />
      </Inp.Root>
      {helperText && <Inp.Input.HelperText>{helperText}</Inp.Input.HelperText>}
      {/* {children && childrenPosition === "before" && children} */}
    </Inp.Body>
  );
};

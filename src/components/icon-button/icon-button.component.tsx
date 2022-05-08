import React, { PropsWithChildren } from "react";
import { IconButtonRoot } from "./icon-button.styles";
import { IconButtonProps } from "./icon-button.types";

export const IconButton: React.FC<PropsWithChildren<IconButtonProps>> = (
  props
): JSX.Element => {
  const { children, ...rest } = props;
  return <IconButtonRoot {...rest}>{children}</IconButtonRoot>;
};

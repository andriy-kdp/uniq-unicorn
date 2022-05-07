import React, { PropsWithChildren } from "react";
import { ButtonContainer } from "./buton.styles";
import { ButtonProps } from "./button.types";

export const Button: React.FC<PropsWithChildren<ButtonProps>> = (props) => {
  const { borderRadius, children, onClick = () => {}, selected } = props;
  return (
    <ButtonContainer
      onClick={onClick}
      borderRadius={borderRadius}
      selected={selected}
    >
      {children}
    </ButtonContainer>
  );
};

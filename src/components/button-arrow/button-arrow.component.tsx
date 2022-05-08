import { ButtonArrowContainer, ButtonArrowText } from "./button-arrow.styles";
import React, { PropsWithChildren } from "react";

import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow_link.svg";
import { ButtonArrowProps } from "./button-arrow.types";

export const ButtonArrow: React.FC<PropsWithChildren<ButtonArrowProps>> = (
  props
): JSX.Element => {
  const { direction = "right", children, onClick } = props;
  return (
    <ButtonArrowContainer direction={direction} onClick={onClick}>
      <ButtonArrowText>{children}</ButtonArrowText>
      <ArrowIcon />
    </ButtonArrowContainer>
  );
};

import { BgGradientMain } from "./bg-gradient.styles";
import React from "react";
import { BgGradientType } from "./bg-gradient.types";

export const BgGradient: React.FC<BgGradientType> = (props): JSX.Element => {
  const { imgSrc, sx } = props;
  return <BgGradientMain imgSrc={imgSrc} sx={sx} />;
};

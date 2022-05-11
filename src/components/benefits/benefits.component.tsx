import {
  BenefitIconContainer,
  BenefitItemContainer,
  BenefitTitle,
  BenefitsContainer,
  BenefitsDescription,
} from "./benefits.styles";

import { BenefitsProps } from "./benefits.types";
import React from "react";

export const Benefits: React.FC<BenefitsProps> = (props): JSX.Element => {
  const { items, secondary } = props;
  return (
    <BenefitsContainer secondary={secondary}>
      {items.map((benefit, idx) => (
        <BenefitItemContainer key={`benefit-item-${idx}`}>
          <BenefitIconContainer>{benefit.icon}</BenefitIconContainer>
          <BenefitTitle>{benefit.title}</BenefitTitle>
          <BenefitsDescription>{benefit.description}</BenefitsDescription>
        </BenefitItemContainer>
      ))}
    </BenefitsContainer>
  );
};

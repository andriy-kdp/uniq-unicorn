import {
  BenefitIconContainer,
  BenefitItemContainer,
  BenefitTitle,
  BenefitsContainer,
  BenefitsDescription,
} from "./benefits.styles";

import { BenefitItemsType } from "./benefits.types";
import { ReactComponent as FastIcon } from "../../assets/icons/benefits/fast.svg";
import { ReactComponent as GlobalIcon } from "../../assets/icons/benefits/global.svg";
import React from "react";
import { ReactComponent as SafeIcon } from "../../assets/icons/benefits/safe.svg";

const benefitsList: BenefitItemsType = [
  {
    title: "Safe",
    description: "A financial institution Pci dss 3.2 certified",
    icon: <SafeIcon />,
  },
  {
    title: "Fast",
    description: "Cross border transfers Faster than your current bank",
    icon: <FastIcon />,
  },
  {
    title: "Global",
    description: "Account opening for 180 countries in 28 currencies",
    icon: <GlobalIcon />,
  },
];
export const Benefits: React.FC = (): JSX.Element => {
  return (
    <BenefitsContainer>
      {benefitsList.map((benefit) => (
        <BenefitItemContainer>
          <BenefitIconContainer>{benefit.icon}</BenefitIconContainer>
          <BenefitTitle>{benefit.title}</BenefitTitle>
          <BenefitsDescription>{benefit.description}</BenefitsDescription>
        </BenefitItemContainer>
      ))}
    </BenefitsContainer>
  );
};

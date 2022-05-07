import { ReactComponent as AccountIcon } from "../../assets/icons/benefits-crypto-currency/account.svg";
import { BenefitItemsType } from "../../components/benefits/benefits.types";
import { Benefits } from "../../components/benefits/benefits.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import { ReactComponent as ChartIcon } from "../../assets/icons/benefits-crypto-currency/chart.svg";
import { ReactComponent as ConversionIcon } from "../../assets/icons/benefits-crypto-currency/conversion.svg";
import { MainHeader } from "../main/main.styles";
import { ReactComponent as MedalIcon } from "../../assets/icons/benefits-crypto-currency/medal.svg";
import { ReactComponent as PlanetIcon } from "../../assets/icons/benefits-crypto-currency/planet.svg";
import React from "react";
import { Section } from "../../components/section/section.component";
import { ReactComponent as SuccessIcon } from "../../assets/icons/benefits-crypto-currency/success.svg";
import { Wrap } from "../../components/wrap/wrap.component";
import PhonesBg from "../../assets/images/backgrounds/crypto-currency-page/phones.png";
import { MobileAppContainer, MobileAppTitle } from "./crypto-currency.styles";
import { SlideSection } from "../../components/silde-section/slide-section.component";
const benefitsItems: BenefitItemsType = [
  {
    title: "High-value trading",
    description: "Cryptocurrency transactions with no maximum limit",
    icon: <ChartIcon />,
  },
  {
    title: "Instant conversion",
    description: "Cryptocurrency to 28 fiat currencies and vice versa",
    icon: <ConversionIcon />,
  },
  {
    title: "Instant account setup",
    description: "For private and business clients from 180 countries",
    icon: <AccountIcon />,
  },
  {
    title: "Perfect solution",
    description:
      "For exchanges or other crypto businesses to open bank accounts",
    icon: <MedalIcon />,
  },
  {
    title: "International wires",
    description:
      "Bank wire transfers to third parties worldwide, fast and secure",
    icon: <PlanetIcon />,
  },
  {
    title: "Ideal for any company",
    description: "To sell your crypto assets and cash out after an ICO",
    icon: <SuccessIcon />,
  },
];

export const CryptoCurrencyPage: React.FC = (): JSX.Element => {
  return (
    <>
      <SlideSection
        bgImage=""
        title="Black Banx crypto currency banking"
        button={{
          title: "Open Account",
          onClick: () => {},
        }}
      />

      <Section content>
        <Benefits items={benefitsItems} secondary />
      </Section>
      <Section content>
        <MobileAppContainer>
          <MobileAppTitle>Your bitcoin wallet in our App</MobileAppTitle>
          <img src={PhonesBg} alt="IPhone" />
          <ButtonArrow>Download App</ButtonArrow>
        </MobileAppContainer>
      </Section>
    </>
  );
};

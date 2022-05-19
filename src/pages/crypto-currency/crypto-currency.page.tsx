import { ReactComponent as AccountIcon } from "../../assets/icons/benefits-crypto-currency/account.svg";
import { BenefitItemsType } from "../../components/benefits/benefits.types";
import { Benefits } from "../../components/benefits/benefits.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import { ReactComponent as ChartIcon } from "../../assets/icons/benefits-crypto-currency/chart.svg";
import { ReactComponent as ConversionIcon } from "../../assets/icons/benefits-crypto-currency/conversion.svg";
import { ReactComponent as MedalIcon } from "../../assets/icons/benefits-crypto-currency/medal.svg";
import { ReactComponent as PlanetIcon } from "../../assets/icons/benefits-crypto-currency/planet.svg";
import React from "react";
import { Section } from "../../components/section/section.component";
import { ReactComponent as SuccessIcon } from "../../assets/icons/benefits-crypto-currency/success.svg";
import PhonesBg from "../../assets/backgrounds/crypto-currency-page/phones.png";
import { CryptoBenefitsTitle, MobileAppContainer, MobileAppImage, MobileAppTitle } from "./crypto-currency.styles";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MainBg from "../../assets/backgrounds/crypto-currency-page/crypto_cur_bg.png";
import { useMediaQuery } from "../../utils/use-media-query";
import { useNavigate } from "react-router-dom";
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
    description: "For exchanges or other crypto businesses to open bank accounts",
    icon: <MedalIcon />,
  },
  {
    title: "International wires",
    description: "Bank wire transfers to third parties worldwide, fast and secure",
    icon: <PlanetIcon />,
  },
  {
    title: "Ideal for any company",
    description: "To sell your crypto assets and cash out after an ICO",
    icon: <SuccessIcon />,
  },
];

export const CryptoCurrencyPage: React.FC = (): JSX.Element => {
  const isMobile = useMediaQuery("sm");
  const nav = useNavigate();
  const handleClick = () => {
    nav("/auth/register");
  };

  const handleClickAppDownloadLink = () => {
    window.open("about:blank", "noopener norefferer");
  };
  return (
    <>
      <SlideSection
        mobile={isMobile}
        bgImage={MainBg}
        title="Black Banx crypto currency banking"
        titleWidth={!isMobile ? "50%" : "100%"}
        BgImageStyles={
          isMobile
            ? { backgroundRepeat: "no-repeat", backgroundPosition: "88%", height: "57.8rem", backgroundSize: "130rem" }
            : {
                backgroundPosition: "100%",
                backgroundSize: "100%",
              }
        }
        button={{
          title: "Open Account",
          onClick: handleClick,
        }}
      />

      <Section mainContent>
        <CryptoBenefitsTitle>Crypto trading made easier</CryptoBenefitsTitle>
        <Benefits items={benefitsItems} secondary vertical={isMobile} centered={isMobile} />
      </Section>
      <Section mainContent m={!isMobile ? "13rem auto 26rem" : "16rem auto 11rem !important"}>
        <MobileAppContainer>
          <MobileAppTitle>Your bitcoin wallet in our App</MobileAppTitle>
          <MobileAppImage src={PhonesBg} alt="IPhone" />
          <ButtonArrow onClick={handleClickAppDownloadLink}>Download App</ButtonArrow>
        </MobileAppContainer>
      </Section>
    </>
  );
};

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
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const CryptoCurrencyPage: React.FC = (): JSX.Element => {
  const { accountsCryptoCurrency } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  const nav = useNavigate();
  const handleClick = () => {
    nav("/auth/register");
  };

  const handleClickAppDownloadLink = () => {
    window.open("about:blank", "noopener norefferer");
  };

  const benefitsItems: BenefitItemsType = [
    {
      title: accountsCryptoCurrency.acnt_crypt_subhd_lnone_left,
      description: accountsCryptoCurrency.acnt_crypt_subhd_lnone_left_para,
      icon: <ChartIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_subhd_lnone_right,
      description: accountsCryptoCurrency.acnt_crypt_subhd_lnone_right_para,
      icon: <ConversionIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_subhd_lnone_mid,
      description: accountsCryptoCurrency.acnt_crypt_subhd_lnone_mid_para,
      icon: <AccountIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_subhd_lntwo_left,
      description: accountsCryptoCurrency.acnt_crypt_subhd_lntwo_left_para,
      icon: <MedalIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_subhd_lntwo_mid,
      description: accountsCryptoCurrency.acnt_crypt_subhd_lntwo_mid_para,
      icon: <PlanetIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_subhd_lntwo_right,
      description: accountsCryptoCurrency.acnt_crypt_subhd_lntwo_right_para,
      icon: <SuccessIcon />,
    },
  ];
  return (
    <>
      <SlideSection
        mobile={isMobile}
        bgImage={MainBg}
        title={accountsCryptoCurrency.acnt_crypt_headOne}
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
          title: accountsCryptoCurrency.acnt_crypt_acnt_opnlink_text,
          onClick: handleClick,
        }}
      />

      <Section mainContent>
        <CryptoBenefitsTitle>{accountsCryptoCurrency.acnt_crypt_headtwo}</CryptoBenefitsTitle>
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

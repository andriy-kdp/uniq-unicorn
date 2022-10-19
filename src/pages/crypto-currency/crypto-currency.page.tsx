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
    window.open(accountsCryptoCurrency.acnt_crypt_sectiontwo_txttwo_link, "noopener norefferer");
  };

  const benefitsItems: BenefitItemsType = [
    {
      title: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_colleft_hdone,
      description: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_colleft_txtone,
      icon: <ChartIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collmid_hdone,
      description: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collmid_txtone,
      icon: <ConversionIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collright_hdone,
      description: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collright_txtone,
      icon: <AccountIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_colleft_hdtwo,
      description: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_colleft_txttwo,
      icon: <MedalIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collmid_hdtwo,
      description: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collmid_txttwo,
      icon: <PlanetIcon />,
    },
    {
      title: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collright_hdtwo,
      description: accountsCryptoCurrency.acnt_crypt_sectionone_tbl_collright_txttwo,
      icon: <SuccessIcon />,
    },
  ];
  return (
    <>
      <SlideSection
        mobile={isMobile}
        bgImage={MainBg}
        title={accountsCryptoCurrency.acnt_crypt_mainhead}
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
          title: "Open account",
          onClick: handleClick,
        }}
      />

      <Section mainContent>
        <CryptoBenefitsTitle>{accountsCryptoCurrency.acnt_crypt_sectionone}</CryptoBenefitsTitle>
        <Benefits items={benefitsItems} secondary vertical={isMobile} centered={isMobile} />
      </Section>
      <Section mainContent m={!isMobile ? "13rem auto 26rem" : "16rem auto 11rem !important"}>
        <MobileAppContainer>
          <MobileAppTitle>{accountsCryptoCurrency.acnt_crypt_sectiontwo_txtone}</MobileAppTitle>
          <MobileAppImage src={PhonesBg} alt="IPhone" />
          <ButtonArrow onClick={handleClickAppDownloadLink}>
            {accountsCryptoCurrency.acnt_crypt_sectiontwo_txttwo}
          </ButtonArrow>
        </MobileAppContainer>
      </Section>
    </>
  );
};

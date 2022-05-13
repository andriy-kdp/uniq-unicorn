import React from "react";
import { BenefitItemsType } from "../../components/benefits/benefits.types";
import { Benefits } from "../../components/benefits/benefits.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import MainBg from "../../assets/images/backgrounds/home-page/main_bg.png";
import MapImage from "../../assets/images/backgrounds/home-page/map_image.png";
import MockVideo from "../../assets/images/backgrounds/home-page/mock_video.jpg";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { ReactComponent as FastIcon } from "../../assets/icons/benefits-main/fast.svg";
import { ReactComponent as GlobalIcon } from "../../assets/icons/benefits-main/global.svg";
import { ReactComponent as SafeIcon } from "../../assets/icons/benefits-main/safe.svg";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import SmartMockupBg from "../../assets/images/backgrounds/home-page/smart-mockup.png";
import { DownloadAppHeader } from "./main.styles";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../utils/use-media-query";
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
export const MainPage: React.FC = (): JSX.Element => {
  const nav = useNavigate();
  const isMobile = useMediaQuery("xs");
  const handleClickDownloadApp = () => {
    window.open("about:blank", "noopener norefferer");
  };

  const handleClickRegister = () => {
    nav("/auth/register");
  };

  return (
    <>
      <SlideSection
        bgImage={MainBg}
        m={"4rem auto 0"}
        button={{
          title: "Get started",
          onClick: handleClickRegister,
        }}
        title={"Private or Business accounts set up in minutes"}
        mobile={isMobile}
      />
      <Section mainContent m={isMobile ? "10.5rem auto 0" : "auto"}>
        <Benefits items={benefitsList} vertical={isMobile} />
      </Section>

      <Section mainContent m={"16rem auto 0"}>
        <img src={MockVideo} alt="Video here" style={{ width: "100%" }} />
      </Section>

      <Section mainContent m={"16rem auto 0"}>
        <Wrap sx={{ textTransform: "uppercase" }}>
          <h2>Open Accounts, Send and Receive Payments in 28 currencies</h2>
        </Wrap>
        {isMobile && (
          <Wrap sx={{ width: "100%" }}>
            <img
              src={MapImage}
              alt={"Map"}
              style={{ position: "relative", width: "100%" }}
            />
          </Wrap>
        )}
        <Wrap sx={{ marginLeft: "auto" }}>
          <ButtonArrow onClick={handleClickRegister}>Open Account</ButtonArrow>
        </Wrap>
      </Section>
      {!isMobile && (
        <Section mainContent m={"16rem auto 12rem"}>
          <img
            src={SmartMockupBg}
            alt={"Download mobile app"}
            style={{ position: "relative", width: "100%" }}
          />
          <Wrap
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              maxWidth: !isMobile ? "55%" : "100%",
              position: "absolute",
              justifyContent: "space-between",
              padding: !isMobile ? "4.7rem 9.2rem" : "2rem",
            }}
          >
            <DownloadAppHeader>
              Download Black Banx App to have all your finances in your pocket
            </DownloadAppHeader>
            <ButtonArrow onClick={handleClickDownloadApp}>
              Download the App
            </ButtonArrow>
          </Wrap>
        </Section>
      )}
    </>
  );
};

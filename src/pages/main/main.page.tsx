import { BenefitItemsType } from "../../components/benefits/benefits.types";
import { Benefits } from "../../components/benefits/benefits.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import MainBg from "../../assets/images/backgrounds/home-page/main_bg.png";
import { ReactComponent as MapImage } from "../../assets/images/backgrounds/home-page/map_base_markers.svg";
import MockVideo from "../../assets/images/backgrounds/home-page/mock_video.jpg";
import React, { MouseEventHandler } from "react";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { ReactComponent as FastIcon } from "../../assets/icons/benefits-main/fast.svg";
import { ReactComponent as GlobalIcon } from "../../assets/icons/benefits-main/global.svg";
import { ReactComponent as SafeIcon } from "../../assets/icons/benefits-main/safe.svg";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import SmartMockupBg from "../../assets/images/backgrounds/home-page/smart-mockup.png";
import { DownloadAppHeader } from "./main.styles";
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
  const handleClickDownloadApp = () => {
    window.open("about:blank", "noopener norefferer");
  };
  return (
    <>
      <SlideSection
        bgImage={MainBg}
        m={"4rem auto 0"}
        button={{
          title: "Get started",
          onClick: () => {},
        }}
        title={"Private or Business accounts set up in minutes"}
      />
      <Section mainContent m={"10.5rem auto 0"}>
        <Benefits items={benefitsList} />
      </Section>

      <Section mainContent m={"16rem auto 0"}>
        <img src={MockVideo} alt="Video here" style={{ width: "100%" }} />
      </Section>

      <Section mainContent m={"16rem auto 0"}>
        <Wrap sx={{ textTransform: "uppercase" }}>
          <h2>Open Accounts, Send and Receive Payments in 28 currencies</h2>
        </Wrap>
        <MapImage />
        <Wrap sx={{ marginLeft: "auto" }}>
          <ButtonArrow>Open Account</ButtonArrow>
        </Wrap>
      </Section>

      <Section mainContent m={"16rem auto 12rem"}>
        <img src={SmartMockupBg} alt={"Download mobile app"} />
        <Wrap
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxWidth: "55%",
            position: "absolute",
            justifyContent: "space-between",
            padding: "4.7rem 9.2rem",
          }}
        >
          <DownloadAppHeader>Download Black Banx App to have all your finances in your pocket</DownloadAppHeader>
          <ButtonArrow onClick={handleClickDownloadApp}>Download the App</ButtonArrow>
        </Wrap>
      </Section>
    </>
  );
};

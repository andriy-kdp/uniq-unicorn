import { BenefitItemsType } from "../../components/benefits/benefits.types";
import { Benefits } from "../../components/benefits/benefits.component";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import MainBg from "../../assets/images/backgrounds/home-page/main_bg.png";
import { MainHeader } from "./main.styles";
import { ReactComponent as MapImage } from "../../assets/images/backgrounds/home-page/map_base_markers.svg";
import MockVideo from "../../assets/images/backgrounds/home-page/mock_video.jpg";
import React from "react";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
import { ReactComponent as FastIcon } from "../../assets/icons/benefits-main/fast.svg";
import { ReactComponent as GlobalIcon } from "../../assets/icons/benefits-main/global.svg";
import { ReactComponent as SafeIcon } from "../../assets/icons/benefits-main/safe.svg";
import { SlideSection } from "../../components/silde-section/slide-section.component";

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
  return (
    <>
      <SlideSection
        bgImage={MainBg}
        button={{
          title: "Get started",
          onClick: () => {},
        }}
        title={"Private or Business accounts set up in minutes"}
      />
      <Section content>
        <Benefits items={benefitsList} />
      </Section>

      <Section content>
        <img src={MockVideo} alt="Video here" style={{ width: "100%" }} />
      </Section>

      <Section content>
        <Wrap sx={{ textTransform: "uppercase" }}>
          <h2>Open Accounts, Send and Receive Payments in 28 currencies</h2>
        </Wrap>
        <MapImage />
        <Wrap sx={{ marginLeft: "auto" }}>
          <ButtonArrow>Open Account</ButtonArrow>
        </Wrap>
      </Section>
    </>
  );
};

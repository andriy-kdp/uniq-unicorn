import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { ConductTitle, ConductDescription } from "./code-of-conduct.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const ConductPage = () => {
  const { aboutUsMission } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={aboutUsMission.abtus_misn_headOne}
        bgVariant={"gradient"}
        justify={"center"}
        titleAlign={"center"}
        titleWidth={"60%"}
        BgImageStyles={
          isMobile
            ? {
                backgroundRepeat: "no-repeat",
                backgroundPosition: "60%",
              }
            : {
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }
        }
      />
      <Section mainContent m={"9rem auto 19rem"}>
        <ConductTitle>{aboutUsMission.abtus_misn_subhead}</ConductTitle>
        <ConductDescription>{aboutUsMission.abtus_misn_paraOne}</ConductDescription>
        <ConductDescription>{aboutUsMission.abtus_misn_paraTwo}</ConductDescription>
        <ConductDescription>
          {aboutUsMission.abtus_misn_paraThree} <br /> {aboutUsMission.abtus_misn_paraFour}
        </ConductDescription>
        <ConductDescription>{aboutUsMission.abtus_misn_paraFive}</ConductDescription>
      </Section>
    </>
  );
};

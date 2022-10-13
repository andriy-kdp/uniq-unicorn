import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { CultureDescription, CultureMainTitle, CultureSubTitle, CultureTitle } from "./culture.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const CulturePage = () => {
  const { culture } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={"BLACK BANX CULTURE"}
        bgVariant={"gradient"}
        justify={"center"}
        titleAlign={"center"}
        titleWidth={"90%"}
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
        <CultureMainTitle>{culture.abtus_cult_mainhead}</CultureMainTitle>
        <CultureDescription>{culture.abtus_cult_mainhead_paraone}</CultureDescription>
        <CultureDescription>{culture.abtus_cult_mainhead_paratwo}</CultureDescription>
        <CultureDescription>{culture.abtus_cult_mainhead_parathree}</CultureDescription>
        <CultureDescription>{culture.abtus_cult_mainhead_parafour}</CultureDescription>
        <CultureTitle>{culture.abtus_cult_headone}</CultureTitle>
        <CultureDescription>
          <CultureSubTitle>{culture.abtus_cult_headone_subheadone}</CultureSubTitle>
          <br /> {culture.abtus_cult_headone_subheadone_paraone}
        </CultureDescription>
        <CultureDescription>
          <CultureSubTitle>{culture.abtus_cult_headone_subheadtwo}</CultureSubTitle>
          <br /> {culture.abtus_cult_headone_subheadtwo_paraone}
        </CultureDescription>
        <CultureDescription>
          <CultureSubTitle>{culture.abtus_cult_headone_subheadthree}</CultureSubTitle>
          <br /> {culture.abtus_cult_headone_subheadtwo_parathree}
        </CultureDescription>
        <CultureDescription>
          <CultureSubTitle>{culture.abtus_cult_headone_subheadfour}</CultureSubTitle>
          <br /> {culture.abtus_cult_headone_subheadtwo_parafour}
        </CultureDescription>
      </Section>
    </>
  );
};

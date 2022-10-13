import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { RiskDescription, RiskMainTitle, RiskSubTitle } from "./r-management.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const RiskManagementPage = () => {
  const { riskManagement } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={"BLACK BANX RISK MANAGEMENT"}
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
        <RiskMainTitle>{riskManagement.abtus_rism_mainhead}</RiskMainTitle>
        <RiskDescription>{riskManagement.abtus_rism_mainhead_paraone}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headone}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headone_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headone_paratwo}</RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headone_parathree}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headtwo}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headtwo_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headtwo_paratwo}</RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headtwo_parathree}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headthree}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headthree_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headthree_paratwo}</RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headthree_parathree}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headfour}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headfour_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headfour_paratwo}</RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headfour_parathree}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headfive}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headfive_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headfive_paratwo}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headsix}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headsix_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headsix_paratwo}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headseven}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headseven_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headseven_paratwo}</RiskDescription>
        <RiskDescription>
          <RiskSubTitle>{riskManagement.abtus_rism_headeight}</RiskSubTitle>
          <br /> {riskManagement.abtus_rism_headeight_paraone}
        </RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headeight_paratwo}</RiskDescription>
        <RiskDescription>{riskManagement.abtus_rism_headeight_parathree}</RiskDescription>
      </Section>
    </>
  );
};

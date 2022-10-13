import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import {
  SustainabilityDescription,
  SustainabilityMainTitle,
  SustainabilityMiniTitle,
  SustainabilitySubTitle,
  SustainabilityTabBrightTitle,
  SustainabilityTabMainBlock,
  SustainabilityTabSecondaryBlock,
  SustainabilityTabTitle,
  SustainabilityTitle,
} from "./sustainability.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { Wrap } from "../../components/wrap/wrap.component";

export const SustainabilityPage = () => {
  const { sustainabilityCareers } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={"BLACK BANX SUSTAINABILITY"}
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
        <SustainabilityMainTitle>{sustainabilityCareers.abtus_sust_mainhead}</SustainabilityMainTitle>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headone}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headone_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headone_paratwo}</SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headone_subheadone}</SustainabilitySubTitle>
          {sustainabilityCareers.abtus_sust_headone_subheadone_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headone_subheadtwo}</SustainabilitySubTitle>
          {sustainabilityCareers.abtus_sust_headone_subheadtwo_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headone_subheadthree}</SustainabilitySubTitle>
          {sustainabilityCareers.abtus_sust_headone_subheadtwo_parathree}
        </SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headone_parathree}</SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headone_parafour}</SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headone_parafive}</SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headone_parasix}</SustainabilityDescription>
        <SustainabilityTitle>{sustainabilityCareers.abtus_sust_headtwo}</SustainabilityTitle>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headtwo_paraone}</SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headtwo_paratwo}</SustainabilityDescription>
        <Wrap sx={{ maxWidth: "75rem", margin: "5rem auto" }}>
          <SustainabilityTabTitle>{sustainabilityCareers.abtus_sust_headtwo_columnhead_one}</SustainabilityTabTitle>
          <SustainabilityTabMainBlock>
            {sustainabilityCareers.abtus_sust_headtwo_columnheadtxt_one}
          </SustainabilityTabMainBlock>
          <SustainabilityTabSecondaryBlock>
            {sustainabilityCareers.abtus_sust_headtwo_columnheadtxt_two}
          </SustainabilityTabSecondaryBlock>
          <SustainabilityTabMainBlock>
            {sustainabilityCareers.abtus_sust_headtwo_columnheadtxt_three}
          </SustainabilityTabMainBlock>
          <SustainabilityTabSecondaryBlock>
            {sustainabilityCareers.abtus_sust_headtwo_columnheadtxt_four}
          </SustainabilityTabSecondaryBlock>
        </Wrap>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headtwo_parathree}</SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headtwo_parafour}</SustainabilityDescription>
        <SustainabilityTitle>{sustainabilityCareers.abtus_sust_headthree}</SustainabilityTitle>
        <SustainabilityMiniTitle>{sustainabilityCareers.abtus_sust_headthree_subheadone}</SustainabilityMiniTitle>
        <SustainabilityDescription>
          {sustainabilityCareers.abtus_sust_headthree_subheadone_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          {sustainabilityCareers.abtus_sust_headthree_subheadone_paratwo}
        </SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headthree_scopeone_txt}</SustainabilityDescription>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headthree_scopetwo_txt}</SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headthree_subheadone_next}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headthree_subheadone_paraone_next}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headthree_subheadtwo}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headthree_subheadtwo_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          {sustainabilityCareers.abtus_sust_headthree_subheadtwo_paratwo}
        </SustainabilityDescription>
        <SustainabilityDescription>
          {sustainabilityCareers.abtus_sust_headthree_subheadtwo_parathree}
        </SustainabilityDescription>
        <Wrap
          sx={{
            display: "grid",
            maxWidth: "80rem",
            margin: "5rem auto",
            gridTemplateColumns: "25% 50% 25%",
            gap: "1rem",
          }}
        >
          <SustainabilityTabTitle>{sustainabilityCareers.abtus_sust_headthree_tbl_colleft}</SustainabilityTabTitle>
          <SustainabilityTabTitle>{sustainabilityCareers.abtus_sust_headthree_tbl_colmidone}</SustainabilityTabTitle>
          <SustainabilityTabTitle>{sustainabilityCareers.abtus_sust_headthree_tbl_colrightone}</SustainabilityTabTitle>
          <Wrap sx={{ gridRow: "2/7", height: "100%" }}>
            <SustainabilityTabTitle>{sustainabilityCareers.abtus_sust_headthree_tbl_collefttxt}</SustainabilityTabTitle>
          </Wrap>
          <SustainabilityTabMainBlock>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colmidone_txtone}
          </SustainabilityTabMainBlock>
          <SustainabilityTabBrightTitle>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colrightone_txtone}
          </SustainabilityTabBrightTitle>
          <SustainabilityTabSecondaryBlock>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colmidone_txttwo}
          </SustainabilityTabSecondaryBlock>
          <SustainabilityTabTitle>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colrightone_txttwo}
          </SustainabilityTabTitle>
          <SustainabilityTabMainBlock>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colmidone_txtthree}
          </SustainabilityTabMainBlock>
          <SustainabilityTabBrightTitle>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colrightone_txtthree}
          </SustainabilityTabBrightTitle>
          <SustainabilityTabSecondaryBlock>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colmidone_txtfour}
          </SustainabilityTabSecondaryBlock>
          <SustainabilityTabTitle>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colrightone_txtfour}
          </SustainabilityTabTitle>
          <SustainabilityTabMainBlock>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colmidone_txtfive}
          </SustainabilityTabMainBlock>
          <SustainabilityTabBrightTitle>
            {sustainabilityCareers.abtus_sust_headthree_tbl_colrightone_txtfive}
          </SustainabilityTabBrightTitle>
        </Wrap>
        <SustainabilityMiniTitle>{sustainabilityCareers.abtus_sust_headfour}</SustainabilityMiniTitle>
        <SustainabilityDescription>{sustainabilityCareers.abtus_sust_headfour_paraone}</SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadone}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadone_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadtwo}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadtwo_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadthree}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadthree_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadfour}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadfour_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadfive}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadfive_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadsix}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadsix_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadseven}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadseven_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadeight}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadeight_paraone}
        </SustainabilityDescription>
        <SustainabilityDescription>
          {sustainabilityCareers.abtus_sust_headfour_subheadeight_paratwo}
        </SustainabilityDescription>
        <SustainabilityDescription>
          <SustainabilitySubTitle>{sustainabilityCareers.abtus_sust_headfour_subheadnine}</SustainabilitySubTitle>
          <br />
          {sustainabilityCareers.abtus_sust_headfour_subheadnine_paraone}
        </SustainabilityDescription>
      </Section>
    </>
  );
};

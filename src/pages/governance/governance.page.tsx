import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import {
  AreasLocation,
  AreasTitle,
  BlockScheme,
  GovernanceDescription,
  GovernanceMainTitle,
  GovernanceSubTitle,
  GovernanceTitle,
} from "./governance.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { Wrap } from "../../components/wrap/wrap.component";

export const GovernancePage = () => {
  const { governance } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={"BLACK BANX Governance"}
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
        <GovernanceMainTitle>{governance.abtus_gvrn_mainhead}</GovernanceMainTitle>
        <GovernanceDescription>{governance.abtus_gvrn_mainhead_paraone}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_mainhead_paratwo}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headone}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headone_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headone_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headone_parathree}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headtwo}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headtwo_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headtwo_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headtwo_parathree}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headthree}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headthree_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headthree_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headthree_parathree}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headthree_parafour}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headthree_parafive}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfour}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headfour_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headfour_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headfour_parathree}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headfour_parafour}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfive}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headfive_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headfive_paratwo}</GovernanceDescription>
        <BlockScheme>
          <span>{governance.abtus_gvrn_headfive_chartheadone}</span>
          <ul>
            <li>
              <code>{governance.abtus_gvrn_headfive_chartheadone_leafone}</code>
            </li>
            <li>
              <code>{governance.abtus_gvrn_headfive_chartheadone_leaftwo}</code>
            </li>
            <li>
              <code>{governance.abtus_gvrn_headfive_chartheadone_leafthree}</code>
            </li>
            <li>
              <code>{governance.abtus_gvrn_headfive_chartheadone_leaffour}</code>
            </li>
          </ul>
        </BlockScheme>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfive_hdone}</GovernanceSubTitle>
          {governance.abtus_gvrn_headfive_txtone}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfive_hdtwo}</GovernanceSubTitle>
          {governance.abtus_gvrn_headfive_txttwo}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfive_hdthree}</GovernanceSubTitle>
          {governance.abtus_gvrn_headfive_txtthree}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfive_hdfour}</GovernanceSubTitle>
          {governance.abtus_gvrn_headfive_txtfour}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headsix}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headsix_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headsix_paratwo}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headseven}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headseven_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headseven_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headseven_parathree}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headseven_parafour}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headseven_parafive}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headeight}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headeight_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeight_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeight_parathree}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeight_parafour}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeight_parafive}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceTitle>{governance.abtus_gvrn_headnine}</GovernanceTitle>
          <br /> {governance.abtus_gvrn_headnine_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headnine_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headnine_parathree}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headten}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headten_paraone}
        </GovernanceDescription>
        <Wrap
          sx={{
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
            width: "100%",
            borderTop: "0.1rem solid",
            borderBottom: "0.1rem solid rgba(255,255,255,0.3)",
          }}
        >
          <AreasTitle>{governance.abtus_gvrn_headten_lefthead_rowone}</AreasTitle>
          <AreasTitle>{governance.abtus_gvrn_headten_midheadone_rowone}</AreasTitle>
          <AreasTitle>{governance.abtus_gvrn_headten_midheadtwo_rowone}</AreasTitle>
          <AreasTitle>{governance.abtus_gvrn_headten_righthead_rowone}</AreasTitle>
          <AreasLocation>{governance.abtus_gvrn_headten_lefthead_rowonetxt}</AreasLocation>
          <AreasLocation>{governance.abtus_gvrn_headten_midheadone_rowonetxt}</AreasLocation>
          <AreasLocation>{governance.abtus_gvrn_headten_midheadtwo_rowonetxt}</AreasLocation>
          <AreasLocation>{governance.abtus_gvrn_headten_righthead_rowonetxt}</AreasLocation>
        </Wrap>
        <Wrap
          sx={{ display: "grid", gridTemplateColumns: "25% 25% 25% 25%", width: "100%", borderBottom: "0.1rem solid" }}
        >
          <AreasTitle>{governance.abtus_gvrn_headten_lefthead_rowtwo}</AreasTitle>
          <AreasTitle>{governance.abtus_gvrn_headten_midheadone_rowtwo}</AreasTitle>
          <AreasTitle>{governance.abtus_gvrn_headten_midheadtwo_rowtwo}</AreasTitle>
          <Wrap sx={{ gridColumn: "1/4", gridRow: "2" }}>
            <AreasLocation>{governance.abtus_gvrn_headten_lefthead_rowtwotxt}</AreasLocation>
          </Wrap>
          <Wrap sx={{ gridColumn: "2/4", gridRow: "2" }}>
            <AreasLocation>{governance.abtus_gvrn_headten_midheadone_rowtwotxt}</AreasLocation>
          </Wrap>
          <Wrap sx={{ gridColumn: "3/4", gridRow: "2" }}>
            <AreasLocation>{governance.abtus_gvrn_headten_midheadtwo_rowtwotxt}</AreasLocation>
          </Wrap>
        </Wrap>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headeleven}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headeleven_paraone}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headtwelve}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headtwelve_paraone}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headthirteen}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headthirteen_paraone}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfourteen}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headfourteen_paraone}
        </GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headfifteen}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headfifteen_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headfifteen_paratwo}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headsixteen}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headsixteen_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headsixteen_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headsixteen_parathree}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headseventeen}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headseventeen_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headseventeen_paratwo}</GovernanceDescription>
        <GovernanceDescription>
          <GovernanceSubTitle>{governance.abtus_gvrn_headeighteen}</GovernanceSubTitle>
          <br /> {governance.abtus_gvrn_headeighteen_paraone}
        </GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_paratwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_parathree}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_parafour}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_parafour_subtxtone}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_parafour_subtxttwo}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_parafour_subtxtthree}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_parafive}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_parasix}</GovernanceDescription>
        <GovernanceDescription>{governance.abtus_gvrn_headeighteen_paraseven}</GovernanceDescription>
      </Section>
    </>
  );
};

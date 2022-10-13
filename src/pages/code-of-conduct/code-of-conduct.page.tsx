import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { ConductTitle, ConductDescription, ConductSubTitle, ConductMainTitle } from "./code-of-conduct.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const ConductPage = () => {
  const { codeOfConduct } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={"BLACK BANX CODE OF CONDUCT"}
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
        <ConductMainTitle>{codeOfConduct.abtus_coc_mainhead}</ConductMainTitle>
        <ConductDescription>{codeOfConduct.abtus_coc_mainhead_paraone} </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_mainhead_paratwo}</ConductDescription>

        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headone}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headone_paraone}
        </ConductDescription>
        <ConductTitle>{codeOfConduct.abtus_coc_headtwo}</ConductTitle>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_paraone}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_hdone}</ConductSubTitle>
          {codeOfConduct.abtus_coc_headtwo_txtone}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_hdtwo}</ConductSubTitle>
          {codeOfConduct.abtus_coc_headtwo_txttwo}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_hdthree}</ConductSubTitle>
          {codeOfConduct.abtus_coc_headtwo_txtthree}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_hdfour}</ConductSubTitle>
          {codeOfConduct.abtus_coc_headtwo_txtfour}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_hdfive}</ConductSubTitle>
          {codeOfConduct.abtus_coc_headtwo_txtfive}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_hdsix}</ConductSubTitle>
          {codeOfConduct.abtus_coc_headtwo_txtsix}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_hdseven}</ConductSubTitle>
          {codeOfConduct.abtus_coc_headtwo_txtseven}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_subheadone}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headtwo_subheadone_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadone_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadone_parathree}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadone_parafour}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadone_parafive}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadone_parasix}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadone_paraseven}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadone_paraeight}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_subheadtwo}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headtwo_subheadtwo_paraone}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_subheadthree}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headtwo_subheadthree_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadthree_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadthree_parathree}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadthree_parafour}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_subheadfour}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headtwo_subheadfour_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadfour_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadfour_parathree}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadfour_parafour}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_subheadfive}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headtwo_subheadfive_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadfive_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadfive_parathree}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_subheadsix}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headtwo_subheadsix_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadsix_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headtwo_subheadsix_parathree}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headtwo_subheadseven}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headtwo_subheadseven_paraone}
        </ConductDescription>
        <ConductTitle>{codeOfConduct.abtus_coc_headthree}</ConductTitle>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_paraone}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_parathree}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadone}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadone_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadone_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadone_parathree}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadtwo}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadtwo_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadtwo_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadtwo_parathree}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadtwo_parafour}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadthree}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadthree_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadthree_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadthree_parathree}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadfour}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadfour_paraone}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadfive}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadfive_paraone}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadsix}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadsix_paraone}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadseven}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadseven_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadseven_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadseven_parathree}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadseven_parafour}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadseven_parafive}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadseven_parasix}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadseven_paraseven}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headthree_subheadeight}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headthree_subheadeight_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadeight_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadeight_parathree}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headthree_subheadeight_parafour}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headfour}</ConductSubTitle>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headfive}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headfive_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headfive_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headfive_parathree}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headsix}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headsix_paraone}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headseven}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headseven_paraone}
        </ConductDescription>
        <ConductDescription>
          {codeOfConduct.abtus_coc_headseven_paratwo + " "}
          {codeOfConduct.abtus_coc_headseven_parathree}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headeight}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headeight_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headeight_paratwo}</ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headnine}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headnine_paraone}
        </ConductDescription>
        <ConductDescription>
          <ConductSubTitle>{codeOfConduct.abtus_coc_headten}</ConductSubTitle>
          <br />
          {codeOfConduct.abtus_coc_headten_paraone}
        </ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headten_paratwo}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headten_parathree}</ConductDescription>
        <ConductDescription>{codeOfConduct.abtus_coc_headten_parafour}</ConductDescription>
      </Section>
    </>
  );
};

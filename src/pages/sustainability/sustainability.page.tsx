import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import {
  SustainabilityTabBrightTitle,
  SustainabilityTabMainBlock,
  SustainabilityTabSecondaryBlock,
  SustainabilityTabTitle,
} from "./sustainability.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { Wrap } from "../../components/wrap/wrap.component";
import { IPageContent, TextContent } from "../../components/main-layout/text-content/text-content";

export const SustainabilityPage = () => {
  const { sustainabilityCareers } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const upperTextValue: IPageContent[] = [
    {
      mainTitle: sustainabilityCareers.abtus_sust_mainhead,
      titledList: [
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headone,
          article: [sustainabilityCareers.abtus_sust_headone_paraone],
        },
      ],
      article: [sustainabilityCareers.abtus_sust_headone_paratwo],
    },
    {
      inlineList: [
        {
          inlineSubtitle: sustainabilityCareers.abtus_sust_headone_subheadone,
          article: [sustainabilityCareers.abtus_sust_headone_subheadone_paraone],
        },
        {
          inlineSubtitle: sustainabilityCareers.abtus_sust_headone_subheadtwo,
          article: [sustainabilityCareers.abtus_sust_headone_subheadtwo_paraone],
        },
        {
          inlineSubtitle: sustainabilityCareers.abtus_sust_headone_subheadthree,
          article: [sustainabilityCareers.abtus_sust_headone_subheadtwo_parathree],
        },
      ],
      article: [
        sustainabilityCareers.abtus_sust_headone_parathree,
        sustainabilityCareers.abtus_sust_headone_parafour,
        sustainabilityCareers.abtus_sust_headone_parafive,
        sustainabilityCareers.abtus_sust_headone_parasix,
      ],
    },
    {
      title: sustainabilityCareers.abtus_sust_headtwo,
      article: [sustainabilityCareers.abtus_sust_headtwo_paraone, sustainabilityCareers.abtus_sust_headtwo_paratwo],
    },
  ];
  const middleTextValue: IPageContent[] = [
    {
      article: [sustainabilityCareers.abtus_sust_headtwo_parathree, sustainabilityCareers.abtus_sust_headtwo_parafour],
    },
    {
      title: sustainabilityCareers.abtus_sust_headthree,
      miniTitle: sustainabilityCareers.abtus_sust_headthree_subheadone,
      article: [
        sustainabilityCareers.abtus_sust_headthree_subheadone_paraone,
        sustainabilityCareers.abtus_sust_headthree_subheadone_paratwo,
        sustainabilityCareers.abtus_sust_headthree_scopeone_txt,
        sustainabilityCareers.abtus_sust_headthree_scopetwo_txt,
      ],
    },
    {
      titledList: [
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headthree_subheadone_next,
          article: [sustainabilityCareers.abtus_sust_headthree_subheadone_paraone_next],
        },
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headthree_subheadtwo,
          article: [sustainabilityCareers.abtus_sust_headthree_subheadtwo_paraone],
        },
      ],
      article: [
        sustainabilityCareers.abtus_sust_headthree_subheadtwo_paratwo,
        sustainabilityCareers.abtus_sust_headthree_subheadtwo_parathree,
      ],
    },
  ];
  const bottomTextValue: IPageContent[] = [
    {
      miniTitle: sustainabilityCareers.abtus_sust_headfour,
      article: [sustainabilityCareers.abtus_sust_headfour_paraone],
    },
    {
      titledList: [
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadone,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadone_paraone],
        },
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadtwo,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadtwo_paraone],
        },
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadthree,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadthree_paraone],
        },
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadfour,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadfour_paraone],
        },
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadfive,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadfive_paraone],
        },
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadsix,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadsix_paraone],
        },
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadseven,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadseven_paraone],
        },
      ],
    },
    {
      titledList: [
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadeight,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadeight_paraone],
        },
      ],
      article: [sustainabilityCareers.abtus_sust_headfour_subheadeight_paratwo],
    },
    {
      titledList: [
        {
          upperSubtitle: sustainabilityCareers.abtus_sust_headfour_subheadnine,
          article: [sustainabilityCareers.abtus_sust_headfour_subheadnine_paraone],
        },
      ],
    },
  ];
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
        <TextContent content={upperTextValue} />
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
        <TextContent content={middleTextValue} />
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
        <TextContent content={bottomTextValue} />
      </Section>
    </>
  );
};

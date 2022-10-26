import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { AreasLocation, AreasTitle } from "./governance.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { Wrap } from "../../components/wrap/wrap.component";
import { IPageContent, TextContent } from "../../components/main-layout/text-content/text-content";
import { RootlikeBlockScheme, RootlikeBlockSchemeProps } from "../../components/tree-block-scheme/tree-block-scheme";

export const GovernancePage = () => {
  const { governance } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");
  const upperTextValue: IPageContent[] = [
    {
      mainTitle: governance.abtus_gvrn_mainhead,
      article: [governance.abtus_gvrn_mainhead_paraone, governance.abtus_gvrn_mainhead_paratwo],
    },
    {
      titledList: [{ upperSubtitle: governance.abtus_gvrn_headone, article: [governance.abtus_gvrn_headone_paraone] }],
      article: [governance.abtus_gvrn_headone_paratwo, governance.abtus_gvrn_headone_parathree],
    },
    {
      titledList: [{ upperSubtitle: governance.abtus_gvrn_headtwo, article: [governance.abtus_gvrn_headtwo_paraone] }],
      article: [governance.abtus_gvrn_headtwo_paratwo, governance.abtus_gvrn_headtwo_parathree],
    },
    {
      titledList: [
        { upperSubtitle: governance.abtus_gvrn_headthree, article: [governance.abtus_gvrn_headthree_paraone] },
      ],
      article: [
        governance.abtus_gvrn_headthree_paratwo,
        governance.abtus_gvrn_headthree_parathree,
        governance.abtus_gvrn_headthree_parafour,
        governance.abtus_gvrn_headthree_parafive,
      ],
    },
    {
      titledList: [
        { upperSubtitle: governance.abtus_gvrn_headfour, article: [governance.abtus_gvrn_headfour_paraone] },
      ],
      article: [
        governance.abtus_gvrn_headfour_paratwo,
        governance.abtus_gvrn_headfour_parathree,
        governance.abtus_gvrn_headfour_parafour,
      ],
    },
    {
      titledList: [
        { upperSubtitle: governance.abtus_gvrn_headfive, article: [governance.abtus_gvrn_headfive_paraone] },
      ],
      article: [governance.abtus_gvrn_headfive_paratwo],
    },
  ];
  const middleTextValue: IPageContent[] = [
    {
      inlineList: [
        {
          inlineSubtitle: governance.abtus_gvrn_headfive_hdone,
          article: [governance.abtus_gvrn_headfive_txtone],
        },
        {
          inlineSubtitle: governance.abtus_gvrn_headfive_hdtwo,
          article: [governance.abtus_gvrn_headfive_txttwo],
        },
        {
          inlineSubtitle: governance.abtus_gvrn_headfive_hdthree,
          article: [governance.abtus_gvrn_headfive_txtthree],
        },
        {
          inlineSubtitle: governance.abtus_gvrn_headfive_hdfour,
          article: [governance.abtus_gvrn_headfive_txtfour],
        },
      ],
    },
    {
      titledList: [{ upperSubtitle: governance.abtus_gvrn_headsix, article: [governance.abtus_gvrn_headsix_paraone] }],
      article: [governance.abtus_gvrn_headsix_paratwo],
    },
    {
      titledList: [
        { upperSubtitle: governance.abtus_gvrn_headseven, article: [governance.abtus_gvrn_headseven_paraone] },
      ],
      article: [
        governance.abtus_gvrn_headseven_paratwo,
        governance.abtus_gvrn_headseven_parathree,
        governance.abtus_gvrn_headseven_parafour,
        governance.abtus_gvrn_headseven_parafive,
      ],
    },
    {
      titledList: [
        { upperSubtitle: governance.abtus_gvrn_headeight, article: [governance.abtus_gvrn_headeight_paraone] },
      ],
      article: [
        governance.abtus_gvrn_headeight_paratwo,
        governance.abtus_gvrn_headeight_parathree,
        governance.abtus_gvrn_headeight_parafour,
        governance.abtus_gvrn_headeight_parafive,
      ],
    },
    {
      title: governance.abtus_gvrn_headnine,
      article: [
        governance.abtus_gvrn_headnine_paraone,
        governance.abtus_gvrn_headnine_paratwo,
        governance.abtus_gvrn_headnine_parathree,
      ],
    },
    {
      titledList: [{ upperSubtitle: governance.abtus_gvrn_headten, article: [governance.abtus_gvrn_headten_paraone] }],
    },
  ];
  const bottomTextValue: IPageContent[] = [
    {
      titledList: [
        {
          upperSubtitle: governance.abtus_gvrn_headeleven,
          article: [governance.abtus_gvrn_headeleven_paraone],
        },
        {
          upperSubtitle: governance.abtus_gvrn_headtwelve,
          article: [governance.abtus_gvrn_headtwelve_paraone],
        },
        {
          upperSubtitle: governance.abtus_gvrn_headthirteen,
          article: [governance.abtus_gvrn_headthirteen_paraone],
        },
        {
          upperSubtitle: governance.abtus_gvrn_headfourteen,
          article: [governance.abtus_gvrn_headfourteen_paraone],
        },
        {
          upperSubtitle: governance.abtus_gvrn_headfifteen,
          article: [governance.abtus_gvrn_headfifteen_paraone],
        },
      ],
    },
    {
      titledList: [
        {
          upperSubtitle: governance.abtus_gvrn_headsixteen,
          article: [governance.abtus_gvrn_headsixteen_paraone],
        },
      ],
      article: [governance.abtus_gvrn_headsixteen_paratwo, governance.abtus_gvrn_headsixteen_parathree],
    },
    {
      titledList: [
        {
          upperSubtitle: governance.abtus_gvrn_headseventeen,
          article: [governance.abtus_gvrn_headseventeen_paraone],
        },
      ],
      article: [governance.abtus_gvrn_headseventeen_paratwo],
    },
    {
      titledList: [
        {
          upperSubtitle: governance.abtus_gvrn_headeighteen,
          article: [governance.abtus_gvrn_headeighteen_paraone],
        },
      ],
      article: [
        governance.abtus_gvrn_headeighteen_paratwo,
        governance.abtus_gvrn_headeighteen_parathree,
        governance.abtus_gvrn_headeighteen_parafour,
        governance.abtus_gvrn_headeighteen_parafour_subtxtone,
        governance.abtus_gvrn_headeighteen_parafour_subtxttwo,
        governance.abtus_gvrn_headeighteen_parafour_subtxtthree,
        governance.abtus_gvrn_headeighteen_parafive,
        governance.abtus_gvrn_headeighteen_parasix,
        governance.abtus_gvrn_headeighteen_paraseven,
      ],
    },
  ];
  const schemeElements: RootlikeBlockSchemeProps = {
    root: governance.abtus_gvrn_headfive_chartheadone,
    li: [
      governance.abtus_gvrn_headfive_chartheadone_leafone,
      governance.abtus_gvrn_headfive_chartheadone_leaftwo,
      governance.abtus_gvrn_headfive_chartheadone_leafthree,
      governance.abtus_gvrn_headfive_chartheadone_leaffour,
    ],
  };
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
        <TextContent content={upperTextValue} />
        <RootlikeBlockScheme props={schemeElements} />
        <TextContent content={middleTextValue} />
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
        <TextContent content={bottomTextValue} />
      </Section>
    </>
  );
};

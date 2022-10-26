import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { IPageContent, TextContent } from "../../components/main-layout/text-content/text-content";

export const RiskManagementPage = () => {
  const { riskManagement } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const textValue: IPageContent[] = [
    { mainTitle: riskManagement.abtus_rism_mainhead, article: [riskManagement.abtus_rism_mainhead_paraone] },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headone,
          article: [riskManagement.abtus_rism_headone_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headone_paratwo, riskManagement.abtus_rism_headone_parathree],
    },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headtwo,
          article: [riskManagement.abtus_rism_headtwo_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headtwo_paratwo, riskManagement.abtus_rism_headtwo_parathree],
    },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headthree,
          article: [riskManagement.abtus_rism_headthree_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headthree_paratwo, riskManagement.abtus_rism_headthree_parathree],
    },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headfour,
          article: [riskManagement.abtus_rism_headfour_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headfour_paratwo, riskManagement.abtus_rism_headfour_parathree],
    },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headfive,
          article: [riskManagement.abtus_rism_headfive_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headfive_paratwo],
    },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headsix,
          article: [riskManagement.abtus_rism_headsix_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headsix_paratwo],
    },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headseven,
          article: [riskManagement.abtus_rism_headseven_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headseven_paratwo],
    },
    {
      titledList: [
        {
          upperSubtitle: riskManagement.abtus_rism_headeight,
          article: [riskManagement.abtus_rism_headeight_paraone],
        },
      ],
      article: [riskManagement.abtus_rism_headeight_paratwo, riskManagement.abtus_rism_headeight_parathree],
    },
  ];
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
        <TextContent content={textValue} />
      </Section>
    </>
  );
};

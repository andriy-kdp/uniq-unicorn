import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { IPageContent, TextContent } from "../../components/main-layout/text-content/text-content";

export const CulturePage = () => {
  const { culture } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const textValue: IPageContent[] = [
    {
      mainTitle: culture.abtus_cult_mainhead,
      article: [
        culture.abtus_cult_mainhead_paraone,
        culture.abtus_cult_mainhead_paratwo,
        culture.abtus_cult_mainhead_parathree,
        culture.abtus_cult_mainhead_parafour,
      ],
    },
    {
      title: culture.abtus_cult_headone,
      titledList: [
        {
          upperSubtitle: culture.abtus_cult_headone_subheadone,
          article: [culture.abtus_cult_headone_subheadone_paraone],
        },
        {
          upperSubtitle: culture.abtus_cult_headone_subheadtwo,
          article: [culture.abtus_cult_headone_subheadtwo_paraone],
        },
        {
          upperSubtitle: culture.abtus_cult_headone_subheadthree,
          article: [culture.abtus_cult_headone_subheadtwo_parathree],
        },
        {
          upperSubtitle: culture.abtus_cult_headone_subheadfour,
          article: [culture.abtus_cult_headone_subheadtwo_parafour],
        },
      ],
    },
  ];

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
        <TextContent content={textValue} />
      </Section>
    </>
  );
};

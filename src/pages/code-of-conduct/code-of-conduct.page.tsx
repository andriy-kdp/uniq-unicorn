import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { IPageContent, TextContent } from "../../components/main-layout/text-content/text-content";

export const ConductPage = () => {
  const { codeOfConduct } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const head: IPageContent = {
    mainTitle: codeOfConduct.abtus_coc_mainhead,
    article: [codeOfConduct.abtus_coc_mainhead_paraone, codeOfConduct.abtus_coc_mainhead_paratwo],
  };
  const CEOmessage: IPageContent = {
    titledList: [
      { upperSubtitle: codeOfConduct.abtus_coc_headone, article: [codeOfConduct.abtus_coc_headone_paraone] },
    ],
  };
  const vision: IPageContent = {
    title: codeOfConduct.abtus_coc_headtwo,
    article: [codeOfConduct.abtus_coc_headtwo_paraone],
  };
  const values: IPageContent = {
    inlineList: [
      {
        inlineSubtitle: codeOfConduct.abtus_coc_headtwo_hdone,
        article: [codeOfConduct.abtus_coc_headtwo_txtone],
      },
      {
        inlineSubtitle: codeOfConduct.abtus_coc_headtwo_hdtwo,
        article: [codeOfConduct.abtus_coc_headtwo_txttwo],
      },
      {
        inlineSubtitle: codeOfConduct.abtus_coc_headtwo_hdthree,
        article: [codeOfConduct.abtus_coc_headtwo_txtthree],
      },
      {
        inlineSubtitle: codeOfConduct.abtus_coc_headtwo_hdfour,
        article: [codeOfConduct.abtus_coc_headtwo_txtfour],
      },
      {
        inlineSubtitle: codeOfConduct.abtus_coc_headtwo_hdfive,
        article: [codeOfConduct.abtus_coc_headtwo_txtfive],
      },
      {
        inlineSubtitle: codeOfConduct.abtus_coc_headtwo_hdsix,
        article: [codeOfConduct.abtus_coc_headtwo_txtsix],
      },
      {
        inlineSubtitle: codeOfConduct.abtus_coc_headtwo_hdseven,
        article: [codeOfConduct.abtus_coc_headtwo_txtseven],
      },
    ],
  };
  const approach: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headtwo_subheadone,
        article: [codeOfConduct.abtus_coc_headtwo_subheadone_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headtwo_subheadone_paratwo,
      codeOfConduct.abtus_coc_headtwo_subheadone_parathree,
      codeOfConduct.abtus_coc_headtwo_subheadone_parafour,
      codeOfConduct.abtus_coc_headtwo_subheadone_parafive,
      codeOfConduct.abtus_coc_headtwo_subheadone_parasix,
      codeOfConduct.abtus_coc_headtwo_subheadone_paraseven,
      codeOfConduct.abtus_coc_headtwo_subheadone_paraeight,
    ],
  };
  const customers: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headtwo_subheadtwo,
        article: [codeOfConduct.abtus_coc_headtwo_subheadtwo_paraone],
      },
      {
        upperSubtitle: codeOfConduct.abtus_coc_headtwo_subheadthree,
        article: [codeOfConduct.abtus_coc_headtwo_subheadthree_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headtwo_subheadthree_paratwo,
      codeOfConduct.abtus_coc_headtwo_subheadthree_parathree,
      codeOfConduct.abtus_coc_headtwo_subheadthree_parafour,
    ],
  };
  const treating: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headtwo_subheadfour,
        article: [codeOfConduct.abtus_coc_headtwo_subheadfour_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headtwo_subheadfour_paratwo,
      codeOfConduct.abtus_coc_headtwo_subheadfour_parathree,
      codeOfConduct.abtus_coc_headtwo_subheadfour_parafour,
    ],
  };
  const communicate: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headtwo_subheadfive,
        article: [codeOfConduct.abtus_coc_headtwo_subheadfive_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headtwo_subheadfive_paratwo,
      codeOfConduct.abtus_coc_headtwo_subheadfive_parathree,
    ],
  };
  const customer: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headtwo_subheadsix,
        article: [codeOfConduct.abtus_coc_headtwo_subheadsix_paraone],
      },
    ],
    article: [codeOfConduct.abtus_coc_headtwo_subheadsix_paratwo, codeOfConduct.abtus_coc_headtwo_subheadsix_parathree],
  };
  const protect: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headtwo_subheadseven,
        article: [codeOfConduct.abtus_coc_headtwo_subheadseven_paraone],
      },
    ],
  };
  const people: IPageContent = {
    title: codeOfConduct.abtus_coc_headthree,
    article: [
      codeOfConduct.abtus_coc_headthree_paraone,
      codeOfConduct.abtus_coc_headthree_paratwo,
      codeOfConduct.abtus_coc_headthree_parathree,
    ],
  };
  const doing: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadone,
        article: [codeOfConduct.abtus_coc_headthree_subheadone_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headthree_subheadone_paratwo,
      codeOfConduct.abtus_coc_headthree_subheadone_parathree,
    ],
  };
  const speaking: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadtwo,
        article: [codeOfConduct.abtus_coc_headthree_subheadtwo_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headthree_subheadtwo_paratwo,
      codeOfConduct.abtus_coc_headthree_subheadtwo_parathree,
      codeOfConduct.abtus_coc_headthree_subheadtwo_parafour,
    ],
  };
  const retaliation: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadthree,
        article: [codeOfConduct.abtus_coc_headthree_subheadthree_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headthree_subheadthree_paratwo,
      codeOfConduct.abtus_coc_headthree_subheadthree_parathree,
    ],
  };
  const decision: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadfour,
        article: [codeOfConduct.abtus_coc_headthree_subheadfour_paraone],
      },
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadfive,
        article: [codeOfConduct.abtus_coc_headthree_subheadfive_paraone],
      },
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadsix,
        article: [codeOfConduct.abtus_coc_headthree_subheadsix_paraone],
      },
    ],
  };
  const response: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadseven,
        article: [codeOfConduct.abtus_coc_headthree_subheadseven_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headthree_subheadseven_paratwo,
      codeOfConduct.abtus_coc_headthree_subheadseven_parathree,
      codeOfConduct.abtus_coc_headthree_subheadseven_parafour,
      codeOfConduct.abtus_coc_headthree_subheadseven_parafive,
      codeOfConduct.abtus_coc_headthree_subheadseven_parasix,
      codeOfConduct.abtus_coc_headthree_subheadseven_paraseven,
    ],
  };
  const sustain: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headthree_subheadeight,
        article: [codeOfConduct.abtus_coc_headthree_subheadeight_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headthree_subheadeight_paratwo,
      codeOfConduct.abtus_coc_headthree_subheadeight_parathree,
      codeOfConduct.abtus_coc_headthree_subheadeight_parafour,
    ],
  };
  const safeGuard: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headfour + "  " + codeOfConduct.abtus_coc_headfive,
        article: [codeOfConduct.abtus_coc_headfive_paraone],
      },
    ],
    article: [codeOfConduct.abtus_coc_headfive_paratwo, codeOfConduct.abtus_coc_headfive_parathree],
  };
  const dataProtect: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headsix,
        article: [codeOfConduct.abtus_coc_headsix_paraone],
      },
      {
        upperSubtitle: codeOfConduct.abtus_coc_headseven,
        article: [codeOfConduct.abtus_coc_headseven_paraone],
      },
    ],
    article: [codeOfConduct.abtus_coc_headseven_paratwo, codeOfConduct.abtus_coc_headseven_parathree],
  };
  const authority: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headeight,
        article: [codeOfConduct.abtus_coc_headeight_paraone],
      },
    ],
    article: [codeOfConduct.abtus_coc_headeight_paratwo],
  };
  const community: IPageContent = {
    titledList: [
      {
        upperSubtitle: codeOfConduct.abtus_coc_headnine,
        article: [codeOfConduct.abtus_coc_headnine_paraone],
      },
      {
        upperSubtitle: codeOfConduct.abtus_coc_headten,
        article: [codeOfConduct.abtus_coc_headten_paraone],
      },
    ],
    article: [
      codeOfConduct.abtus_coc_headten_paratwo,
      codeOfConduct.abtus_coc_headten_parathree,
      codeOfConduct.abtus_coc_headten_parafour,
    ],
  };

  const content: IPageContent[] = [
    head,
    CEOmessage,
    vision,
    values,
    approach,
    customers,
    treating,
    communicate,
    customer,
    protect,
    people,
    doing,
    speaking,
    retaliation,
    decision,
    response,
    sustain,
    safeGuard,
    dataProtect,
    authority,
    community,
  ];
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
        <TextContent content={content} />
      </Section>
    </>
  );
};

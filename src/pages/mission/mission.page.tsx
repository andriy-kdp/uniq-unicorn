import React from "react";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { MissionDescription, MissionSubTitle, MissionTitle } from "./mission.styles";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { Wrap } from "../../components/wrap/wrap.component";

export const MissionPage = () => {
  const { aboutUsMission } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const missionSection: IPageContent = {
    title: aboutUsMission.abtus_misn_headOne,
    article: [
      aboutUsMission.abtus_misn_subheadOne,
      aboutUsMission.abtus_misn_subheadOne_ParaOne,
      aboutUsMission.abtus_misn__subheadOne_ParaTwo,
      aboutUsMission.abtus_misn__subheadOne_ParaThree,
      aboutUsMission.abtus_misn__subheadOne_ParaFour,
    ],
  };
  const operatingSection: IPageContent = {
    title: aboutUsMission.abtus_misn_headTwo,
    article: [
      aboutUsMission.abtus_misn_headTwo_ParaOne,
      aboutUsMission.abtus_misn_headTwo_ParaTwo,
      aboutUsMission.abtus_misn_headTwo_ParaThree,
      aboutUsMission.abtus_misn_headTwo_ParaFour,
      aboutUsMission.abtus_misn_headTwo_ParaFive,
      aboutUsMission.abtus_misn_headTwo_ParaSix,
      aboutUsMission.abtus_misn_headTwo_ParaSeven,
    ],
  };
  const metricsSection: IPageContent = {
    title: aboutUsMission.abtus_misn_headThree,
    table: [
      { sign: "15m", title: "Customers" },
      { sign: "750k", title: "Business customers" },
      { sign: "180", title: "Operational countries" },
      { sign: "28+2", title: "Fiat and Crypto currencies" },
      { sign: "$420m", title: "Revenue" },
      { sign: "2,100", title: "Employees" },
    ],
  };

  const metricsDescription: IPageContent = {
    inlineList: [
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadOne,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadOne_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadTwo,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadTwo_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadThree,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadThree_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadFour,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadFour_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadFive,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadFive_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadSix,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadSix_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadSeven,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadSeven_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headThree_ParaHeadEight,
        article: [aboutUsMission.abtus_misn_headThree_ParaHeadEight_txtone],
      },
    ],
  };
  const strategySection = {
    title: aboutUsMission.abtus_misn_headFour,
    article: [aboutUsMission.abtus_misn_headFour_ParaOne, aboutUsMission.abtus_misn_headFour_ParaTwo],
    strategyList: [
      {
        upperSubtitle: aboutUsMission.abtus_misn_subheadFour_One,
        article: [aboutUsMission.abtus_misn_subheadFour_One_txtone],
      },
      {
        upperSubtitle: aboutUsMission.abtus_misn_subheadFour_Two,
        article: [
          aboutUsMission.abtus_misn_subheadFour_Two_txtone,
          aboutUsMission.abtus_misn_subheadFour_Two_txttwo,
          aboutUsMission.abtus_misn_subheadFour_Four_txtthree,
        ],
      },
      {
        article: ["Our products and services encompass:", "Private Clients / Business Clients"],
        list: [
          "- private and business Group accounts in 28 FIAT and 2 crypto currencies",
          "- International payments in 28 FIAT and 2 crypto currencies using local instant settlement system where possible (e.g. FPS, SEPA instant credit, etc.)",
          " - Inter platform instant payments in 28 FIAT and 2 crypto currencies",
          " - Multi Currency Mastercard Debit Card (plastic and metal) + virtual cards, - Real time 24/7 currency exchange services, - Real time 24/7 crypto trading services",
          " - Interest bearing savings accounts in EURO, USD, GBP, JPY",
          " - Batch upload or API to execute large number of payments for business customers",
        ],
      },
    ],
  };
  const strategyEnd = { article: [aboutUsMission.abtus_misn_subheadFour_Six_txtfive] };
  const keySection = {
    title: aboutUsMission.abtus_misn_headFive,
    inlineList: [
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headFive_ParaHeadOne,
        article: [aboutUsMission.abtus_misn_headFive_ParaHeadOne_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headFive_ParaHeadTwo,
        article: [aboutUsMission.abtus_misn_headFive_ParaHeadTwo_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headFive_ParaHeadThree,
        article: [aboutUsMission.abtus_misn_headFive_ParaHeadThree_txtone],
      },
      {
        inlineSubtitle: aboutUsMission.abtus_misn_headFive_ParaHeadFour,
        article: [aboutUsMission.abtus_misn_headFive_ParaHeadFour_txtone],
      },
      {
        article: [aboutUsMission.abtus_misn_headSix_ParaOne, aboutUsMission.abtus_misn_headSix_ParaTwo],
      },
    ],
  };
  interface IPageContent {
    title?: string;
    inlineSubtitle?: string;
    upperSubtitle?: string;
    article?: string[];
    list?: string[];
    table?: { sign: string; title: string }[];
    inlineList?: {
      inlineSubtitle?: string;
      article?: string[];
    }[];
    strategyList?: {
      title?: string;
      upperSubtitle?: string;
      article?: string[];
      list?: string[];
    }[];
  }
  const content: IPageContent[] = [
    missionSection,
    operatingSection,
    metricsSection,
    metricsDescription,
    strategySection,
    strategyEnd,
    keySection,
  ];
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={"BLACK BANX MISSION"}
        bgVariant={"gradient"}
        justify={"center"}
        titleAlign={"center"}
        titleWidth={"60%"}
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
        {content?.map((el) => (
          <>
            {el.title && <MissionTitle>{el.title}</MissionTitle>}
            {el.article &&
              el.article.map((ar) => (
                <MissionDescription>
                  {el.inlineSubtitle && <MissionSubTitle>{el.inlineSubtitle}</MissionSubTitle>}
                  {ar}
                </MissionDescription>
              ))}
            {el.inlineList &&
              el.inlineList.map((el) => (
                <MissionDescription>
                  <MissionSubTitle>{el.inlineSubtitle}</MissionSubTitle>
                  {el.article}
                </MissionDescription>
              ))}
            {el.strategyList &&
              el.strategyList.map((element) => (
                <>
                  {element.article.map((el) => (
                    <MissionDescription>
                      {element.upperSubtitle && (
                        <>
                          <MissionSubTitle>{element.upperSubtitle}</MissionSubTitle>
                          <br />
                        </>
                      )}
                      {el}
                    </MissionDescription>
                  ))}
                  {element.list && (
                    <MissionDescription>
                      {element.list?.map((el) => (
                        <span>
                          {el}
                          <br />
                        </span>
                      ))}
                    </MissionDescription>
                  )}
                </>
              ))}
            {el.table && (
              <Wrap
                sx={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "33% 33% 33%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "5rem 0",
                }}
              >
                {el.table.map((el) => (
                  <MissionTitle>
                    <Wrap sx={{ display: "column", alignItems: "center", width: "100%", textAlign: "center" }}>
                      <Wrap sx={{ fontSize: "5rem", marginBottom: "1rem" }}>{el.sign}</Wrap>
                      <div>{el.title}</div>
                    </Wrap>
                  </MissionTitle>
                ))}
              </Wrap>
            )}
          </>
        ))}
      </Section>
    </>
  );
};

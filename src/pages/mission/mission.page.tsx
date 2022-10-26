import { SlideSection } from "../../components/silde-section/slide-section.component";
import MissionBg from "../../assets/backgrounds/mission/home_slider.png";
import { Section } from "../../components/section/section.component";
import { useMediaQuery } from "../../utils/use-media-query";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";
import { IPageContent, TextContent } from "../../components/main-layout/text-content/text-content";

export const MissionPage = () => {
  const { aboutUsMission } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const textValue: IPageContent[] = [
    {
      title: aboutUsMission.abtus_misn_headOne,
      article: [
        aboutUsMission.abtus_misn_subheadOne,
        aboutUsMission.abtus_misn_subheadOne_ParaOne,
        aboutUsMission.abtus_misn__subheadOne_ParaTwo,
        aboutUsMission.abtus_misn__subheadOne_ParaThree,
        aboutUsMission.abtus_misn__subheadOne_ParaFour,
      ],
    },
    {
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
    },
    {
      title: aboutUsMission.abtus_misn_headThree,
      table: [
        { sign: "15m", title: "Customers" },
        { sign: "750k", title: "Business customers" },
        { sign: "180", title: "Operational countries" },
        { sign: "28+2", title: "Fiat and Crypto currencies" },
        { sign: "$420m", title: "Revenue" },
        { sign: "2,100", title: "Employees" },
      ],
    },
    {
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
    },
    {
      title: aboutUsMission.abtus_misn_headFour,
      article: [aboutUsMission.abtus_misn_headFour_ParaOne, aboutUsMission.abtus_misn_headFour_ParaTwo],
      titledList: [
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
            " - Multi Currency Mastercard Debit Card (plastic and metal) + virtual cards",
            " - Real time 24/7 currency exchange services",
            " - Real time 24/7 crypto trading services",
            " - Interest bearing savings accounts in EURO, USD, GBP, JPY",
            " - Batch upload or API to execute large number of payments for business customers",
          ],
        },
      ],
    },
    { article: [aboutUsMission.abtus_misn_subheadFour_Six_txtfive] },
    {
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
      ],

      article: [aboutUsMission.abtus_misn_headSix_ParaOne, aboutUsMission.abtus_misn_headSix_ParaTwo],
    },
  ];
  return (
    <>
      <SlideSection
        bgImage={MissionBg}
        title={aboutUsMission.abtus_misn_mainhead}
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
        <TextContent content={textValue} />
      </Section>
    </>
  );
};

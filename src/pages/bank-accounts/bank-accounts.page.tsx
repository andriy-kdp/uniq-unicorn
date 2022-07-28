import React from "react";
import { Section } from "../../components/section/section.component";
import { Wrap } from "../../components/wrap/wrap.component";
import BgImage from "../../assets/backgrounds/bank-accounts/city_bg.png";
import {
  DescriptionContainer,
  ProfItemDescription,
  ProfItemTitle,
  Description,
  DescriptionWrapper,
  ProfItemContainer,
  ProfsContainer,
  DescriptionTitle,
  InfoBlockContainer,
  InfoWrapper,
  BlockSubtitle,
  BlockTitle,
  InfoListContainer,
  InfoListItem,
  ImgWrapper,
} from "./bank-accounts.styles";
import { ReactComponent as BuildingIcon } from "../../assets/icons/crypto-currency/building.svg";
import { ReactComponent as CardIcon } from "../../assets/icons/crypto-currency/card.svg";
import { ReactComponent as CaseIcon } from "../../assets/icons/crypto-currency/case.svg";
import { ButtonArrow } from "../../components/button-arrow/button-arrow.component";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../utils/use-media-query";
import { SlideSection } from "../../components/silde-section/slide-section.component";
import { uiDataWebsiteText } from "../../redux/uiData/selectors";
import { useSelector } from "../../redux/store";

export const BankAccountsPage: React.FC = (): JSX.Element => {
  const { accountsBankAccounts } = useSelector(uiDataWebsiteText);
  const nav = useNavigate();
  const isMobile = useMediaQuery("sm");
  const handleClickButton = (path: string) => () => {
    nav(path);
  };
  const bankAccountProfs: { title: string; description: string }[] = [
    { title: accountsBankAccounts.ac_bnk_hdtwo_left, description: accountsBankAccounts.ac_bnk_hdtwo_left_subone },
    { title: accountsBankAccounts.ac_bnk_hdtwo_mid, description: accountsBankAccounts.ac_bnk_hdtwo_mid_subone },
    {
      title: "Institutional clients",
      description: "Cost-effective global payments",
    },
  ];

  const infoBlocks: {
    title: string;
    subtitle: string;
    description: string[] | string;
    blockImgSrc: React.ReactNode;
    link: string;
  }[] = [
    {
      title: accountsBankAccounts.ac_bnk_hdtwo_left,
      subtitle: accountsBankAccounts.ac_bnk_hdtwo_left_subtwo,
      link: "/auth/register/private",
      description: [
        accountsBankAccounts.ac_bnk_hdtwo_left_pntone,
        accountsBankAccounts.ac_bnk_hdtwo_left_pnttwo,
        accountsBankAccounts.ac_bnk_hdtwo_left_pntthree,
        accountsBankAccounts.ac_bnk_hdtwo_left_pntfour,
        accountsBankAccounts.ac_bnk_hdtwo_left_pntfive,
        accountsBankAccounts.ac_bnk_hdtwo_left_pntsix,
        accountsBankAccounts.ac_bnk_hdtwo_left_pntseven,
        accountsBankAccounts.ac_bnk_hdtwo_left_pnteight,
        accountsBankAccounts.ac_bnk_hdtwo_left_pntnine,
      ],
      blockImgSrc: <CardIcon />,
    },
    {
      title: accountsBankAccounts.ac_bnk_hdtwo_mid,
      subtitle: accountsBankAccounts.ac_bnk_hdtwo_mid_subtwo,
      link: "/auth/register/business",
      description: [
        accountsBankAccounts.ac_bnk_hdtwo_mid_subone,
        accountsBankAccounts.ac_bnk_hdtwo_mid_subtwo,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntone,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pnttwo,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntthree,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntfour,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntfive,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntsix,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntseven,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pnteight,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntnine,
        accountsBankAccounts.ac_bnk_hdtwo_mid_pntten,
      ],
      blockImgSrc: <CaseIcon />,
    },
    {
      title: "INSTITUTIONAL CLIENTS",
      subtitle: "If you are a Bank, a Fund or Financial Institution:",
      link: "/auth/register/institutional",
      description:
        "Black Banx offers a cost effective, global cross border payment solution.We offer a network of local correspondent accounts in over 90 countries for incoming and outgoing payments. Integrating our cross border platform into your payment system would allow you to send and receive funds in a fraction of time. To reduce your fees, we offer attractive volume based pricing models.",
      blockImgSrc: <BuildingIcon />,
    },
  ];
  return (
    <>
      <SlideSection
        bgImage={BgImage}
        title={accountsBankAccounts.ac_bnk_headOne}
        bgVariant={"gradient"}
        titleWidth={"100%"}
        justify={"center"}
        titleAlign={"center"}
        BgImageStyles={
          isMobile
            ? {
                opacity: "1 !important",
                backgroundPosition: "center",
                backgroundSize: "120rem 100%",
                backgroundRepeat: "no-repeat",
              }
            : {
                opacity: "1 !important",
                backgroundSize: "100% 100%",
              }
        }
      />
      <Section mainContent m={"9rem auto"}>
        <DescriptionWrapper>
          <ProfsContainer>
            {bankAccountProfs.map((prof, idx) => (
              <ProfItemContainer key={`prof-item-${idx}`}>
                <ProfItemTitle>{prof.title}</ProfItemTitle>
                <ProfItemDescription>{prof.description}</ProfItemDescription>
              </ProfItemContainer>
            ))}
          </ProfsContainer>
          <DescriptionContainer>
            <DescriptionTitle>{accountsBankAccounts.ac_bnk_hdtwo}</DescriptionTitle>
            <Description>{accountsBankAccounts.ac_bnk_hdtwo_Subpara}</Description>
          </DescriptionContainer>
        </DescriptionWrapper>
      </Section>
      <Section mainContent m={isMobile ? "0 auto" : "11rem auto"}>
        {infoBlocks.map((block, idx) => (
          <InfoBlockContainer reverse={idx % 2 !== 0} key={`info-block-item-${idx}`}>
            <InfoWrapper>
              <BlockTitle>{block.title}</BlockTitle>
              <BlockSubtitle>{block.subtitle}</BlockSubtitle>
              {typeof block.description === "string" ? (
                <Wrap sx={{ marginBottom: isMobile ? "5rem" : "auto" }}>{block.description}</Wrap>
              ) : (
                <InfoListContainer>
                  {block.description.map((desc, idx) => (
                    <InfoListItem key={`info-list-item-${idx}`}>{desc}</InfoListItem>
                  ))}
                </InfoListContainer>
              )}
              {!isMobile && (
                <Wrap sx={{ marginLeft: "auto" }}>
                  <ButtonArrow onClick={handleClickButton(block.link)}>Open Account</ButtonArrow>
                </Wrap>
              )}
            </InfoWrapper>
            <ImgWrapper>{block.blockImgSrc}</ImgWrapper>
            {isMobile && (
              <Wrap sx={{ marginLeft: "auto", marginTop: "3rem", marginRight: "2rem" }}>
                <ButtonArrow onClick={handleClickButton(block.link)}>Open Account</ButtonArrow>
              </Wrap>
            )}
          </InfoBlockContainer>
        ))}
      </Section>
    </>
  );
};

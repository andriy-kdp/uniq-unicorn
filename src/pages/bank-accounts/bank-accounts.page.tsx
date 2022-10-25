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
    {
      title: accountsBankAccounts.ac_bnk_mainhead_txtone,
      description: accountsBankAccounts.ac_bnk_sectionone_hdonetxt,
    },
    {
      title: accountsBankAccounts.ac_bnk_mainhead_txttwo,
      description: accountsBankAccounts.ac_bnk_sectionone_hdtwotxt,
    },
    {
      title: accountsBankAccounts.ac_bnk_mainhead_txtthree,
      description: accountsBankAccounts.ac_bnk_sectionone_hdthreetxt,
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
      title: accountsBankAccounts.ac_bnk_mainhead_txtone,
      subtitle: accountsBankAccounts.ac_bnk_sectiontwo_subhd,
      link: "/auth/register/private",
      description: [
        accountsBankAccounts.ac_bnk_sectiontwo_listleft_one,
        accountsBankAccounts.ac_bnk_sectiontwo_listright_one,
        accountsBankAccounts.ac_bnk_sectiontwo_listleft_two,
        accountsBankAccounts.ac_bnk_sectiontwo_listright_two,
        accountsBankAccounts.ac_bnk_sectiontwo_listleft_three,
        accountsBankAccounts.ac_bnk_sectiontwo_listright_three,
        accountsBankAccounts.ac_bnk_sectiontwo_listleft_four,
        accountsBankAccounts.ac_bnk_sectiontwo_listright_four,
        accountsBankAccounts.ac_bnk_sectiontwo_listleft_five,
      ],
      blockImgSrc: <CardIcon />,
    },
    {
      title: accountsBankAccounts.ac_bnk_mainhead_txttwo,
      subtitle: accountsBankAccounts.ac_bnk_sectionthree_subhd,
      link: "/auth/register/business",
      description: [
        accountsBankAccounts.ac_bnk_sectionthree_listleft_one,
        accountsBankAccounts.ac_bnk_sectionthree_listright_one,
        accountsBankAccounts.ac_bnk_sectionthree_listleft_two,
        accountsBankAccounts.ac_bnk_sectionthree_listright_two,
        accountsBankAccounts.ac_bnk_sectionthree_listleft_three,
        accountsBankAccounts.ac_bnk_sectionthree_listright_three,
        accountsBankAccounts.ac_bnk_sectionthree_listleft_four,
        accountsBankAccounts.ac_bnk_sectionthree_listright_four,
        accountsBankAccounts.ac_bnk_sectionthree_listleft_five,
        accountsBankAccounts.ac_bnk_sectionthree_listright_five,
        accountsBankAccounts.ac_bnk_sectionthree_listleft_six,
        accountsBankAccounts.ac_bnk_sectionthree_listright_six,
      ],
      blockImgSrc: <CaseIcon />,
    },
    {
      title: accountsBankAccounts.ac_bnk_mainhead_txtthree,
      subtitle: accountsBankAccounts.ac_bnk_sectionfour_subhd,
      link: "/auth/register/institutional",
      description: accountsBankAccounts.ac_bnk_sectionfour_paraone,

      blockImgSrc: <BuildingIcon />,
    },
  ];
  return (
    <>
      <SlideSection
        bgImage={BgImage}
        title={accountsBankAccounts.ac_bnk_mainhead}
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
            <DescriptionTitle>{accountsBankAccounts.ac_bnk_sectionone}</DescriptionTitle>
            <Description>{accountsBankAccounts.ac_bnk_sectiononetxt}</Description>
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
                  <ButtonArrow onClick={handleClickButton(block.link)}>
                    {accountsBankAccounts.ac_bnk_mainhead_actionname}
                  </ButtonArrow>
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

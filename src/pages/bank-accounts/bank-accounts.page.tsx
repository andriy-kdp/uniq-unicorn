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

const bankAccountProfs: { title: string; description: string }[] = [
  { title: "Private clients", description: "Easy account Openings" },
  { title: "Business clients ", description: "Banking without borders" },
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
    title: "PRIVATE CLIENTS",
    subtitle: "With your Private Account you can:",
    link: "/auth/register/private",
    description: [
      "Get Black Banx Debit Cards (virtual or physical) in different currencies",
      "Freely convert currencies between your accounts for Bank Interchange rates",
      "Send and receive payments with instant fund crediting, worldwide",
      "Manage and monitor your cards and accounts in real time",
      "Pay with your Black Banx Debit card worldwide",
      "Connect your virtual Black Banx with your phone to pay via NFC",
      "Hold funds, send and receive payments in more than 28 different currencies",
      "Transfer money to other Black Banx accounts in a split of seconds",
      "Configure your account and card limits by yourself",
    ],
    blockImgSrc: <CardIcon />,
  },
  {
    title: "BUSINESS CLIENTS",
    subtitle: "With your Business Account you can:",
    link: "/auth/register/business",
    description: [
      "Get Black Banx Debit Cards in different currencies for you or your people",
      "Freely convert currencies between your accounts for Bank Interchange rates",
      "Send and receive payments with instant fund crediting, worldwide",
      "Manage and monitor your cards and accounts in real time",
      "Pay with your Black Banx Debit card worldwide",
      "Track the status of incoming and outgoing transfers in seconds",
      "Hold funds, send and receive payments in more than 28 different currencies",
      "Transfer money to other Black Banx accounts in a split of seconds",
      "Configure your account and card limits by yourself",
      "Assign multiple users to manage and access your accounts",
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

export const BankAccountsPage: React.FC = (): JSX.Element => {
  const nav = useNavigate();
  const isMobile = useMediaQuery("sm");
  const handleClickButton = (path: string) => () => {
    nav(path);
  };

  return (
    <>
      <SlideSection
        bgImage={BgImage}
        title={"Instant currency conversion in over 28 currencies"}
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
                backgroundSize: "100%",
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
            <DescriptionTitle>Black Banx private and business accounts</DescriptionTitle>
            <Description>
              Black Banx is offering real time account opening for Private and Business clients in 180 countries. We
              provide global cross border payments and account opening in 28 currencies. With our proprietary software
              IRTP© recipients can get funds credited instantly on their bank accounts. Senders pay ten times less than
              traditional banking. Users can transact money through their account balances, Bitcoin or Debit Cards. You
              can open your account remotely on this website or using our mobile app on your smart phone. The account is
              set up in minutes, with our 24/7 real time verification and activation service.
            </Description>
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

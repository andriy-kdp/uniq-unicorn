import {
  CopyrightContainer,
  FooterLinkItem,
  FooterLinksContainer,
  FooterLinksGroup,
  FooterLinksTitle,
  SocialNetworksContainer,
  SocialNetworksLinks,
} from "./footer.styles";

import { ReactComponent as AppStoreIcon } from "../../../assets/icons/social/app_store_button.svg";
import { Divider } from "../../divider/divider.styles";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/social/facebook.svg";
import { FooterLinkGroup } from "./footer.types";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/social/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/social/linked_in.svg";
import React from "react";
import { Section } from "../../section/section.component";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/social/twitter.svg";

const footerLinks: FooterLinkGroup[] = [
  {
    title: "Black Banx Group",
    links: [
      { label: "About us", path: "" },
      { label: "Careers", path: "" },
      { label: "Fees", path: "" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Black Banx", path: "" },
      { label: "Policies & Terms", path: "" },
      { label: "Privacy Policy", path: "" },
    ],
  },
];

const socialNetworks: { label: string; icon: React.ReactNode; href: string }[] =
  [
    { label: "Facebook", icon: <FacebookIcon />, href: "" },
    { label: "Instagram", icon: <InstagramIcon />, href: "" },
    { label: "LinkedIn", icon: <LinkedInIcon />, href: "" },
    { label: "Twitter", icon: <TwitterIcon />, href: "" },
  ];

export const Footer = () => {
  return (
    <Section content>
      <FooterLinksContainer>
        {footerLinks.map((el) => (
          <FooterLinksGroup>
            <FooterLinksTitle>{el.title}</FooterLinksTitle>
            <Divider />
            {el.links.map((link) => (
              <FooterLinkItem to={link.path}>{link.label}</FooterLinkItem>
            ))}
          </FooterLinksGroup>
        ))}
        <FooterLinksGroup>
          <FooterLinksTitle>Connect</FooterLinksTitle>
          <Divider />
          <SocialNetworksContainer>
            <SocialNetworksLinks>
              {socialNetworks.map((soc) => (
                <a href={soc.href} title={soc.label}>
                  {soc.icon}
                </a>
              ))}
            </SocialNetworksLinks>
            $LANGUAGE_SELECT_MENU
            <AppStoreIcon />
          </SocialNetworksContainer>
        </FooterLinksGroup>
      </FooterLinksContainer>
      <CopyrightContainer>
        © 2021 Black Banx Inc. All rights reserved. Black Banx Inc. is
        authorised under Canadian law for providing financial services as MSB
        registration number M18324260.
      </CopyrightContainer>
    </Section>
  );
};

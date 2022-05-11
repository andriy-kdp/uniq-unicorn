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
import React, { useState } from "react";
import { Section } from "../../section/section.component";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/social/twitter.svg";
import { ReactComponent as FlagIconCn } from "../../../assets/icons/flags/flag_cn.svg";
import { ReactComponent as FlagIconEsp } from "../../../assets/icons/flags/flag_esp.svg";
import { ReactComponent as FlagIconPt } from "../../../assets/icons/flags/flag_pt.svg";
import { ReactComponent as FlagIconRu } from "../../../assets/icons/flags/flag_ru.svg";
import { ReactComponent as FlagIconUs } from "../../../assets/icons/flags/flag_us.svg";
import { SelectOption, SelectOptions } from "../../inputs/select/select.types";
import { Select } from "../../inputs/select/select.component";
import { Wrap } from "../../wrap/wrap.component";
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

const socialNetworks: { label: string; icon: React.ReactNode; href: string }[] = [
  { label: "Facebook", icon: <FacebookIcon />, href: "" },
  { label: "Instagram", icon: <InstagramIcon />, href: "" },
  { label: "LinkedIn", icon: <LinkedInIcon />, href: "" },
  { label: "Twitter", icon: <TwitterIcon />, href: "" },
];

const selectOptions: SelectOptions = [
  { id: "opt-1", label: "中文", value: "chinese", endIcon: <FlagIconCn /> },
  {
    id: "opt-2",
    label: "Español ",
    value: "espaniol",
    endIcon: <FlagIconEsp />,
  },
  {
    id: "opt-3",
    label: "Português",
    value: "portugues",
    endIcon: <FlagIconPt />,
  },
  {
    id: "opt-4",
    label: "Русский",
    value: "russian",
    endIcon: <FlagIconRu />,
  },
  {
    id: "opt-5",
    label: "English",
    value: "english",
    endIcon: <FlagIconUs />,
  },
];

const cities: string[] = ["Dubai ", "London ", "Toronto ", "Moscow", "Tokyo", "Shanghai", "Sao", "Paulo", "Cape Town"];

export const Footer = () => {
  const [language, setLanguage] = useState<SelectOption | null>(null);
  return (
    <Section mainContent>
      <FooterLinksContainer>
        {footerLinks.map((el, idx) => (
          <FooterLinksGroup key={`footer-link-group-${idx}`}>
            <FooterLinksTitle>{el.title}</FooterLinksTitle>
            {el.links.map((link, idx) => (
              <FooterLinkItem to={link.path} key={`footer-link-${idx}`}>
                {link.label}
              </FooterLinkItem>
            ))}
          </FooterLinksGroup>
        ))}

        <FooterLinksGroup>
          <FooterLinksTitle>Connect</FooterLinksTitle>
          <SocialNetworksContainer>
            <SocialNetworksLinks>
              {socialNetworks.map((soc, idx) => (
                <a href={soc.href} title={soc.label} key={`social-link-${idx}`}>
                  {soc.icon}
                </a>
              ))}
            </SocialNetworksLinks>
            <Wrap sx={{ maxWidth: "100%", marginLeft: "2rem" }}>
              <Select
                fullWidth
                options={selectOptions}
                value={language}
                onSelect={(e) => setLanguage(e.target.value)}
                optionsPosition={"top"}
                borderRadius={"small"}
              />
            </Wrap>

            <Wrap sx={{ marginLeft: "auto" }}>
              <AppStoreIcon />
            </Wrap>
          </SocialNetworksContainer>
          <Wrap
            sx={{
              display: "flex",
              fontSize: "1.4rem",
              marginTop: "1rem",
              width: "100%",
              alignSelf: "flex-end",
              justifyContent: "space-between",
            }}
          >
            {cities.map((city) => (
              <div key={city}>{city}</div>
            ))}
          </Wrap>
        </FooterLinksGroup>
      </FooterLinksContainer>
      <CopyrightContainer>
        © 2021 Black Banx Inc. All rights reserved. Black Banx Inc. is authorised under Canadian law for providing
        financial services as MSB registration number M18324260.
      </CopyrightContainer>
    </Section>
  );
};

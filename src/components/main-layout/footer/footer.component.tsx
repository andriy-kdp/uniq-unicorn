import {
  CopyrightContainer,
  FooterLinkItem,
  FooterLinksRoot,
  FooterLinksGroup,
  FooterLinksTitle,
  FooterRoot,
} from "./footer.styles";

import { ReactComponent as FacebookIcon } from "../../../assets/icons/social/facebook.svg";
import { FooterLinkGroup } from "./footer.types";
import { ReactComponent as InstagramIcon } from "../../../assets/icons/social/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../../assets/icons/social/linked_in.svg";
import React, { useEffect, useState } from "react";
import { Section } from "../../section/section.component";
import { ReactComponent as TwitterIcon } from "../../../assets/icons/social/twitter.svg";
import { ReactComponent as FlagIconCn } from "../../../assets/icons/flags/flag_cn.svg";
import { ReactComponent as FlagIconEsp } from "../../../assets/icons/flags/flag_esp.svg";
import { ReactComponent as FlagIconPt } from "../../../assets/icons/flags/flag_pt.svg";
import { ReactComponent as FlagIconRu } from "../../../assets/icons/flags/flag_ru.svg";
import { ReactComponent as FlagIconUs } from "../../../assets/icons/flags/flag_us.svg";
import { SelectHandler, SelectOption, SelectOptions } from "../../inputs/select/select.types";
import { Wrap } from "../../wrap/wrap.component";
import { useMediaQuery } from "../../../utils/use-media-query";
import { FooterConnect } from "./parts/connect.component";
import { SelectLanguageAppLink } from "./parts/language-select-app";
import { useDispatch, useSelector } from "../../../redux/store";
import { uiDataLanguageList, uiDataWebsiteText } from "../../../redux/uiData/selectors";
import { setSelectedLanguage } from "../../../redux/uiData/slice";

export const socialNetworks: {
  label: string;
  icon: React.ReactNode;
  href: string;
}[] = [
  { label: "Twitter", icon: <TwitterIcon />, href: "" },
  // { label: "LinkedIn", icon: <LinkedInIcon />, href: "" },
  // { label: "Facebook", icon: <FacebookIcon />, href: "" },
  { label: "Instagram", icon: <InstagramIcon />, href: "" },
];

// export const selectOptions: SelectOptions = [
//   {
//     id: "opt-1",
//     label: "中文",
//     value: "chinese",
//     endIcon: <FlagIconCn />,
//     abbr: "中文",
//   },
//   {
//     id: "opt-2",
//     label: "Español ",
//     value: "espaniol",
//     endIcon: <FlagIconEsp />,
//     abbr: "ESP",
//   },
//   {
//     id: "opt-3",
//     label: "Português",
//     value: "portugues",
//     endIcon: <FlagIconPt />,
//     abbr: "PT",
//   },
//   {
//     id: "opt-4",
//     label: "Русский",
//     value: "russian",
//     endIcon: <FlagIconRu />,
//     abbr: "RU",
//   },
//   {
//     id: "opt-5",
//     label: "English",
//     value: "english",
//     endIcon: <FlagIconUs />,
//     abbr: "EN",
//   },
// ];

export const Footer = () => {
  const { common } = useSelector(uiDataWebsiteText);
  const isMobile = useMediaQuery("sm");

  const languageList = useSelector(uiDataLanguageList);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState<SelectOption | null>(null);

  const handleSetLanguage: SelectHandler = (e) => {
    const { value } = e.target;
    setLanguage(value);
    dispatch(setSelectedLanguage(value));
  };

  useEffect(() => {
    languageList && setLanguage(languageList[0]);
  }, [languageList]);

  const footerLinks: FooterLinkGroup[] = [
    {
      title: common.hf_foot_left_headOne,
      links: [
        { label: common.hf_head_one_rt, path: "/mission" },
        { label: common.hf_foot_left_lineTwo, path: "/careers" },
        { label: common.hf_head_one_rt_subfive, path: "/careers" },
        { label: common.hf_foot_left_lineFour, path: "/careers" },
        { label: common.hf_foot_left_lineFive, path: "/careers" },
        { label: common.hf_foot_left_lineSix, path: "/careers" },
        { label: common.hf_foot_left_lineSeven, path: "/leadership" },
        { label: common.hf_foot_left_lineEight, path: "/contact" },
        { label: common.hf_foot_left_lineNine, path: "/financialStatements" },
      ],
    },
    {
      title: common.hf_foot_mid_headOne,
      links: [
        { label: common.hf_foot_mid_headOne_lineOne, path: "/terms" },
        { label: common.hf_foot_mid_headOne_lineTwo, path: "/terms" },
        { label: common.hf_foot_mid_headOne_lineThree, path: "/terms" },
        { label: common.hf_foot_mid_headOne_lineFour, path: "/privacy_policy" },
        { label: common.hf_foot_mid_headOne_lineFive, path: "/privacy_policy" },
        { label: common.hf_foot_mid_headOne_lineSix, path: "/privacy_policy" },
        { label: common.hf_foot_mid_headOne_lineSeven, path: "/privacy_policy" },
        { label: common.hf_foot_mid_headOne_lineEight, path: "/privacy_policy" },
        { label: common.hf_foot_mid_headOne_lineNine, path: "/privacy_policy" },
      ],
    },
    {
      title: common.hf_foot_mid_headTwo,
      links: [
        { label: common.hf_foot_mid_headTwo_lineOne, path: "/fees/0" },
        { label: common.hf_foot_mid_headTwo_lineTwo, path: "/fees/1" },
        { label: common.hf_foot_mid_headTwo_lineThree, path: "/fees/2" },
        { label: common.hf_foot_mid_headTwo_lineFour, path: "/fees/3" },
      ],
    },
  ];
  return (
    <Section mainContent>
      <FooterRoot>
        {isMobile && <FooterConnect />}
        <FooterLinksRoot>
          {footerLinks.map((el, idx) => (
            <FooterLinksGroup key={`footer-link-group-${idx}`} maxContent>
              <FooterLinksTitle>{el.title}</FooterLinksTitle>
              {el.links.map((link, idx) => (
                <FooterLinkItem to={link.path} key={`footer-link-${idx}`}>
                  {link.label}
                </FooterLinkItem>
              ))}
            </FooterLinksGroup>
          ))}
        </FooterLinksRoot>
        {!isMobile ? (
          <FooterConnect>
            {/* <SelectLanguageAppLink options={languageList} language={language} onSelect={handleSetLanguage} /> */}
          </FooterConnect>
        ) : (
          <Wrap sx={{ display: "flex", width: "100%", marginTop: "2rem" }}>
            <SelectLanguageAppLink options={languageList} language={language} onSelect={handleSetLanguage} reverse />
          </Wrap>
        )}
      </FooterRoot>
      <CopyrightContainer>
        {common.hf_foot_right_lineTwo}
        {/* © 2021 Black Banx Inc. All rights reserved. Black Banx Inc. is authorised under Canadian law for providing
        financial services as MSB registration number M18324260. */}
      </CopyrightContainer>
      <CopyrightContainer>{common.hf_foot_right_lineThree}</CopyrightContainer>
    </Section>
  );
};

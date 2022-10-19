import React, { PropsWithChildren } from "react";
import { CitiesContainer, FooterLinksTitle, SocialNetworkLinkIcon, SocialNetworksLinks } from "../footer.styles";

import { useMediaQuery } from "../../../../utils/use-media-query";
import { socialNetworks } from "../footer.component";
import { FooterConnectOptions, FooterConnectRoot } from "./connect.styles";
import { useSelector } from "../../../../redux/store";
import { uiDataWebsiteText } from "../../../../redux/uiData/selectors";

export const FooterConnect: React.FC<PropsWithChildren<any>> = (props): JSX.Element => {
  const { common } = useSelector(uiDataWebsiteText);
  const { children } = props;
  const isMobile = useMediaQuery("xs");

  // const cities: string[] = [
  //   common.hf_foot_cntryone,
  //   common.hf_foot_cntrytwo,
  //   common.hf_foot_cntrythree,
  //   common.hf_foot_cntryfour,
  //   common.hf_foot_cntryfive,
  //   common.hf_foot_cntrysix,
  //   common.hf_foot_cntryseven,
  //   common.hf_foot_cntryeight,
  // ];

  return (
    <FooterConnectRoot>
      <FooterLinksTitle withSocialLinks={isMobile}>
        {"Connect"}
        {isMobile && (
          <SocialNetworksLinks small={isMobile}>
            {socialNetworks.map((soc, idx) => (
              <SocialNetworkLinkIcon href={soc.href} title={soc.label} key={`social-link-${idx}`}>
                {soc.icon}
              </SocialNetworkLinkIcon>
            ))}
          </SocialNetworksLinks>
        )}
      </FooterLinksTitle>
      <FooterConnectOptions>
        {!isMobile && (
          <SocialNetworksLinks>
            {socialNetworks.map((soc, idx) => (
              <SocialNetworkLinkIcon href={soc.href} title={soc.label} key={`social-link-${idx}`}>
                {soc.icon}
              </SocialNetworkLinkIcon>
            ))}
          </SocialNetworksLinks>
        )}
        {children}
      </FooterConnectOptions>

      {/* <CitiesContainer>
        {cities.map((city: string, idx) => (
          <div key={idx + city}>{city}</div>
        ))}
      </CitiesContainer> */}
    </FooterConnectRoot>
  );
};

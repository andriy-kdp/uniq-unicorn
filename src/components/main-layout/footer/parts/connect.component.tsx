import React, { PropsWithChildren } from "react";
import {
  CitiesContainer,
  FooterLinksGroup,
  FooterLinksTitle,
  SocialNetworkLinkIcon,
  SocialNetworksContainer,
  SocialNetworksLinks,
} from "../footer.styles";

import { useMediaQuery } from "../../../../utils/use-media-query";
import { cities, socialNetworks } from "../footer.component";
import { Wrap } from "../../../wrap/wrap.component";
import { FooterConnectOptions, FooterConnectRoot } from "./connect.styles";

export const FooterConnect: React.FC<PropsWithChildren<any>> = (
  props,
): JSX.Element => {
  const { children } = props;
  const isMobile = useMediaQuery("xs");
  return (
    <FooterConnectRoot>
      <FooterLinksTitle withSocialLinks={isMobile}>
        Connect
        {isMobile && (
          <SocialNetworksLinks small={isMobile}>
            {socialNetworks.map((soc, idx) => (
              <SocialNetworkLinkIcon
                href={soc.href}
                title={soc.label}
                key={`social-link-${idx}`}
              >
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
              <SocialNetworkLinkIcon
                href={soc.href}
                title={soc.label}
                key={`social-link-${idx}`}
              >
                {soc.icon}
              </SocialNetworkLinkIcon>
            ))}
          </SocialNetworksLinks>
        )}
        {children}
      </FooterConnectOptions>

      <CitiesContainer>
        {cities.map((city) => (
          <div key={city}>{city}</div>
        ))}
      </CitiesContainer>
    </FooterConnectRoot>
  );
};

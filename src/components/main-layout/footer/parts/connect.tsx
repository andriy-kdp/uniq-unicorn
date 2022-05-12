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

export const FooterConnect: React.FC<PropsWithChildren<any>> = (props): JSX.Element => {
  const { children } = props;
  const isMobile = useMediaQuery("xs");
  return (
    <FooterLinksGroup width={"56%"}>
      <FooterLinksTitle withSocialLinks={isMobile}>
        Connect
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
      <SocialNetworksContainer>
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
      </SocialNetworksContainer>
      <CitiesContainer>
        {cities.map((city) => (
          <div key={city}>{city}</div>
        ))}
      </CitiesContainer>
    </FooterLinksGroup>
  );
};

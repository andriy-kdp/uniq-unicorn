import { Link } from "react-router-dom";
import styled from "styled-components";
import { CSSProperties } from "react";
import { media } from "../../../utils/use-media-query";

export const FooterRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 0fr;
  margin: 2rem 0;
  gap: 2rem;
  width: 100%;
  @media (${media.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const FooterLinksRoot = styled.div`
  display: grid;
  //display: flex;
  flex-wrap: wrap;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2rem;
`;

export const FooterLinksGroup = styled.div<{
  maxContent?: boolean;
  width?: CSSProperties["width"];
}>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: ${(props) => props.width || "100%"};
  ${(props) =>
    props.maxContent &&
    `
    min-width: max-content;
  `}
`;

export const FooterLinkItem = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-top: 1rem;
`;

export const CopyrightContainer = styled.div`
  display: flex;
  width: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  justify-content: start;
  margin: 2rem 0;
  text-align: justify;
`;

export const SocialNetworkLinkIcon = styled.a`
  display: block;
  margin-right: 1rem;
`;

export const SocialNetworksLinks = styled.div<{ small?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${(props) =>
    props.small &&
    `

  & ${SocialNetworkLinkIcon} {
    margin-left: 1.4rem;
    line-height: 0;
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  `}
`;

export const FooterLinksTitle = styled.h6<{ withSocialLinks?: boolean }>`
  padding: 0.6rem 0;
  border-bottom: 1px solid #fff;
  ${(props) =>
    props.withSocialLinks &&
    `
    display: flex;
    align-items: flex-end;

    ${SocialNetworksLinks} {
        justify-content: flex-end;
    }
    
  `}
`;

export const CitiesContainer = styled.div`
  display: flex;
  font-size: 1.4rem;
  margin-top: 1rem;
  width: 100%;
  align-self: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (${media.xs}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

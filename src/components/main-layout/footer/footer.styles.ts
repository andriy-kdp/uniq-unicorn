import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterLinksContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 30% 30% 40%;
  column-gap: 2rem;
`;

export const FooterLinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`;

export const FooterLinksTitle = styled.h6`
  margin-bottom: 0.6rem;
`;

export const FooterLinkItem = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
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
  justify-content: center;
`;

export const SocialNetworksContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 40% 30% 30%;
  column-gap: 3rem;
`;
export const SocialNetworksLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

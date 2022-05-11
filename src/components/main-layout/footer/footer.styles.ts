import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterLinksContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 25% 25% 50%;
  column-gap: 2rem;
  margin: 2rem 0;
`;

export const FooterLinksGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`;

export const FooterLinksTitle = styled.h6`
  padding: 0.6rem 0;
  border-bottom: 1px solid #fff;
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
  justify-content: center;
  margin: 2rem 0;
  text-align: justify;
`;

export const SocialNetworksContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1.5fr 1fr 1fr;
  column-gap: 3rem;
  margin-top: 0.7rem;
`;
export const SocialNetworksLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

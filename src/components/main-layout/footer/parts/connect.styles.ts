import styled from "styled-components";
import { media } from "../../../../utils/use-media-query";

export const FooterConnectRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectLanguageAppLinkRoot = styled.div`
  @media (${media.sm}) {
    flex-direction: row-reverse;
    max-width: 26rem;
  }
`;
export const FooterConnectOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 1rem;
`;

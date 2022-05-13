import styled from "styled-components";
import { media } from "../../utils/use-media-query";

const SocialTitleRoot = styled.div`
  display: flex;
  width: 100%;
  @media (${media.sm}) {
    flex-direction: column-reverse;
  }
`;

const SocialTitleDate = styled.span`
  font-size: 1.3rem;
  line-height: 1.6rem;
  margin-right: 2.8rem;
`;
const SocialTitleText = styled.h6`
  line-height: 1.8rem;
`;

export const SocT = {
  Root: SocialTitleRoot,
  Date: SocialTitleDate,
  Text: SocialTitleText,
};

import styled from "styled-components";

const SocialTitleRoot = styled.div`
  display: flex;
  width: 100%;
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

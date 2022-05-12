import styled from "styled-components";
import { media } from "../../utils/use-media-query";

export const MobileAppTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const MobileAppImage = styled.img`
  position: relative;
  width: 100%;
  max-width: 43rem;
`;

export const CryptoBenefitsTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 4.4rem;
  line-height: 5.7rem;
  text-transform: uppercase;
  margin-bottom: 7rem;

  @media (${media.sm}) {
    font-size: 3.2rem;
    line-height: 4.2rem;
    text-align: center;
    width: 100%;
    margin-top: 11rem;
  }
`;

export const MobileAppContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (${media.sm}) {
    flex-direction: column;
    ${MobileAppTitle} {
      margin-bottom: 4rem;
    }
    ${MobileAppImage} {
      margin-bottom: 6rem;
    }
  }
`;

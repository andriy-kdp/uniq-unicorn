import styled from "styled-components";

export const MobileAppContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const MobileAppTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.colors.text.secondary};
`;

export const CryptoBenefitsTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 4.4rem;
  line-height: 5.7rem;
  text-transform: uppercase;
  margin-bottom: 7rem;
`;

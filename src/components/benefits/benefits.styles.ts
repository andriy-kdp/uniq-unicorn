import styled from "styled-components";

export const BenefitsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const BenefitItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BenefitIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BenefitTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 4.4rem;
  line-height: 5.7rem;
  text-align: justify;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const BenefitsDescription = styled.h5`
  letter-spacing: 0.015em;
  text-align: center;
`;

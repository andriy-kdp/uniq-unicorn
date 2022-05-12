import { BenefitsProps } from "./benefits.types";
import styled from "styled-components";

export const BenefitItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
  margin: 2rem 0 1rem;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const BenefitsDescription = styled.h5`
  letter-spacing: 0.015em;
  text-align: center;
`;

export const BenefitsContainer = styled.div<Omit<BenefitsProps, "items">>`
  width: 100%;
  display: grid;
  column-gap: 5rem;
  row-gap: 5rem;
  grid-template-columns: ${(props) => (props.vertical ? "1fr" : "1fr 1fr 1fr")};
  ${(props) =>
    props.secondary &&
    `
    ${BenefitTitle} {
      font-style: normal;
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 4.8rem;
      text-align: center;
      color: #F2F2F2;
      text-transform: none;
      text-align: left;
      margin: 2.5rem 0 1.3rem;
    };
    ${BenefitsDescription} {
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 28px;
      text-align: justify;
      letter-spacing: 0.015em;
      color: #A3A3A3;
    };
    ${BenefitIconContainer} {
      justify-content: flex-start;
    };
    ${BenefitItemContainer} {
      align-items: flex-start;
    }
  `}
  ${(props) =>
    props.centered &&
    `
      ${BenefitItemContainer} {
          align-items: center ;
    }
  `}
`;

import { Description } from "./../bank-accounts/bank-accounts.styles";
import styled from "styled-components";
const PlanInfoRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PlanInfoTitle = styled.h2`
  display: flex;
  width: 100%;
`;

const PlanInfoDescriptionRoot = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 6rem;
`;

const FindCountryRoot = styled.div`
  display: grid;
  width: 100%;
  grid-template-areas:
    "country title"
    "country search";
  grid-template-columns: 1fr 76rem;
  grid-column-gap: 8rem;
  grid-row-gap: 2.4rem;
`;

const FindCountryTitle = styled.h3`
  line-height: 4.7rem;
  text-align: justify;
`;

const FindCountryListItem = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  color: ${(props) => props.theme.colors.text.secondary};
  :not(:last-child) {
    margin-bottom: 2.8rem;
  }
`;

export const PlanInfo = {
  Root: PlanInfoRoot,
  Title: PlanInfoTitle,
  Description: PlanInfoDescriptionRoot,
};

export const FindCountry = {
  Root: FindCountryRoot,
  Title: FindCountryTitle,
  Countries: {
    Item: FindCountryListItem,
  },
};

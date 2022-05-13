import styled from "styled-components";
import { media } from "../../utils/use-media-query";
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
  grid-template-columns: 1fr 1fr;
  column-gap: 6rem;
  @media (${media.sm}) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
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

  @media (${media.md}) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
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

  @media (${media.md}) {
    margin-bottom: 0 !important;
  }
`;

const PlanInfoImg = styled.img`
  position: relative;
  width: 100%;
  @media (${media.md}) {
    margin: 3rem auto !important;
  }
`;

export const PlanInfo = {
  Root: PlanInfoRoot,
  Title: PlanInfoTitle,
  Description: PlanInfoDescriptionRoot,
  Img: PlanInfoImg,
};

export const FindCountry = {
  Root: FindCountryRoot,
  Title: FindCountryTitle,
  Countries: {
    Item: FindCountryListItem,
  },
};

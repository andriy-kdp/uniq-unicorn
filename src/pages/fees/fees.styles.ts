import styled from "styled-components";
import { media } from "../../utils/use-media-query";
const PlanInfoRoot = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 144rem;
  @media (${media.sm}) {
    padding-right: 4rem;
  }
`;

const PlanInfoWrapper = styled.div<{ visibleSize: number; currentSlide: number }>`
  display: flex;
  flex-wrap: nowrap;
  min-width: max-content;
  height: 100%;
  transition: all 300ms ease-in-out;
  transform: translateX(-${(props) => props.visibleSize * props.currentSlide}px);
`;

const PlanInfoTitle = styled.h2`
  display: flex;
  width: 100%;
  @media (${media.sm}) {
    margin: 3rem auto;
  }
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
  width: 70%;
  @media (${media.md}) {
    margin: 3rem auto !important;
  }
`;

export const PlanInfo = {
  Wrapper: PlanInfoWrapper,
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

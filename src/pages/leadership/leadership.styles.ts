import styled from "styled-components";
import { media } from "../../utils/use-media-query";

const CardItem = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin: 9rem 0rem 0rem;
`;

const CardRoot = styled.div`
  max-width: 25rem;
  background-color: #5c5c5c;
  margin: 0 auto 15.1rem;
  border-radius: 5px;
  cursor: pointer;
  @media (${media.sm}) {
  }
`;

const CardWrapper = styled.div`
  padding: 0.4rem 1rem;
`;

const CardTitle = styled.h2`
  display: flex;
  width: 100%;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.6rem;
  @media (${media.sm}) {
  }
`;

const CardDescription = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
`;

const CardImg = styled.img`
  width: 100%;
  @media (${media.md}) {
  }
`;

export const Card = {
  Item: CardItem,
  Wrapper: CardWrapper,
  Root: CardRoot,
  Title: CardTitle,
  Description: CardDescription,
  Img: CardImg,
};

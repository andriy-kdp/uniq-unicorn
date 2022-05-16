import styled from "styled-components";
import { media } from "../../utils/use-media-query";

const NewsRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NewsItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16rem;
  cursor: pointer;
  @media (${media.sm}) {
    margin-bottom: 3rem;
  }
`;

const NewsItemPreviewRoot = styled.div<{ multiImages?: boolean }>`
  display: grid;
  width: 100%;
  grid-template-areas:
    "image"
    "separator"
    "description";
  grid-template-columns: 1fr;
  column-gap: 3rem;
  row-gap: 3rem;

  ${(props) =>
    props.multiImages &&
    `
    grid-template-areas:
    "image image-secondary"
    "image description";
    grid-template-columns: 1fr 1fr;
  `};

  @media (${media.sm}) {
    grid-template-areas:
      "image"
      "image-secondary"
      "description";
    grid-template-columns: 1fr;
  }
`;

const NewsItemDescription = styled.div`
  grid-area: description;
  font-size: 1.4rem;
  line-height: 1.8rem;
`;

export const News = {
  Root: NewsRoot,
  Item: {
    Root: NewsItemRoot,
    Preview: NewsItemPreviewRoot,
    Description: NewsItemDescription,
  },
};

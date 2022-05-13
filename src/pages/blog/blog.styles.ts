import styled from "styled-components";
import { media } from "../../utils/use-media-query";
const BlogPreviewRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16rem;
  cursor: pointer;
  @media (${media.sm}) {
    margin-bottom: 3rem;
  }
`;

const BlogPReviewDescription = styled.div`
  margin-top: 2.4rem;
`;
const BlogPreviewImageRoot = styled.div`
  display: flex;
  margin: 1rem auto 3.1rem;
  & img {
    position: relative;
    width: 100%;
  }
`;

const ArticleTitleRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleTitleDate = styled.span``;

const ArticleTitleText = styled.h3``;

export const Blog = {
  Preview: {
    Root: BlogPreviewRoot,
    Image: {
      Root: BlogPreviewImageRoot,
    },
    Description: BlogPReviewDescription,
  },
  Article: {
    Title: {
      Root: ArticleTitleRoot,
      Date: ArticleTitleDate,
      Text: ArticleTitleText,
    },
  },
};

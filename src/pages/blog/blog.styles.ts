import styled from "styled-components";
const BlogPreviewRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogPReviewDescription = styled.div``;
const BlogPreviewImageRoot = styled.div`
  display: flex;
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

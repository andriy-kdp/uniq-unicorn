import styled from "styled-components";
const BlogPreviewRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BlogPreviewTitleRoot = styled.div`
  display: flex;
  width: 100%;
`;

const BlogPreviewTitleDate = styled.div``;
const BlogPreviewTitleText = styled.div``;
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
    Title: {
      Root: BlogPreviewTitleRoot,
      Date: BlogPreviewTitleDate,
      Text: BlogPreviewTitleText,
    },
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

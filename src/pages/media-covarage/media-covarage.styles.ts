import styled from "styled-components";
import { ArticleItem } from "./media-coverage.page";

const NewsSectionRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NewsSectionTitleRoot = styled.div`
  display: flex;
  width: 100%;
`;

const NewsSectionTitle = styled.h4`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: 0.135em;
  color: #ffffff;
`;

const ArticlesRoot = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-areas:
    "big small-top"
    "big small-bottom";
  grid-template-columns: 75.2rem 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;

  ${(props) =>
    props.reverse &&
    `
    grid-template-areas:
      "small-top big"
      "small-bottom big";
    grid-template-columns: 1fr 75.2rem;
  `}
`;

const ArticleItemRoot = styled.div<Pick<ArticleItem, "size" | "imgSrc">>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-area: ${(props) => props.size};
  background: url(${(props) => props.imgSrc});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2.2rem 2.4rem;
`;

const ArticleDate = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #e0e0e0;
`;

const ArticleTitle = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: #f2f2f2;
`;

const ArticleDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: justify;
  color: #bdbdbd;
`;

export const News = {
  Root: NewsSectionRoot,
  Title: {
    Root: NewsSectionTitleRoot,
    Body: NewsSectionTitle,
  },
  Articles: {
    Root: ArticlesRoot,
    Item: {
      Root: ArticleItemRoot,
      Date: ArticleDate,
      Title: ArticleTitle,
      Description: ArticleDescription,
    },
  },
};

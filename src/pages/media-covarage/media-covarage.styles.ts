import styled from "styled-components";
import { ArticleItem } from "./media-coverage.page";
import { media } from "../../utils/use-media-query";

const NewsSectionRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  :not(:last-child) {
    margin-bottom: 16rem;
  }
  @media (${media.sm}) {
    margin-bottom: 4rem !important;
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;

const NewsSectionTitleRoot = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 4.5rem;
`;

const NewsSectionTitle = styled.h4`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: 0.135em;
  color: #ffffff;
  margin-right: 2rem;
  text-transform: uppercase;
  min-width: max-content;
`;

const ArticlesRoot = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-areas:
    "big small-top"
    "big small-bottom";
  grid-template-columns: 2fr 1fr;
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
  `};

  @media (${media.md}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (${media.sm}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "small-top"
      "big"
      "small-bottom";
    grid-template-rows: 1fr 1fr 2fr;
  }
`;

const ArticleItemRoot = styled.div<Pick<ArticleItem, "size" | "imgSrc">>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  grid-area: ${(props) => props.size};
  background: url(${(props) => props.imgSrc}) no-repeat center;
  background-size: cover;
  padding: 2.2rem 2.4rem;
  cursor: pointer;
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

const FormTitle = styled.h3`
  margin-bottom: 4rem;
`;
const FormSubtitle = styled.span`
  text-transform: uppercase;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin-bottom: 3rem;
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
  Form: {
    Title: FormTitle,
    Subtitle: FormSubtitle,
  },
};

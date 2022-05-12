import styled from "styled-components";
import { media } from "../../utils/use-media-query";

export const PostItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 46%;
  min-width: 35rem;
`;

export const PostTitle = styled.h2`
  text-transform: uppercase;
  line-height: 6.7rem;
  min-height: 13rem;
`;

export const PostSubtitle = styled.h6`
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin: 6rem auto 2.2rem;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const PostDescriptiotn = styled.div`
  text-align: justify;
  color: #d4d4d4;
`;

export const PostImage = styled.img``;

const SecurityPostsRoot = styled.div`
  max-width: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 4%;
  justify-content: center;

  @media (${media.md}) {
    & ${PostTitle} {
      font-size: 3.6rem;
      line-height: 4.4rem;
    }
  }

  @media (${media.sm}) {
    & ${PostTitle} {
      margin: 3rem auto 1rem;
      min-height: 0;
    }
  }
`;

export const SecPosts = {
  Root: SecurityPostsRoot,
  Item: {
    Root: PostItemRoot,
    Title: PostTitle,
    Image: PostImage,
    Descriptiotn: PostDescriptiotn,
    Subtitle: PostSubtitle,
  },
};

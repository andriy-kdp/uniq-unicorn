import styled from "styled-components";

const SecurityPostsRoot = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 6rem;
`;

export const PostItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PostTitle = styled.h2`
  text-transform: uppercase;
  line-height: 6.7rem;
`;

export const PostSubtitle = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: ${(props) => props.theme.colors.text.primary};
`;

export const PostDescriptiotn = styled.div`
  text-align: justify;
`;

export const PostImage = styled.img``;

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

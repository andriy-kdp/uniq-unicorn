import styled from "styled-components";
import { media } from "../../utils/use-media-query";

export const MainHeader = styled.h1``;

export const DownloadAppHeader = styled.h6`
  font-size: 2.4rem;
  line-height: 3.6rem;
`;

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 76.8rem;
  border: 0;
  @media (${media.sm}) {
     {
      height: 30rem;
    }
  }
`;

export const VideoCover = styled.div<{ bgImage: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 76.8rem;
  cursor: pointer;
  background: url(${(props) => props.bgImage});
  @media (${media.sm}) {
     {
      height: 30rem;
    }
  }
  &:hover {
    svg {
      transition-duration: 200ms;

      transform: scale(1.5);
    }
  }
`;

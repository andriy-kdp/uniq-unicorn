import { SectionProps } from "./section.types";
import styled from "styled-components";
import { media } from "../../utils/use-media-query";

export const Section = styled.div<SectionProps>`
  position: ${(props) => props.pos || "relative"};

  width: 100%;
  margin: ${(props) => props.m || "0 auto"};
  height: ${(props) => props.h || "inherit"};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.p || "0"};
  background: url(${(props) => props.bgImg});
  background-repeat: no-repeat;
  background-position: ${(props) => props.bgImgPosition || "auto"};
  min-height: ${(props) => props.mh || "auto"};
  ${(props) =>
    props.mainContent &&
    `
  max-width: 1440px;
  width: 100%;
  // padding: 0 15rem;
  @media (${media.xl}) {
    padding: 0;
  };
  @media (${media.lg}) {
    padding: 0 15rem;
  };
  @media (${media.md}) {
    padding: 0 10rem;
  };
  @media (${media.md}) {
    padding: 0 10rem;
  };
  @media (${media.sm}) {
    padding: 0 5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media (${media.sm}) {
    padding: 0 2rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  `}
`;

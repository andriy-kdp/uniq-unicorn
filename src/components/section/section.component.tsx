import { ContentProps } from "./section.types";
import styled from "styled-components";

export const Section = styled.div<ContentProps>`
  position: ${(props) => props.pos || "relative"};
  max-width: 144rem;
  width: 100%;
  margin: ${(props) => props.m || "0 auto"};
  height: ${(props) => props.h || "inherit"};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.p || "0"};
  background: url(${(props) => props.bgImg});
  min-height: ${(props) => props.mh || "auto"};
  ${(props) =>
    props.content &&
    `
  max-width: 114rem;

  `}
`;

import { ContentProps } from "./content.types";
import styled from "styled-components";

export const Content = styled.div<ContentProps>`
  position: ${(props) => props.pos || "relative"};
  max-width: ${(props) => props.w || "114rem"};
  width: 100%;
  margin: ${(props) => props.m || "0 auto"};
  height: ${(props) => props.h || "inherit"};
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  padding: ${(props) => props.p || "0"};
`;

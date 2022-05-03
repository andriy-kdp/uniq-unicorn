import { ContentProps } from "./content.types";
import styled from "styled-components";

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  padding: ${(props) => props.padding || "0 15rem"};
`;

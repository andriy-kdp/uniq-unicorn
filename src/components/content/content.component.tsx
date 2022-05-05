import { ContentProps } from "./content.types";
import styled from "styled-components";

export const Content = styled.div<ContentProps>`
  width: 114rem;
  margin: 0 auto;
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
`;

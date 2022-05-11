import { PaperProps } from "./paper.types";
import styled from "styled-components";
export const Paper = styled.div<PaperProps>(({ sx, ...rest }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "1rem",
  width: "100%",
  height: "100%",
  background: rest.theme.colors.background.primary,
  ...sx,
}));

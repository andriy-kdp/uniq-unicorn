import { DividerProps } from "./divider.types";
import styled from "styled-components";

export const Divider = styled.hr<DividerProps>`
  display: block;
  height: 1px;
  width: ${(props) => props.width || "100%"};
  border: none;
  background: #fff;
  margin: 0 auto;
  ${(props) =>
    props.variant === "dashed" &&
    `
    background: 0;
    border-width: 1px;
    border-style: dashed;
    border-color: ${props.theme.colors.text.primary}
  `};
  ${(props) =>
    props.position === "left" && `margin-right: auto; margin-left: 0;`};
  ${(props) =>
    props.position === "right" && `margin-left: auto; margin-right: 0;`}
`;

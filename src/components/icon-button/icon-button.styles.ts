import styled from "styled-components";
import { IconButtonProps } from "./icon-button.types";

export const IconButtonRoot = styled.button<IconButtonProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  transform: ${(props) => (props.reverse ? "rotate(180deg)" : "none")};
  ${(props) => props.disabled && "opacity: 0.4; cursor: default"}
`;

import { ButtonArrowProps } from "./button-arrow.types";
import styled from "styled-components";

export const ButtonArrowText = styled.p`
  margin-right: 1rem;
`;

export const ButtonArrowContainer = styled.button<ButtonArrowProps>`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border: none;
  outline: none;
  background: none;
  font-size: 2rem;
  line-height: 2.8rem;
  color: #fff;
  max-width: max-content;
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props) => (!props.disabled ? "pointer" : "default")};
  ${(props) =>
    props.direction === "left" &&
    `
    flex-direction: row-reverse;
    & ${ButtonArrowText} {
      margin-right: 0;
      margin-left: 1rem;
    };
    svg {
      transform: rotate(180deg);
    }
  `}
`;

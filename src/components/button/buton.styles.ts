import styled from "styled-components";
import { ButtonProps } from "./button.types";

export const ButtonContainer = styled.button<Omit<ButtonProps, "onClick">>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: ${(props) => props.theme.colors.backgound.primary};
  color: red;
  transition-duration: 200ms;
  border: 1px solid ${(props) => props.theme.colors.text.secondary};
  padding: 0.7rem 2.4rem;
  border-radius: 1.6rem;
  color: ${(props) => props.theme.colors.text.secondary};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.text.secondary};
    color: ${(props) => props.theme.colors.text.button.dark};
  }
  &:active {
    background-color: ${(props) => props.theme.colors.text.tertiary};
  }

  ${(props) =>
    props.selected &&
    `background: ${props.theme.colors.text.secondary};
    color: ${props.theme.colors.text.button.dark};
  `}
`;

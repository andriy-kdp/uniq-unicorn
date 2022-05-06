import { ButtonArrowProps } from "./button-arrow.types";
import styled from "styled-components";

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
  cursor: pointer;
`;

export const ButtonArrowText = styled.p`
  margin-right: 1rem;
`;

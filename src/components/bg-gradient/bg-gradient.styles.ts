import { BgGradientType } from "./bg-gradient.types";
import styled from "styled-components";

export const BgGradientContainer = styled.div<BgGradientType>`
  background: url(${(props) => props.imgSrc});
  display: flex;
  width: 100%;
  height: 57.8rem;
  &:after {
    content: " ";
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.backgound.primary},
      #ffffff00 20%,
      ${(props) => props.theme.colors.backgound.primary} 90%,
      ${(props) => props.theme.colors.backgound.primary}
    );
  }
`;

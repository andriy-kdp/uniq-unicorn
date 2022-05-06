import { BgGradientType } from "./bg-gradient.types";
import styled from "styled-components";

export const BgGradientContainer = styled.div<BgGradientType>`
  background: url(${(props) => props.imgSrc});
  display: flex;
  width: 100%;
  height: 600px;
  &:after {
    content: " ";
    display: flex;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      #000000ff,
      #ffffff00 20%,
      #000000ff 90%,
      #000000ff
    );
    z-index: 999;
  }
`;

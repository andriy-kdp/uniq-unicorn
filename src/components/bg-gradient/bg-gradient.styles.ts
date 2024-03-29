import { BgGradientType } from "./bg-gradient.types";
import styled from "styled-components";
import { media } from "../../utils/use-media-query";

const BgGradientContainer = styled.div<BgGradientType>((props) => ({
  background: `url(${props.imgSrc})`,
  backgroundRepeat: "no-repeat",
  display: "flex",
  width: "100%",
  opacity: 0.4,
  ...props.sx,
}));

export const BgGradientMain = styled(BgGradientContainer)`
  height: ${(props) => props.h || "57.8rem"};
  &:after {
    content: " ";
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 57.8rem;
    @media (${media.xs}) {
      min-height: 0;
    }
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.background.primary},
      #ffffff00 20%,
      ${(props) => props.theme.colors.background.primary} 90%,
      ${(props) => props.theme.colors.background.primary}
    );
  }
`;

//     `
//   background: url(${(props) => props.imgSrc});
//   display: flex;
//   width: 100%;
//   height: 57.8rem;
//   &:after {
//     content: " ";
//     display: flex;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(
//       to bottom,
//       ${(props) => props.theme.colors.background.primary},
//       #ffffff00 20%,
//       ${(props) => props.theme.colors.background.primary} 90%,
//       ${(props) => props.theme.colors.background.primary}
//     );
//   }
// `;

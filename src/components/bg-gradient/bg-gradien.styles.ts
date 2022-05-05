import styled from "styled-components";

export const BgGradientContainer = styled.div`
  &:after {
    content: " ";
    display: flex;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, green, red 20%, red 80%, green);
    z-index: 999;
  }
`;

import { WrapProps } from "./wrap.types";
import styled from "styled-components";

// Util component-wrapper
export const Wrap = styled.div<WrapProps>(({ sx }) => ({
  ...sx,
}));

import { Content } from "./../content/content.component";
import styled from "styled-components";
export const Section = styled(Content)`
  max-width: ${(props) => props.w || "144rem"};

  position: relative;
`;

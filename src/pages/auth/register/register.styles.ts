import styled from "styled-components";
import { media } from "../../../utils/use-media-query";
const FormRoot = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  align-items: flex-start;
  @media (${media.xs}) {
    grid-template-columns: 1fr;
  }
`;

const HelpRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 4rem;
  width: 100%;
  align-items: flex-start;
  margin: 10rem auto;
`;

const HelpTitle = styled.h2``;
const HelpSubtitle = styled.span``;

export const Form = {
  Root: FormRoot,
};

export const Register = {
  Help: {
    Root: HelpRoot,
    Title: HelpTitle,
    SubTitle: HelpSubtitle,
  },
};

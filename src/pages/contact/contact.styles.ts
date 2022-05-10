import styled from "styled-components";

const FormSectionRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4fr;
  width: 100%;
`;

const FormSectionTitleRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormSectionTitleText = styled.h3``;

const FormSectionTitleSub = styled.span``;

export const ContactForm = {
  Root: FormSectionRoot,
  Title: {
    Root: FormSectionTitleRoot,
    Text: FormSectionTitleText,
    SubTitle: FormSectionTitleSub,
  },
};

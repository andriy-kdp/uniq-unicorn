import styled from "styled-components";

const FormSectionRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4fr;
  width: 100%;
  margin-top: 7rem;
`;

const FormSectionTitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4rem;
`;

const FormSectionTitleText = styled.h3``;

const FormSectionTitleSub = styled.span`
  margin-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.16em;
  color: #f2f2f2;
`;

export const ContactForm = {
  Root: FormSectionRoot,
  Title: {
    Root: FormSectionTitleRoot,
    Text: FormSectionTitleText,
    SubTitle: FormSectionTitleSub,
  },
};

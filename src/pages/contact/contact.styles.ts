import styled from "styled-components";
import { media } from "../../utils/use-media-query";

const FormSectionRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4fr;
  width: 100%;
  margin-top: 7rem;
  @media (${media.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FormSectionTitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormSectionTitleText = styled.h3``;

const FormSectionTitleSub = styled.span`
  margin-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.16em;
  color: #f2f2f2;
`;

const SupportRoot = styled.div``;
const SupportWrapper = styled.div``;
const SupportTitle = styled.h5`
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
`;
const SupportText = styled.a`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: #828282;
`;
const SupportPhone = styled.a`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.1rem;
  color: #828282;
  text-decoration: none;
  margin-left: 1rem;
`;

export const ContactForm = {
  Root: FormSectionRoot,
  Title: {
    Root: FormSectionTitleRoot,
    Text: FormSectionTitleText,
    SubTitle: FormSectionTitleSub,
  },
  Support: {
    Root: SupportRoot,
    Wrapper: SupportWrapper,
    Title: SupportTitle,
    Text: SupportText,
    Phone: SupportPhone,
  },
};

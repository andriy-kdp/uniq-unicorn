import styled from "styled-components";

const PersonRoot = styled.div`
  display: flex;
  max-width: 144rem;
  margin: 9.5rem auto;
`;

const PersonWrapper = styled.div`
  margin-left: 15%;
  margin-top: 13.9rem;
`;

const PersonTitle = styled.h2`
  font-weight: 700;
  font-size: 4.8rem;
  color: black;
  line-height: 6.25rem;
`;

const PersonSubtitle = styled.h3`
  font-weight: 400;
  font-size: 3.2rem;
  line-height: 4.1rem;
  color: black;
`;

const PersonDescription = styled.h5`
  color: #a1a1a1;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.6rem;
  opacity: 0.6;
  margin-bottom: 2.2rem;
`;

const PersonParagraph = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #d4d4d4;
`;

export const Person = {
  Root: PersonRoot,
  Wrapper: PersonWrapper,
  Title: PersonTitle,
  Subtitle: PersonSubtitle,
  Description: PersonDescription,
  Paragraph: PersonParagraph,
};

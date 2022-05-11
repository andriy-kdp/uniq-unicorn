import styled from "styled-components";
const PoliciesHeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6rem;
`;

const PoliciesHeaderTitle = styled.h3``;
const PoliciesHeaderSubTitle = styled.span``;

const PoliciesTextRoot = styled.div`
  text-align: justify;
  margin: 3rem auto;
  width: 100%;
`;

const PoliciesText = styled.p`
  margin-bottom: 2rem;
`;

const BodyTitle = styled.h4`
  margin-bottom: 1.6rem;
`;

const ListRoot = styled.ul`
  margin-bottom: 3rem;
`;
const ListItem = styled.li``;

export const Policies = {
  Header: {
    Root: PoliciesHeaderRoot,
    Title: PoliciesHeaderTitle,
    SubTitle: PoliciesHeaderSubTitle,
  },
  Body: {
    Root: PoliciesTextRoot,
    Text: PoliciesText,
    Title: BodyTitle,
  },
  List: {
    Root: ListRoot,
    Item: ListItem,
  },
};

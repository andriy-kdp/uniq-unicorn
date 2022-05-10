import styled from "styled-components";
const PoliciesHeaderRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PoliciesHeaderTitle = styled.h3``;
const PoliciesHeaderSubTitle = styled.span``;
const PoliciesTextRoot = styled.div`
  text-align: justify;
`;

const PoliciesText = styled.p``;

const BodyTitle = styled.h4``;

const ListRoot = styled.ul``;
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

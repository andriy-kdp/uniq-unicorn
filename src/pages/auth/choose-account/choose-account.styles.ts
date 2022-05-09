import styled from "styled-components";
const ChooseAccountRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AccountVariantsRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-end;
  width: 100%;
`;

const ChooseAccountSubtitle = styled.span``;

const ItemTitle = styled.h4`
  font-size: 2.4rem;
  line-height: 3.6rem;
`;

const IconRoot = styled.div`
  display: flex;
  align-items: flex-end;
  svg {
    max-height: 16.7rem;
  }
`;

export const Accounts = {
  Subtitle: ChooseAccountSubtitle,
  Root: ChooseAccountRoot,
  Variants: {
    Root: AccountVariantsRoot,
    Item: {
      Title: ItemTitle,
      Icon: {
        Root: IconRoot,
      },
    },
  },
};

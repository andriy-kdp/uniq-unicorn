import styled from "styled-components";
const ChooseAccountRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 13rem;
`;

const AccountVariantsRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-end;
  width: 100%;
  margin-top: 12rem;
  cursor: pointer;
`;

const ChooseAccountSubtitle = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

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

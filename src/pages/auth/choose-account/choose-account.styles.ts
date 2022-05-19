import styled from "styled-components";
import { media } from "../../../utils/use-media-query";
const ChooseAccountRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 114rem;

  @media (${media.sm}) {
    position: relative;
    margin: 0;
    padding: 2rem;
    width: 100%;
  }
`;

const AccountVariantsRoot = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-end;
  gap: 20rem;
  cursor: pointer;
  @media (${media.sm}) {
    grid-template-columns: 1fr;
  }
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
  width: 100%;
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

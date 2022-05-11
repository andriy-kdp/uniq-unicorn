import styled from "styled-components";

// Component wrapper
const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

// Section
const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h5`
  font-size: 2.4rem;
  line-height: 3.6rem;
  margin-bottom: 3.2rem;
`;

// Items
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  border: 1px solid rgba(228, 231, 236, 0.2);
  border-radius: 1.6rem;
  margin-bottom: 2rem;
`;

// Item
const ItemTitle = styled.h6``;

const ItemDesctiption = styled.div`
  margin-bottom: 3.2rem;
  margin-top: 0.8rem;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #e0e0e0;
`;

const ItemFooterRoot = styled.div`
  display: flex;
  align-items: center;
  margin-right: 3rem;
  color: #e0e0e0;
`;
const ItemFooterData = styled.div`
  display: flex;
`;

// Combined exports
const Item = {
  Title: ItemTitle,
  Container: ItemContainer,
  Description: ItemDesctiption,
  Footer: {
    Item: ItemFooterRoot,
    Data: ItemFooterData,
  },
};

const Items = {
  Container: ItemsContainer,
  Item,
};

export const Vacations = {
  Body,
  ContainerSection,
  SectionTitle,
  Items,
};

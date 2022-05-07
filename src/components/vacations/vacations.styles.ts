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
`;

const SectionTitle = styled.h5`
  font-size: 2.4rem;
  line-height: 3rem;
`;

// Items
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// Item
const ItemTitle = styled.div``;

const ItemDesctiption = styled.div``;

// Combined exports
const Item = {
  Title: ItemTitle,
  Container: ItemContainer,
  Description: ItemDesctiption,
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

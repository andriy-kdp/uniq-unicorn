import styled from "styled-components";

export type InfoBlockContainerProps = {
  reverse?: boolean;
};

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
`;

export const ProfsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfItemTitle = styled.h5`
  text-transform: uppercase;
  font-size: 3.2rem;
  line-height: 4.8rem;
`;

export const ProfItemDescription = styled.div`
  font-size: 2.2rem;
  line-height: 2.8rem;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionTitle = styled.h2`
  text-transform: uppercase;
`;

export const Description = styled.div`
  line-height: 2.8rem;
  font-size: 2rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
`;

export const BlockTitle = styled.h4`
  text-transform: uppercase;
`;

export const BlockSubtitle = styled.h5`
  line-height: 4.8rem;
`;

export const InfoListContainer = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 2rem;
`;

export const InfoListItem = styled.li``;

export const ImgWrapper = styled.div`
  display: flex;
`;

export const InfoBlockContainer = styled.div<InfoBlockContainerProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
`;

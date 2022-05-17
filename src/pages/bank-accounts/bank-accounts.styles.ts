import styled from "styled-components";
import { media } from "../../utils/use-media-query";

export type InfoBlockContainerProps = {
  reverse?: boolean;
};

export const DescriptionWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (${media.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ProfsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (${media.sm}) {
    margin-bottom: 5.1rem;
  }
`;
export const ProfItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (${media.sm}) {
    margin-bottom: 5.1rem;
  }
`;

export const ProfItemTitle = styled.h5`
  text-transform: uppercase;
  font-size: 3.2rem;
  line-height: 4.8rem;
  @media (${media.sm}) {
    text-transform: initial;
  }
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
  margin-top: 2.4rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  @media (${media.sm}) {
    width: 100%;
  }
`;

export const BlockTitle = styled.h4`
  text-transform: uppercase;
  letter-spacing: 0.16em;
  @media (${media.sm}) {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.6rem;
    text-align: right;
    letter-spacing: 0.16em;
    color: #f2f2f2;
    margin-bottom: 2rem;
  }
`;

export const BlockSubtitle = styled.h5`
  line-height: 4.8rem;
  margin-top: 0.6rem;
  margin-bottom: 4.7rem;
`;

export const InfoListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  @media (${media.sm}) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;
  }
`;

export const InfoListItem = styled.li``;

export const ImgWrapper = styled.div`
  display: flex;
  margin-top: 6rem;
  @media (${media.sm}) {
    justify-content: center;
    margin: 3rem inherit;
  }
`;

export const InfoBlockContainer = styled.div<InfoBlockContainerProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  margin-bottom: 18rem;
  :last-child {
    margin-bottom: 10rem;
  }
  @media (${media.sm}) {
    flex-direction: column;
    margin-bottom: 7rem;
    :last-child {
      margin-bottom: 5rem;
    }
  }
`;

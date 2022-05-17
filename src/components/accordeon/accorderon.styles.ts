import styled from "styled-components";
import { media } from "../../utils/use-media-query";

const AccordeonRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AccordeonTitleRoot = styled.div`
  display: flex;
  user-select: none;
  width: 100%;
  margin-bottom: 0.8rem;
`;
const AccordeonTitle = styled.h6`
  color: ${(props) => props.theme.colors.text.secondary};
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  @media (${media.sm}) {
    font-size: 1.8rem;
    line-height: 2.8rem;
  }
`;

const AccordeonIconRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;

const AccordeonDescription = styled.div<{ visible: boolean }>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  overflow: hidden;
  transition-duration: 200ms;
  min-height: 0;
  max-height: ${(props) => (props.visible ? "300px" : "0")};
  transition: max-height 200ms;
`;

export const Acc = {
  Root: AccordeonRoot,
  Title: {
    Root: AccordeonTitleRoot,
    Body: AccordeonTitle,
  },
  Icon: AccordeonIconRoot,
  Description: AccordeonDescription,
};

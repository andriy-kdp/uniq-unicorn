import styled from "styled-components";

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
`;

const AccordeonIconRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;

const AccordeonDescription = styled.div``;

export const Acc = {
  Root: AccordeonRoot,
  Title: {
    Root: AccordeonTitleRoot,
    Body: AccordeonTitle,
  },
  Icon: AccordeonIconRoot,
  Description: AccordeonDescription,
};

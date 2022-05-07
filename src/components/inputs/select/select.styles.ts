import styled from "styled-components";

const SelectRoot = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: ${(props) => props.theme.colors.backgound.primary};
  border-radius: 0.7rem;
  border: 1px solid #a6a6a6;
  color: ${(props) => props.theme.colors.text.secondary};
  overflow: hidden;
`;
const OptionItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition-duration: 200ms;
  :hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;
const OptionItemTitle = styled.div`
  display: flex;
  width: 100%;
`;

const OptionIconRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 1.8rem;
  padding-left: 0.8rem;
`;

const InputAdornmentRoot = styled.div`
  display: flex;
  align-items: center;
  :hover {
    text-decoration: underline;
  }
`;

const InputAdormentLabel = styled.div`
  color: ${(props) => props.theme.colors.text.secondary};
  margin-left: 1.6rem;
`;
export const Sel = {
  Root: SelectRoot,
  Adornment: {
    Root: InputAdornmentRoot,
    Label: InputAdormentLabel,
  },
  Options: {
    Root: OptionsContainer,
    Item: {
      Root: OptionItemContainer,
      Title: OptionItemTitle,
      Icon: OptionIconRoot,
    },
  },
};

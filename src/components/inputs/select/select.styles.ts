import { SelectProps } from "./select.types";
import styled from "styled-components";

const SelectRoot = styled.div<Pick<SelectProps, "fullWidth" | "maxWidth">>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) =>
    props.maxWidth &&
    `
    max-width: ${props.maxWidth}
  `}
  ${(props) => props.fullWidth && `width: 100%`}
`;
const OptionsContainer = styled.div<Pick<SelectProps, "optionsPosition" | "borderRadius" | "border">>`
  user-select: none;
  display: flex;
  flex-direction: column;
  position: absolute;
  /* width: 100%; */
  background: ${(props) => props.theme.colors.background.primary};
  border-radius: 1.6rem;
  border: 1px solid #a6a6a6;
  color: ${(props) => props.theme.colors.text.secondary};
  overflow: hidden;
  z-index: 1;
  ${(props) => props.border === "none" && "border: none;   align-items: center;"};
  ${(props) => props.optionsPosition === "bottom" && "top: 0"};
  ${(props) => props.optionsPosition === "top" && "bottom: 0"};
  ${(props) => props.borderRadius === "small" && "border-radius: 0.7rem"};
`;
const OptionItemContainer = styled.div`
  display: flex;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition-duration: 200ms;
  width: 100%;
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

const InputAdornmentIcon = styled.div``;

export const Sel = {
  Root: SelectRoot,
  Adornment: {
    Root: InputAdornmentRoot,
    Label: InputAdormentLabel,
    Icon: InputAdornmentIcon,
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

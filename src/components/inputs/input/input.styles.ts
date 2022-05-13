import styled from "styled-components";
import { InputProps } from "./input.types";

export const InputBody = styled.div<Pick<InputProps, "fullWidth">>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) => props.fullWidth && `width: 100%`}
`;

const InputContainer = styled.div<Pick<InputProps, "borderRadius">>`
  display: flex;
  width: 100%;
  border: 1px solid rgba(242, 242, 242, 0.2);

  border-radius: 1.6rem;
  overflow: hidden;
  ${(props) => props.borderRadius === "small" && `border-radius: 0.7rem`};
`;
const InputLabel = styled.span`
  margin-bottom: 1.4rem;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const InputMain = styled.input<Pick<InputProps, "_select" | "startIcon">>`
  background: none;
  border: none;
  outline: none;
  line-height: 0;
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.text.secondary};
  font-family: "DM Sans", sans-serif;
  ::placeholder {
    color: #828282;
  }
  ${(props) => props._select && `padding: 1rem`}
  ${(props) => props.startIcon && "padding: 1rem 0"}
`;

const InputIconRoot = styled.div<Pick<InputProps, "IconRootProps">>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.2rem 0 2.4rem;
  cursor: pointer;
`;

const InputHelper = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: justify;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Icon = {
  Root: InputIconRoot,
};

export const Inp = {
  Body: InputBody,
  Root: InputContainer,
  Input: {
    Input: InputMain,
    Label: InputLabel,
    HelperText: InputHelper,
  },
  Icon,
};

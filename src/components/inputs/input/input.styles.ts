import styled from "styled-components";
import { InputProps } from "./input.component";

export const InputBody = styled.div<Pick<InputProps, "fullWidth">>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) => props.fullWidth && `width: 100%`}
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.text.primary};
  border-radius: 16px;
  overflow: hidden;
`;
const InputLabel = styled.span`
  margin-bottom: 1.4rem;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const InputMain = styled.input`
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
  ::placeholder {
    color: #828282;
  }
`;

const InputIconContainer = styled.div<Pick<InputProps, "IconRootProps">>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

const InputHelper = styled.div`
  font-size: 1.2rem;
  line-height: 1.6rem;
  text-align: justify;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.text.secondary};
`;

const Icon = {
  Container: InputIconContainer,
};

export const Inp = {
  Body: InputBody,
  Container: InputContainer,
  Input: {
    Main: InputMain,
    Label: InputLabel,
    HelperText: InputHelper,
  },
  Icon,
};

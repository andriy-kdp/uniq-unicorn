import styled from "styled-components";
const LoginTitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const LoginTitleText = styled.h3`
  margin-bottom: 4rem;
`;
const LogiTitleSub = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.16em;
  color: #f2f2f2;
  margin-bottom: 3rem;
  text-transform: uppercase;
`;

export const Login = {
  Title: {
    Root: LoginTitleRoot,
    Sub: LogiTitleSub,
    Text: LoginTitleText,
  },
};

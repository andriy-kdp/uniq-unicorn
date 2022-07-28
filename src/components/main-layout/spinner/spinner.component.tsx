import { useLayoutEffect } from "react";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import { Container, Wrapper } from "./spinner.styles";

export default function Spinner() {
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <MainLogo />
      </Wrapper>
    </Container>
  );
}

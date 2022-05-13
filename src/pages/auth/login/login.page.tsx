import React, { ChangeEventHandler, useState } from "react";
import MainBg from "../../../assets/images/backgrounds/lines_bg.png";
import { ButtonArrow } from "../../../components/button-arrow/button-arrow.component";
import { Input } from "../../../components/inputs/input/input.component";
import { FooterLinkItem } from "../../../components/main-layout/footer/footer.styles";
import { Paper } from "../../../components/paper/paper.component";
import { Section } from "../../../components/section/section.component";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Login } from "./login.styles";
import { useMediaQuery } from "../../../utils/use-media-query";

export const LoginPage: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    },
  );

  const isMobile = useMediaQuery("sm");

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("API CALL", formData);
  };

  return (
    <Section bgImg={MainBg}>
      <Section mainContent={!isMobile}>
        <Paper
          sx={{
            margin: isMobile ? "0 auto 2rem" : "8.5rem auto 5rem",
            padding: isMobile ? "2rem" : "5rem 7rem",
          }}
        >
          <Login.Title.Root>
            <Login.Title.Sub>Log in</Login.Title.Sub>
            <Login.Title.Text>
              Login to your Black Banx Account
            </Login.Title.Text>
          </Login.Title.Root>
          <Wrap sx={{ marginBottom: "3rem" }}>
            <Input
              name="email"
              label="E-mail address"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={"Please, enter your e-mail"}
            />
          </Wrap>
          <Wrap sx={{ marginBottom: "5rem" }}>
            <Input
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={"Please, enter your password"}
              InputNativeProps={{ type: "password" }}
            />
          </Wrap>

          <Wrap
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginBottom: "3.2rem",
            }}
          >
            <ButtonArrow onClick={handleSubmit}>Login</ButtonArrow>
          </Wrap>
          <Wrap
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Wrap sx={{ marginRight: "6rem" }}>
              <FooterLinkItem to={"/auth/forgot_password"}>
                Forgot your password?
              </FooterLinkItem>
            </Wrap>
            <Wrap>
              <FooterLinkItem to={"/auth/register"}>
                Don't have an account? <b>Register</b>
              </FooterLinkItem>
            </Wrap>
          </Wrap>
        </Paper>
      </Section>
    </Section>
  );
};

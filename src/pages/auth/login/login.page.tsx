import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import MainBg from "../../../assets/images/backgrounds/lines_bg.png";
import { ButtonArrow } from "../../../components/button-arrow/button-arrow.component";
import { Input } from "../../../components/inputs/input/input.component";
import { FooterLinkItem } from "../../../components/main-layout/footer/footer.styles";
import { Paper } from "../../../components/paper/paper.component";
import { Section } from "../../../components/section/section.component";
import { Wrap } from "../../../components/wrap/wrap.component";
import { Login } from "./login.styles";

export const LoginPage: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section bgImg={MainBg}>
      <Section mainContent>
        <Paper sx={{ margin: "8.5rem auto 5rem", padding: "5rem 7rem" }}>
          <Login.Title.Root>
            <Login.Title.Sub>Log in</Login.Title.Sub>
            <Login.Title.Text>Login to your Black Banx Account</Login.Title.Text>
          </Login.Title.Root>
          <Input
            name="email"
            label="E-mail address"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={"Please, enter your e-mail"}
          />
          <Input
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder={"Please, enter your password"}
          />
          <Wrap sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <ButtonArrow>Login</ButtonArrow>
          </Wrap>
          <Wrap
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <FooterLinkItem to={"/auth/forgot_password"}>Forgot your password?</FooterLinkItem>
            <Wrap sx={{ marginLeft: "3rem" }}>
              Don't have an account?
              <FooterLinkItem to={"/auth/register"}>Register</FooterLinkItem>
            </Wrap>
          </Wrap>
        </Paper>
      </Section>
    </Section>
  );
};

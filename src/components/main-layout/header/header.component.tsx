import React from "react";
import {
  LogoContainer,
  MenuItemContainer,
  MenuPartContainer,
} from "./header.styles";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import { Content } from "../../content/content.component";
import { MenuItemType, MenuPartProps } from "./header.types";
import { Link } from "../../link/link.styles";

const menuLeft: MenuItemType[] = [
  {
    label: "About us",
    path: "/about",
  },
  {
    label: "Accounts",
    path: "/accounts",
  },
  {
    label: "Media Centre",
    path: "/media_centre",
  },
];

const menuRight: MenuItemType[] = [
  {
    label: "Login",
    path: "/auth/login",
  },
  {
    label: "Accounts",
    path: "/auth/sign_up",
  },
];

const MenuPart: React.FC<MenuPartProps> = ({
  menuItems,
  ...rest
}): JSX.Element => (
  <MenuPartContainer {...rest}>
    {menuItems.map((item) => (
      <MenuItemContainer>
        <Link to={item.path}>{item.label}</Link>
      </MenuItemContainer>
    ))}
  </MenuPartContainer>
);

export const Header = () => {
  return (
    <Content direction={"row"} justify={"center"}>
      <MenuPart menuItems={menuLeft} />
      <LogoContainer>
        <MainLogo />
      </LogoContainer>
      <MenuPart menuItems={menuRight} right />
    </Content>
  );
};

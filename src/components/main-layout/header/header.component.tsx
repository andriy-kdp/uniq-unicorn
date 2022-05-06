import {
  LogoContainer,
  MenuItemContainer,
  MenuPartContainer,
} from "./header.styles";
import { MenuItemType, MenuPartProps } from "./header.types";

import { Content } from "../../content/content.component";
import { Link } from "../../link/link.styles";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import React from "react";

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
        <Link to={"/"}>
          <MainLogo />
        </Link>
      </LogoContainer>
      <MenuPart menuItems={menuRight} right />
    </Content>
  );
};

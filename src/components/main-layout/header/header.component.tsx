import { Dropdown, LogoContainer, MenuItemContainer, MenuPartContainer } from "./header.styles";
import { MenuItemType, MenuPartProps } from "./header.types";

import { Link, MenuButton } from "../../link/link.styles";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { Section } from "../../section/section.component";

const menuLeft: MenuItemType[] = [
  {
    label: "About us",
    path: "/about",
    dropdownItems: [
      { label: "Test", path: "/path" },
      { label: "Test2", path: "/path" },
      { label: "Test3", path: "/path" },
    ],
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
    label: "Sign up",
    path: "/auth/register",
  },
];

const MenuPart: React.FC<MenuPartProps> = ({ menuItems, setSubmenuItems, ...rest }): JSX.Element => {
  const handleClick =
    (items: MenuItemType["dropdownItems"]): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (items) {
        setSubmenuItems && setSubmenuItems(items);
      }
    };

  return (
    <MenuPartContainer {...rest}>
      {menuItems.map((item) => (
        <MenuItemContainer>
          {!item.dropdownItems ? (
            <Link to={item.path as string}>{item.label}</Link>
          ) : (
            <MenuButton onClick={handleClick(item.dropdownItems)}>{item.label}</MenuButton>
          )}
        </MenuItemContainer>
      ))}
    </MenuPartContainer>
  );
};

export const Header = () => {
  const [submenuItems, setSubmenuItems] = useState<Omit<MenuItemType, "dropdownItems">[] | null>(null);

  return (
    <Section content direction={"row"} justify={"center"} onMouseLeave={() => setSubmenuItems(null)}>
      <MenuPart menuItems={menuLeft} setSubmenuItems={setSubmenuItems} />
      <LogoContainer>
        <Link to={"/"}>
          <MainLogo />
        </Link>
      </LogoContainer>
      <MenuPart menuItems={menuRight} right />
      {submenuItems && (
        <Dropdown.Root>
          {submenuItems.map((subItem) => {
            const { Root, Description, Icon, Label } = Dropdown.Item;
            return (
              <Root>
                <Icon>{subItem.icon}</Icon>
                <Label.Root>
                  <Label.Text>{subItem.label}</Label.Text>
                  <Description>{subItem.description}</Description>
                </Label.Root>
              </Root>
            );
          })}
        </Dropdown.Root>
      )}
    </Section>
  );
};

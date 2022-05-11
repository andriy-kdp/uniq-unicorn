import { Dropdown, LogoContainer, MenuItemContainer, MenuPartContainer } from "./header.styles";
import { MenuItemType, MenuPartProps } from "./header.types";

import { Link, MenuButton } from "../../link/link.styles";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import React, { MouseEventHandler, useState } from "react";
import { Section } from "../../section/section.component";
import { Divider } from "../../divider/divider.styles";
import { ReactComponent as BankAccountsIcon } from "../../../assets/icons/menu/bank_accounts_icon.svg";
import { ReactComponent as BlogIcon } from "../../../assets/icons/menu/blog_icon.svg";
import { ReactComponent as CareersIcon } from "../../../assets/icons/menu/careers_icon.svg";
import { ReactComponent as CryptoCurrencyIcon } from "../../../assets/icons/menu/crypto_currency_icon.svg";
import { ReactComponent as FeesIcon } from "../../../assets/icons/menu/fees_icon.svg";
import { ReactComponent as MediaCoverageIcon } from "../../../assets/icons/menu/media_covarage_icon.svg";
import { ReactComponent as MissionIcon } from "../../../assets/icons/menu/mission_icon.svg";
import { ReactComponent as NewsIcon } from "../../../assets/icons/menu/news_icon.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/icons/menu/security_icon.svg";
import { useNavigate } from "react-router-dom";
const menuLeft: MenuItemType[] = [
  {
    label: "About us",
    path: "/about",
    dropdownItems: [
      {
        label: "Mission",
        description: "Black Banx - who we are",
        path: "/mission",
        icon: <MissionIcon />,
      },
      {
        label: "Security",
        description: "Black Banx fund protection",
        path: "/security",
        icon: <SecurityIcon />,
      },
      {
        label: "Careers",
        description: "Come work with us",
        path: "/careers",
        icon: <CareersIcon />,
      },
    ],
  },
  {
    label: "Accounts",
    dropdownItems: [
      {
        label: "Bank Accounts",
        description: "From private to business",
        path: "/bank_accounts",
        icon: <BankAccountsIcon />,
      },
      {
        label: "Crypto Currency",
        description: "Crypto trading made easier",
        path: "/crypto_currency",
        icon: <CryptoCurrencyIcon />,
      },
      {
        label: "Fees",
        description: "Accounts from Green to Titanium ",
        path: "/fees",
        icon: <FeesIcon />,
      },
    ],
  },
  {
    label: "Media Centre",
    dropdownItems: [
      {
        label: "Media Coverage",
        description: "Media and Public relations",
        path: "/media_coverage",
        icon: <MediaCoverageIcon />,
      },
      {
        label: "News",
        description: "Media centre news",
        path: "/news",
        icon: <NewsIcon />,
      },
      {
        label: "Blog",
        description: "Black Banx blog",
        path: "/blog",
        icon: <BlogIcon />,
      },
    ],
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
  const nav = useNavigate();

  const handleSubmenuClick =
    (path: string | undefined): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (path) {
        setSubmenuItems(null);
        nav(path);
      }
    };

  return (
    <Section content direction={"row"} justify={"center"} onMouseLeave={() => setSubmenuItems(null)} mh={"13rem"}>
      <MenuPart menuItems={menuLeft} setSubmenuItems={setSubmenuItems} />
      <LogoContainer small={!!submenuItems}>
        <Link to={"/"}>
          <MainLogo />
        </Link>
      </LogoContainer>
      <MenuPart menuItems={menuRight} right />
      {submenuItems && (
        <Dropdown.Root>
          <Dropdown.Items.Root>
            {submenuItems.map((subItem) => {
              const { Root, Description, Icon, Label } = Dropdown.Item;
              return (
                <Root onClick={handleSubmenuClick(subItem.path)}>
                  <Icon>{subItem.icon}</Icon>
                  <Label.Root>
                    <Label.Text>{subItem.label}</Label.Text>
                    <Description>{subItem.description}</Description>
                  </Label.Root>
                </Root>
              );
            })}
          </Dropdown.Items.Root>
          <Divider
            background={
              "linear-gradient(90deg, rgba(12, 12, 12, 0) 0%, #CECECE 30.73%, #CBCBCB 67.19%, rgba(12, 12, 12, 0) 100%);"
            }
          />
        </Dropdown.Root>
      )}
    </Section>
  );
};

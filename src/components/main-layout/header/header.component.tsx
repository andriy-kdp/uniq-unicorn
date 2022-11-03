import { Dropdown, LogoContainer, MenuItemContainer, MenuPartContainer, MobileHeader } from "./header.styles";
import { MenuItemType, MenuPartProps } from "./header.types";
import { Link, MenuButton } from "../../link/link.styles";
import { ReactComponent as MainLogo } from "../../../assets/logo.svg";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { Section } from "../../section/section.component";
import { Divider } from "../../divider/divider.styles";
import { ReactComponent as BankAccountsIcon } from "../../../assets/icons/menu/bank_accounts_icon.svg";
import { ReactComponent as CodeOfConductIcon } from "../../../assets/icons/menu/code_of_conduct.svg";
import { ReactComponent as LeadershipIcon } from "../../../assets/icons/menu/leadership.svg";
import { ReactComponent as BenefitsIcon } from "../../../assets/icons/menu/benefits.svg";
import { ReactComponent as BlogIcon } from "../../../assets/icons/menu/blog_icon.svg";
import { ReactComponent as CareersIcon } from "../../../assets/icons/menu/careers_icon.svg";
import { ReactComponent as CryptoCurrencyIcon } from "../../../assets/icons/menu/crypto_currency_icon.svg";
import { ReactComponent as FeesIcon } from "../../../assets/icons/menu/fees_icon.svg";
import { ReactComponent as MediaCoverageIcon } from "../../../assets/icons/menu/media_covarage_icon.svg";
import { ReactComponent as MissionIcon } from "../../../assets/icons/menu/mission_icon.svg";
import { ReactComponent as NewsIcon } from "../../../assets/icons/menu/news_icon.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/icons/menu/security_icon.svg";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "../../../utils/use-media-query";
import { MobileMenu } from "../../mobile-menu/mobile-menu.component";
import { ReactComponent as BlackBanxLogo } from "../../../assets/logo.svg";
import { Wrap } from "../../wrap/wrap.component";
import { useDispatch, useSelector } from "../../../redux/store";
import { uiDataLanguageList, uiDataWebsiteText } from "../../../redux/uiData/selectors";
import { SelectLanguageAppLink } from "../footer/parts/language-select-app";
import { SelectHandler, SelectOption } from "../../inputs/select/select.types";
import { setSelectedLanguage } from "../../../redux/uiData/slice";

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
      {menuItems.map((item, index) => (
        <MenuItemContainer key={`${Date.now()}-menu-${index}`}>
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
  const { common } = useSelector(uiDataWebsiteText);
  const languageList = useSelector(uiDataLanguageList);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState<SelectOption | null>(null);

  const handleSetLanguage: SelectHandler = (e) => {
    const { value } = e.target;
    setLanguage(value);
    dispatch(setSelectedLanguage(value));
  };

  useEffect(() => {
    languageList && setLanguage(languageList[0]);
  }, [languageList]);
  const menuLeft: MenuItemType[] = [
    {
      label: common.hf_head_one_rt,
      dropdownItems: [
        {
          label: common.hf_head_one_rt_subone,
          description: common.hf_head_one_rt_subone_sub,
          path: "/mission",
          icon: <MissionIcon />,
        },
        {
          label: common.hf_head_one_rt_subtwo,
          description: common.hf_head_one_rt_subtwo_sub,
          path: "/sustainability",
          icon: <SecurityIcon />,
        },
        {
          label: common.hf_head_one_rt_subthree,
          description: common.hf_head_one_rt_subthree_sub,
          path: "/careers",
          icon: <CareersIcon />,
        },
        {
          label: common.hf_head_one_rt_subfour,
          description: common.hf_head_one_rt_subfour_sub,
          path: "/culture",
          icon: <MissionIcon />,
        },
        {
          label: common.hf_head_one_rt_subfive,
          description: common.hf_head_one_rt_subfive_sub,
          path: "/codeofconduct",
          icon: <CodeOfConductIcon />,
        },
        {
          label: common.hf_head_one_rt_subsix,
          description: common.hf_head_one_rt_subsix_sub,
          path: "/leadership",
          icon: <LeadershipIcon />,
        },
        {
          label: common.hf_head_one_rt_subseven,
          description: common.hf_head_one_rt_subseven_sub,
          path: "/financialStatements",
          icon: <MissionIcon />,
        },
        {
          label: common.hf_head_one_rt_subeight,
          description: common.hf_head_one_rt_subeight_sub,
          path: "/governance",
          icon: <BenefitsIcon />,
        },
        {
          label: common.hf_head_one_rt_subnine,
          description: common.hf_head_one_rt_subnine_sub,
          path: "/blog",
          icon: <NewsIcon />,
        },
      ],
    },
    {
      label: common.hf_head_two_rt,
      dropdownItems: [
        {
          label: common.hf_head_two_rt__subone,
          description: common.hf_head_two_rt__subone_sub,
          path: "/bank_accounts",
          icon: <BankAccountsIcon />,
        },
        {
          label: common.hf_head_two_rt__subtwo,
          description: common.hf_head_two_rt__subtwo_sub,
          path: "/crypto_currency",
          icon: <CryptoCurrencyIcon />,
        },
        {
          label: common.hf_head_two_rt_subthree,
          description: common.hf_head_two_rt_subthree_sub,
          path: "/fees",
          icon: <FeesIcon />,
        },
      ],
    },
    {
      label: common.hf_head_three_rt,
      dropdownItems: [
        {
          label: common.hf_head_three_rt_subone,
          description: common.hf_head_three_rt_subone_sub,
          path: "/media_coverage",
          icon: <MediaCoverageIcon />,
        },
        {
          label: common.hf_head_three_rt__subtwo,
          description: common.hf_head_three_rt__subtwo_sub,
          path: "/news",
          icon: <NewsIcon />,
        },
        {
          label: common.hf_head_three_rt_subthree,
          description: common.hf_head_three_rt_subthree_sub,
          path: "/contact",
          icon: <BlogIcon />,
        },
      ],
    },
  ];

  const menuRight: MenuItemType[] = [
    {
      label: common.hf_head_four_lft,
      path: "/auth/login",
    },
    {
      label: common.hf_head_five_lft,
      path: "/auth/register",
    },
  ];
  const [submenuItems, setSubmenuItems] = useState<Omit<MenuItemType, "dropdownItems">[] | null>(null);
  const nav = useNavigate();
  const isMobile = useMediaQuery("sm");
  const handleSubmenuClick =
    (path: string | undefined): MouseEventHandler<HTMLButtonElement> =>
    () => {
      if (path) {
        setSubmenuItems(null);
        nav(path);
      }
    };
  if (!isMobile) {
    return (
      <>
        <Wrap onMouseLeave={() => setSubmenuItems(null)} sx={{ minHeight: "15rem" }}>
          <Section direction={"row"} justify={"center"} p={"0 5rem"}>
            <Wrap sx={{ marginTop: "2rem", marginRight: "2rem", maxWidth: "8rem", minHeight: "3rem", zIndex: "2" }}>
              <SelectLanguageAppLink
                options={languageList}
                language={language}
                onSelect={handleSetLanguage}
                optionsPosition={"bottom"}
              />
            </Wrap>
            <MenuPart menuItems={menuLeft} setSubmenuItems={setSubmenuItems} />

            <MenuPart menuItems={menuRight} right />
          </Section>
          <Wrap
            sx={{
              width: "144rem",
              position: "absolute",
              top: "0",
              left: 0,
              right: 0,
              margin: "0 auto",
            }}
          >
            <Dropdown.Root mounted={!!submenuItems}>
              <Dropdown.Items.Root>
                {submenuItems?.map((subItem, index) => {
                  const { Root, Description, Icon, Label } = Dropdown.Item;
                  return (
                    <Root onClick={handleSubmenuClick(subItem.path)} key={`${Date.now()}-menu-sub-${index}`}>
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
          </Wrap>
          <LogoContainer small={!!submenuItems}>
            <Link to={"/"}>
              <MainLogo />
            </Link>
          </LogoContainer>
        </Wrap>
      </>
    );
  }
  return (
    <MobileHeader>
      <MobileMenu items={menuLeft} />
      <Wrap
        sx={{
          margin: "0 auto",
          marginTop: "1rem",
          transform: "translate(65%)",
        }}
      >
        <Link to={"/"}>
          <BlackBanxLogo width={"7rem"} height={"5rem"} />
        </Link>
      </Wrap>
      <Wrap
        sx={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          paddingRight: "2rem",
          cursor: "pointer",
        }}
        onClick={() => nav("/auth/login")}
      >
        Login
      </Wrap>
    </MobileHeader>
  );
};

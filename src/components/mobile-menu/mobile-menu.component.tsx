import React, { MouseEventHandler, useRef, useState } from "react";
import { MobMenu } from "./mobile-menu-styles";
import { MobileMenuProps } from "./mobile-menu.types";
import { ReactComponent as BurgerMenuIcon } from "../../assets/icons/menu_burger.svg";
import { MenuItemType } from "../main-layout/header/header.types";
import { Wrap } from "../wrap/wrap.component";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/close_icon.svg";
import { Divider } from "../divider/divider.styles";

const MobileMenuItem: React.FC<
  MenuItemType & { onClick: (path: string) => void }
> = (props): JSX.Element => {
  const [showSubitems, setShowSubitems] = useState<boolean>(false);
  const { Root, Sub } = MobMenu.Item;
  const handleItemClick = (path?: string) => () => {
    if (!path) {
      return setShowSubitems((prev) => !prev);
    }
    props.onClick(path);
  };
  return (
    <Wrap sx={{ display: "flex", flexDirection: "column" }}>
      <Root onClick={handleItemClick(props.path)}>{props.label}</Root>
      {props.dropdownItems && showSubitems && (
        <Sub.Root>
          {props.dropdownItems.map((sub, idx) => (
            <Wrap
              sx={{ display: "flex", alignItems: "center", margin: "1rem 0" }}
              onClick={handleItemClick(sub.path)}
              key={`mobile-menu-item-${idx}`}
            >
              <Wrap
                sx={{
                  marginRight: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {sub.icon}
              </Wrap>
              <Sub.Title.Root>
                <Sub.Title.Text>{sub.label}</Sub.Title.Text>
                <Sub.Title.Description>{sub.description}</Sub.Title.Description>
              </Sub.Title.Root>
            </Wrap>
          ))}
        </Sub.Root>
      )}
    </Wrap>
  );
};

export const MobileMenu: React.FC<MobileMenuProps> = (props) => {
  const [open, setOpen] = useState(false);
  const nav = useNavigate();
  const { items } = props;

  const backdropRef = useRef(null);

  const handleOpenMenu = () => {
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleCloseMenu = () => {
    document.body.style.overflow = "auto";
    setOpen(false);
  };

  const handleBackdropClick: MouseEventHandler<
    HTMLButtonElement | HTMLDivElement
  > = (e) => {
    const { target } = e;
    const backdrop = backdropRef.current;
    if (target === backdrop) {
      return handleCloseMenu();
    }
  };

  const handleClickMenuItem = (path: string) => {
    document.body.style.overflow = "auto";
    setOpen(false);
    nav(path);
  };

  return (
    <>
      <MobMenu.Button onClick={handleOpenMenu}>
        <BurgerMenuIcon />
      </MobMenu.Button>
      {open && (
        <MobMenu.Backdrop ref={backdropRef} onClick={handleBackdropClick}>
          <MobMenu.Items.Root>
            <Wrap
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "1rem 0",
                cursor: "pointer",
              }}
              onClick={handleCloseMenu}
            >
              <CloseIcon />
            </Wrap>
            {items.map((menuItem, idx) => (
              <MobileMenuItem
                {...menuItem}
                onClick={handleClickMenuItem}
                key={`mobile-menu-section-${idx}`}
              />
            ))}

            <MobMenu.Item.Root
              onClick={() => handleClickMenuItem("/auth/register")}
            >
              Sign Up
            </MobMenu.Item.Root>
          </MobMenu.Items.Root>
          <Divider />
        </MobMenu.Backdrop>
      )}
    </>
  );
};

import styled from "styled-components";
import { MenuPartProps } from "./header.types";

export const MainMenuContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LogoContainer = styled.div`
  transform: translateX(-75%);
  margin-top: 3rem;
`;

export const MenuItemContainer = styled.div`
  display: flex;
`;

export const MenuPartContainer = styled.div<Omit<MenuPartProps, "menuItems">>`
  display: flex;
  margin-right: auto;
  margin-top: 3.1rem;
  ${MenuItemContainer} {
    margin-right: 3rem;
  }
  ${(props) =>
    props.right &&
    `
    margin-left: auto;
    margin-right: 0;
    ${MenuItemContainer} {
    margin-right: 0;
    margin-left: 3rem;
  `}
`;

const DropdownMenuRoot = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  bottom: 0;
  background: linear-gradient(90deg, rgba(12, 12, 12, 0) 0%, #151515 30.73%, #151515 67.19%, rgba(12, 12, 12, 0) 100%);
  backdrop-filter: blur(6px);
`;

const DropdownMenuItemRoot = styled.button`
  display: flex;
  background: none;
  border: none;
  outline: none;
  color: #fff;
`;

const DropdownItemLabelRoot = styled.div`
  display: flex;
  flex-direction: column;
`;
const DropdownItemLabel = styled.span``;
const DropdownMenuItemDescription = styled.span``;

const DropdownItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Dropdown = {
  Root: DropdownMenuRoot,
  Item: {
    Root: DropdownMenuItemRoot,
    Label: {
      Root: DropdownItemLabelRoot,
      Text: DropdownItemLabel,
    },
    Description: DropdownMenuItemDescription,
    Icon: DropdownItemIcon,
  },
};

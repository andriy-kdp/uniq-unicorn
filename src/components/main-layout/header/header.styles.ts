import styled from "styled-components";
import { MenuPartProps } from "./header.types";

export const LogoContainer = styled.div<{ small?: boolean }>`
  margin-top: 3rem;
  transition-duration: 200ms;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  z-index: 1;
  svg {
    height: 80%;
  }
  ${(props) =>
    props.small &&
    `
    margin-top: 1.5rem;
    svg {
      height: 60%;
    }
  `}
`;

export const MenuItemContainer = styled.div`
  display: flex;
`;

export const MenuPartContainer = styled.div<Omit<MenuPartProps, "menuItems">>`
  display: flex;
  margin-right: auto;
  margin-top: 3.1rem;
  z-index: 2;
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

const DropdownMenuRoot = styled.div<{ mounted?: boolean }>`
  width: 0;
  min-width: 0;
  overflow: hidden;
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-left: -7rem;
  background: linear-gradient(90deg, rgba(12, 12, 12, 0) 0%, #151515 30.73%, #151515 67.19%, rgba(12, 12, 12, 0) 100%);
  backdrop-filter: blur(6px);
  top: 7rem;
  left: 0;
  z-index: 1;
  transition-duration: 20ms;
  ${(props) =>
    props.mounted &&
    `
    width: 65%;
  `}
`;

const DropdownItemsRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 0 5rem;
  flex-wrap: wrap;
`;
const DropdownMenuItemRoot = styled.button`
  display: flex;
  background: none;

  border: none;
  outline: none;
  color: #fff;
  padding: 3rem 1.8rem 4rem 1.8rem;
  cursor: pointer;
  min-width: 0;
  min-width: 27rem;
  overflow: hidden;
`;

const DropdownItemLabelRoot = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
`;
const DropdownItemLabel = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  margin-bottom: 0.3rem;
  word-wrap: unset;
`;
const DropdownMenuItemDescription = styled.span`
  color: #a1a1a1;
  min-width: max-content;
`;

const DropdownItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.4rem;
`;

export const MobileHeader = styled.div`
  display: flex;
  position: sticky;
  z-index: 10;
  top: 0rem;
  background: ${(props) => props.theme.colors.background.primary};
`;

export const Dropdown = {
  Root: DropdownMenuRoot,
  Items: {
    Root: DropdownItemsRoot,
  },
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

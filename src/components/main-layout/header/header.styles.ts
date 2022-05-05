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

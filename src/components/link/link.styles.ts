import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MenuButton = styled.button`
  outline: none;
  border: none;
  background: none;
  color: #fff;
  text-decoration: none;
  transition-duration: 200ms;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;
  cursor: pointer;
  color: #ffffff;
  -moz-transition-duration: 200ms;
  &:active {
    color: #fff;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Link = styled(NavLink)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 1.8rem;

  color: #ffffff;
  color: #fff;
  text-decoration: none;
  transition-duration: 200ms;
  -moz-transition-duration: 200ms;
  &:active {
    color: #fff;
  }
  &:hover {
    text-decoration: underline;
  }
`;

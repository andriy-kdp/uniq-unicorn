import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)`
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

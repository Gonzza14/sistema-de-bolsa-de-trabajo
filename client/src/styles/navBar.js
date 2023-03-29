import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const MainNav = styled.nav`
  position: fixed;
  flex: auto;
  left: 0;
  right: 0;
  background-color: #06062a;
  width: 10vh;
  padding: 0 1em;
  height: 100%;
  z-index: 20;
`;

export const NavContainer = styled.div`
  transform: rotate(-90deg);
  transform-origin: 50% 100% 0;
  position: relative;
  margin-top: 5em;
`;

export const NavList = styled.ul`
  position: absolute;
  display: flex;
  right: 0;
  padding: 0;
  list-style: none;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-50%);
`;

export const NavItem = styled.li`
  overflow: hidden;
  position: relative;
  border-radius: 3.125em;
  margin-bottom: 2em;
  margin-left: 2em;
  display: flex;
  align-items: center;
`;

export const NavParagraph = styled.p`
  color: #f3f3f3;
  visibility: visible;

`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #f3f3f3;

`;

export const NavButton = styled(Link)`
  position: relative;
  width: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 400ms;
  transform: rotate(90deg);
  text-decoration: none;
  color: #f3f3f3;
  padding: 0.8em 1.6em;
  border-radius: 3.125em;
  white-space: nowrap;
  z-index: 100000;
  &:hover ${NavParagraph} {
    cursor: pointer;
    color: #e84616;
  }
  &:hover ${StyledFontAwesomeIcon} {
    cursor: pointer;
    color: #e84616;
  }
`;

export const NavImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 3.125em;
`;

export const NavLogo = styled(Link)`
  transform: rotate(90deg);
  padding: 0.8em 1.6em;
  &:hover{
    cursor: pointer;
  }
`;

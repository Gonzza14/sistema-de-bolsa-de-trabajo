import styled from "styled-components";

export const MainNav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  background-color: #06062a;
  width: 6em;
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
  top: 50%;
  padding: 0;
  list-style: none;
  font-weight: bold;
  align-items: center;
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

export const NavButton = styled.button`
  display: block;
  position: relative;
  transition: 400ms;
  //writing-mode: vertical-lr;
  transform: rotate(90deg);
  text-decoration: none;
  /*color: #222222;*/
  color: #ffffff;
  padding: 0.8em 1.6em;
  border-radius: 3.125em;
  white-space: nowrap;
  z-index: 100000;

  &:hover {
    cursor: pointer;
    color: #E84616;
  }
`;

export const NavImage = styled.img`
  width: 3em;
  height: 3em;
  border-radius: 3.125em;
`;

export const NavLogo = styled.a`
  transform: rotate(90deg);
`;

import styled from "styled-components";

export const NavBar = styled.nav`
  position: fixed;
  background-color: #06062A;
  height: 4em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  color: #f3f3f3;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  width: 100%;
`;

export const NavItem = styled.li`
  margin-right: 2em;
`;

export const NavButton = styled.button`
  transition: none;
  text-decoration: none;
  color: #f3f3f3;

  &:hover {
    cursor: pointer;
  }
  
`;

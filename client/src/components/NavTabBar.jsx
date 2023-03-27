import { NavButton, NavBar, NavItem, NavItems } from "../styles/navTabBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faUser } from "@fortawesome/free-solid-svg-icons";


export const NavTabBar = () => {
    return (
        <NavBar>
            <NavItems>
                <NavItem><NavButton as="a" href="#"><FontAwesomeIcon icon={faHome} size="xl"/></NavButton></NavItem>
                <NavItem><NavButton as="a" href="#"><FontAwesomeIcon icon={faBars} size="2x"/></NavButton></NavItem>
                <NavItem><NavButton as="a" href="#"><FontAwesomeIcon icon={faUser} size="xl"/></NavButton></NavItem>
            </NavItems>
        </NavBar>
    );
};
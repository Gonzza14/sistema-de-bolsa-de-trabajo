import { MainNav, NavContainer, NavImage, NavList, NavLogo, NavButton, NavItem } from "../styles/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import user from "../assets/images/user.jpg";

export const NavBar = () => {
    return (
        <MainNav>
            <NavContainer>
                <NavList>

                    <NavItem><NavButton as="a" href="#"><FontAwesomeIcon icon={faUser} size="xl" /></NavButton></NavItem>
                    <NavItem><NavButton as="a" href="#"><FontAwesomeIcon icon={faBars} size="2x" /></NavButton></NavItem>
                    <NavItem><NavButton as="a" href="#"><FontAwesomeIcon icon={faHome} size="xl" /></NavButton> </NavItem>

                    <NavItem className="logo"><NavLogo><NavImage src={user}></NavImage></NavLogo></NavItem>
                </NavList>
            </NavContainer>
        </MainNav>
    );
}
import { MainNav, NavContainer, NavImage, NavList, NavLogo, NavButton, NavItem, NavParagraph, StyledFontAwesomeIcon } from "../styles/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import user from "../assets/images/user.jpg";

export const NavBar = () => {
    return (
        <MainNav>
            <NavContainer>
                <NavList>
                    <NavItem>

                        <NavButton as="a" href="#">
                            <StyledFontAwesomeIcon icon={faUser} size="xl" />
                        </NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton as="a" href="#">
                            <StyledFontAwesomeIcon icon={faBars} size="2x" />
                        </NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton visible as="a" href="#">
                            <StyledFontAwesomeIcon icon={faHome} size="xl" />
                            <NavParagraph>Inicio</NavParagraph>
                        </NavButton>
                    </NavItem>
                    <NavItem className="imagen">
                        <NavLogo>
                            <NavImage src={user}>
                            </NavImage>
                        </NavLogo>
                    </NavItem>
                </NavList>
            </NavContainer>
        </MainNav>
    );
}
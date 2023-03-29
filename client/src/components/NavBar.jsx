import { MainNav, NavContainer, NavImage, NavList, NavLogo, NavButton, NavItem, NavParagraph, StyledFontAwesomeIcon } from "../styles/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faUser, faFileText, faPaperPlane, faSearch, faBuildingUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import user from "../assets/images/user.jpg";

export const NavBar = () => {
    return (
        <MainNav>
            <NavContainer>
                <NavList>
                    <NavItem>
                        <NavButton to="/Empresa">
                            <StyledFontAwesomeIcon icon={faBuildingUser} size="xl" />
                            <NavParagraph>Empresa</NavParagraph>
                        </NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton to="/Buscar">
                            <StyledFontAwesomeIcon icon={faSearch} size="xl" />
                            <NavParagraph>Buscar</NavParagraph>
                        </NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton to="/Postulaciones">
                            <StyledFontAwesomeIcon icon={faPaperPlane} size="xl" />
                            <NavParagraph>Postulacion</NavParagraph>
                        </NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton to="/CV">
                            <StyledFontAwesomeIcon icon={faFileText} size="xl" />
                            <NavParagraph>CV</NavParagraph>
                        </NavButton>
                    </NavItem>
                    <NavItem>
                        <NavButton to="/">
                            <StyledFontAwesomeIcon icon={faHome} size="xl" />
                            <NavParagraph>Inicio</NavParagraph>
                        </NavButton>
                    </NavItem>
                    <NavItem className="imagen">
                            <NavLogo to="Usuario">
                                <NavImage src={user}>
                                </NavImage>
                            </NavLogo>
                    </NavItem>
                </NavList>
            </NavContainer>
        </MainNav>
    );
}
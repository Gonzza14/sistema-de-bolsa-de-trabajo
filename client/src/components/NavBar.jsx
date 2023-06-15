import { MainNav, NavContainer, NavImage, NavList, NavLogo, NavButton, NavItem, NavParagraph, StyledFontAwesomeIcon } from "../styles/elements/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars, faUser, faFileText, faPaperPlane, faSearch, faBuildingUser, faClose } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import user from "../assets/images/user.jpg";
import { useCustomFetch } from "../hooks/useCustomFetch";

export const NavBar = () => {
    // Verificar si se ha iniciado sesion
    let empresa = false;
    empresa = localStorage.getItem("rol") != "empresa" ? false: true;
    // Verificar si se ha iniciado sesion
    let haySesion = null;
    haySesion = localStorage.getItem("rol") == null ? haySesion = false: haySesion = true;

    let hayDatosPersonales = false;
    let idUsuario = localStorage.getItem("id_usuario") == null ? "" :  localStorage.getItem("id_usuario");
    let url = "http://localhost:3000/api/solicitantes/"+idUsuario;
    let {
        dataBase,
        loading
    } = useCustomFetch(url);
    console.log(dataBase);
    //hayDatosPersonales = dataBase.id != null ? hayDatosPersonales=true : hayDatosPersonales=false; 
    return (
        <MainNav>
            <NavContainer>
                <NavList>
                    { haySesion && (<NavItem>
                        <NavButton to="/Login">
                            <StyledFontAwesomeIcon icon={faClose} size="xl" />
                            <NavParagraph>Cerrar Sesión</NavParagraph>
                        </NavButton>
                    </NavItem>)}
                    { empresa && (<NavItem>
                        <NavButton to="/Empresa">
                            <StyledFontAwesomeIcon icon={faBuildingUser} size="xl" />
                            <NavParagraph>Empresa</NavParagraph>
                        </NavButton>
                    </NavItem>)}
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
                        <NavButton to="/GestionCurriculum">
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
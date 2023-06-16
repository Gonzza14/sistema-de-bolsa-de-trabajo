import {
  MainNav,
  NavContainer,
  NavImage,
  NavList,
  NavLogo,
  NavButton,
  NavItem,
  NavParagraph,
  StyledFontAwesomeIcon,
} from "../styles/elements/navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faUser,
  faFileText,
  faPaperPlane,
  faSearch,
  faBuildingUser,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import user from "../assets/images/user.jpg";
import { useCustomFetch } from "../hooks/useCustomFetch";

export const NavBar = ({ auth, setAuth }) => {
  // Verificar si se ha iniciado sesion
  let empresa = false;
  empresa = localStorage.getItem("rol") != "empresa" ? false : true;
  // Verificar si se ha iniciado sesion
  var haySesion = auth.token;

  const handleCerrarSession = () => {
    let url = "http://localhost:3000/api/usuarios/logout";
    fetch(url, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        setAuth({ token: data.token });
      })
      .catch((error) => console.error(error));
  };

  haySesion = auth.token;
  console.log(haySesion);
  return (
    <MainNav>
      <NavContainer>
        <NavList>
          {haySesion && (
            <NavItem>
              <NavButton onClick={handleCerrarSession} to="/">
                <StyledFontAwesomeIcon icon={faClose} size="xl" />
                <NavParagraph>Cerrar Sesión</NavParagraph>
              </NavButton>
            </NavItem>
          )}
          {empresa && (
            <NavItem>
              <NavButton to="/Empresa">
                <StyledFontAwesomeIcon icon={faBuildingUser} size="xl" />
                <NavParagraph>Empresa</NavParagraph>
              </NavButton>
            </NavItem>
          )}
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
              <NavImage src={user}></NavImage>
            </NavLogo>
          </NavItem>
        </NavList>
      </NavContainer>
    </MainNav>
  );
};

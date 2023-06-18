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
  faBriefcase,
  faTasks,
  faUserCog,
  faHandshake,
  faUserTag,
  faListAlt,
  faAddressCard,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import user from "../assets/images/user.jpg";
import { useCustomFetch } from "../hooks/useCustomFetch";

export const NavBar = ({ auth, setAuth, dataLleno, setDataLleno }) => {
  // Verificar si se ha iniciado sesion
  let empresa = false;
  empresa = localStorage.getItem("rol") != "empresa" ? false : true;
  // Verificar si se ha iniciado sesion
  let haySesion = localStorage.getItem("authtoken");

  const handleCerrarSession = () => {
    let url = "http://localhost:3000/api/usuarios/logout";
    fetch(url, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        setAuth({ token: data.token });
        localStorage.setItem("dataLleno", data.dataLleno);
        setDataLleno(data.dataLleno);
      })
      .catch((error) => console.error(error));
  };

  haySesion = localStorage.getItem("authToken");
  console.log(haySesion);
  return (
    <MainNav>
      <NavContainer>
        <NavList>
          {haySesion === "true" && (
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
            <NavButton to="/GestionEmpresa">
              <StyledFontAwesomeIcon icon={faBriefcase} size="xl" />
              <NavParagraph>Gestión Empresa</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/GestionUsuario">
              <StyledFontAwesomeIcon icon={faUserCog} size="xl" />
              <NavParagraph>Gestión Usuario</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/GestionTipoHabilidad">
              <StyledFontAwesomeIcon icon={faTasks} size="xl" />
              <NavParagraph>Gestión Tipo Habilidad</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/GestionOfertaEmpleo">
              <StyledFontAwesomeIcon icon={faHandshake} size="xl" />
              <NavParagraph>Gestión Oferta Empleo</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/GestionRol">
              <StyledFontAwesomeIcon icon={faUserTag} size="xl" />
              <NavParagraph>Gestión Rol</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/DetalleOferta/:idOfert">
              <StyledFontAwesomeIcon icon={faSearch} size="xl" />
              <NavParagraph>Detalle Oferta</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/ListarPostulantes">
              <StyledFontAwesomeIcon icon={faListAlt} size="xl" />
              <NavParagraph>Listar Postulantes</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/GestionTipoExamen">
              <StyledFontAwesomeIcon icon={faFileAlt} size="xl" />
              <NavParagraph>Gestión Tipo Examen</NavParagraph>
            </NavButton>
          </NavItem>
          <NavItem>
            <NavButton to="/GestionCurriculum">
              <StyledFontAwesomeIcon icon={faAddressCard} size="xl" />
              <NavParagraph>Gestión Curriculum</NavParagraph>
            </NavButton>
          </NavItem>
          {/* <NavItem> 
  <Nabutton to="/Usuario"> 
  	<StyledFontAwesomeIcon icon={faUser} size="xl"/> 
  	<Nabparagraph>Usuario</Nabparagraph> 
  	</Nabutton> 
  	</Nabitem> 
  	<Nabitem> 
  		<Nabutton to="/UsuarioEmp"> 
  			<StyledFontAwesomeIcon icon={faUserTie} size="xl"/> 
  			<Nabparagraph>Usuario Empresarial</Nabparagraph> 
  		</Nabutton> 
  	</Nabitem> 
  	<Nabitem> 
  		<Nabutton to="/GestionPermiso"> 
  			<StyledFontAwesomeIcon icon={faUnlockAlt} size="xl"/> 
  			<Nabparagraph>Gestión Permiso</Nabparagraph> 
  		</Nabutton> 
  	</Nabitem> 
  	<Nabitem> 
  		<Nabutton to="/GestionRolPermiso"> 
  			<StyledFontAwesomeIcon icon={faUserLock} size="xl"/> 
  			<Nabparagraph>Gestión Rol Permiso</Nabparagraph> 
  		</Nabutton> 
  	</Nabitem> */}

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

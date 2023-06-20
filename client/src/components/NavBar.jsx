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
  faFileAlt,
  faTasks,
  faUserTag,
  faUserLock,
  faUnlockAlt,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import user from "../assets/images/user.jpg";
import { useCustomFetch } from "../hooks/useCustomFetch";
import Swal from "sweetalert2";
import React, { useState, useEffect } from 'react';

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});


export const NavBar = ({
  auth,
  setAuth,
  dataLleno,
  setDataLleno,
  rol,
  setRol,
}) => {
  let haySesion = localStorage.getItem("authtoken");

  let id_usuario = localStorage.getItem("id_usuario");

  const urlSolicitante =
    process.env.NODE_ENV === "production"
      ? `/api/usuarios/solicitante/${id_usuario}`
      : `http://localhost:3000/api/usuarios/solicitante/${id_usuario}`;

  let { dataBase } = useCustomFetch(urlSolicitante);

  let previewImage = user;

   if(dataBase){
      if(dataBase.fotoDePerfil != null){
        previewImage = `/perfil/${dataBase.fotoDePerfil}` 
      }
    }

  const handleCerrarSession = () => {

    let url =
      process.env.NODE_ENV === "production"
        ? "/api/usuarios/logout"
        : "http://localhost:3000/api/usuarios/logout";

    let id_usuario = localStorage.getItem("id_usuario");



    fetch(url, { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("authToken", data.token);
        setAuth({ token: data.token });
        localStorage.setItem("rol", data.rol);
        setRol({ token: data.token });
        localStorage.setItem("dataLleno", data.dataLleno);
        localStorage.setItem("nombreUsuario", " ");
        setDataLleno(data.dataLleno);
        Toast.fire({
          icon: "success",
          title: "Hasta luego",
        });
      })
      .catch((error) => console.error(error));
  };

  haySesion = localStorage.getItem("authToken");
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
          {rol === "empresa" && (
            <>
              {/* <NavItem>
                <NavButton to="/Empresa">
                  <StyledFontAwesomeIcon icon={faBuildingUser} size="xl" />
                  <NavParagraph>Empresa</NavParagraph>
                </NavButton>
              </NavItem> */}

              <NavItem>
                <NavButton to="/GestionOfertaEmpleo">
                  <StyledFontAwesomeIcon icon={faHandshake} size="xl" />
                  <NavParagraph>Mis Ofertas</NavParagraph>
                </NavButton>
              </NavItem>
            </>
          )}
          {rol === "solicitante" && (
            <>
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
            </>
          )}
          {rol === "administrador" && (
            <>
              <NavItem>
                <NavButton to="/GestionRolPermiso">
                  <StyledFontAwesomeIcon icon={faUserLock} size="xl" />
                  <NavParagraph>
                    Asignar
                    <br /> Permisos
                  </NavParagraph>
                </NavButton>
              </NavItem>

              <NavItem>
                <NavButton to="/GestionPermiso">
                  <StyledFontAwesomeIcon icon={faUnlockAlt} size="xl" />
                  <NavParagraph>Permisos</NavParagraph>
                </NavButton>
              </NavItem>

              <NavItem>
                <NavButton to="/GestionRol">
                  <StyledFontAwesomeIcon icon={faUserTag} size="xl" />
                  <NavParagraph>Roles</NavParagraph>
                </NavButton>
              </NavItem>

              <NavItem>
                <NavButton to="/GestionTipoExamen">
                  <StyledFontAwesomeIcon icon={faFileAlt} size="xl" />
                  <NavParagraph>
                    Gestión
                    <br /> Tipo Exa
                  </NavParagraph>
                </NavButton>
              </NavItem>

              <NavItem>
                <NavButton to="/GestionTipoHabilidad">
                  <StyledFontAwesomeIcon icon={faTasks} size="xl" />
                  <NavParagraph>
                    Gestión
                    <br /> Tip Habili
                  </NavParagraph>
                </NavButton>
              </NavItem>

              <NavItem>
                <NavButton to="/GestionEmpresa">
                  <StyledFontAwesomeIcon icon={faBriefcase} size="xl" />
                  <NavParagraph>
                    Gestión
                    <br />
                    Empresa
                  </NavParagraph>
                </NavButton>
              </NavItem>
            </>
          )}

          {rol !== "administrador" && (
            <>
              <NavItem>
                <NavButton to="/Buscar">
                  <StyledFontAwesomeIcon icon={faSearch} size="xl" />
                  <NavParagraph>Buscar</NavParagraph>
                </NavButton>
              </NavItem>
              <NavItem>
                <NavButton to="/">
                  <StyledFontAwesomeIcon icon={faHome} size="xl" />
                  <NavParagraph>Inicio</NavParagraph>
                </NavButton>
              </NavItem>
            </>
          )}

          {rol === "empresa" && (
            <NavItem className="imagen">
              <NavLogo to="UsuarioEmp">
                <NavImage src={user}></NavImage>
              </NavLogo>
            </NavItem>
          )}
          {rol === "solicitante" && (
            <NavItem className="imagen">
              <NavLogo to="Usuario">
                <NavImage src={previewImage}></NavImage>
              </NavLogo>
            </NavItem>
          )}
        </NavList>
      </NavContainer>
    </MainNav>
  );
};

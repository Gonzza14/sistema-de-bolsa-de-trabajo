import { Header } from "../../../components/Header";
import React from "react";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  FaPen,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaUser,
  FaHouseUser,
  FaPhone,
} from "react-icons/fa";

import {
  BaseContainer,
  BaseBody,
  BaseSectionData,
  ContainerCol,
  Column4,
  Column8,
} from "../../../styles/base";
import {
  ButtonSection,
  GestionSection,
} from "../../../styles/pages/admin/gestion";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import {
  Contenedor,
  ContenidoIzquierdo,
  ContenidoDerecho,
  Titulo,
  Subtitulo,
  Boton,
} from "../../../styles/elements/botones";
import Loader from "../../../components/Loader";
import { GestionConAcademico } from "../../solicitante/conAcademico/GestionConAcademico";
import { GestionExpLabo } from "../../solicitante/expLaboral/GestionarExpLabo";
import { GestionHabilidadTec } from "../../solicitante/habilidadesTecnica/GestionHabilidadTec";
import { GestionIdioma } from "../../solicitante/idiomas/GestionIdioma";
import { GestionLibro } from "../../solicitante/libro/GestionLibro";
import { GestionCertificacion } from "../../solicitante/certificacion/GestionCertificacion";
import { GestionCongreso } from "../../solicitante/congreso/GestionCongreso";
import { GestionLogro } from "../../solicitante/logro/GestionarLogro";
import { GestionRecomLaboral } from "../../solicitante/recomendacionLaboral/GestionRecomLaboral";
import { GestionRecomPersonal } from "../../solicitante/recomendacionPersonal/GestionarRecomPersonal";
import { GestionExamen } from "../../solicitante/examen/GestionExamen";
import { CenteredDiv, ImgPerfilCV } from "../../../styles/pages/usuario";

const ContainerPerfil = styled.div`
  font-family: sans-serif;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.h3`
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 2px;
`;

const ListItem = styled.li`
  display: flex;
  margin: 5px;
  padding: 2px;
  align-items: center;
`;


export const VerCV = () => {
    const { pathname } = useLocation();
    const id_postulante = pathname.split("/")
    let id_usuario = localStorage.getItem("id_usuario");
    const url = 
    process.env.NODE_ENV === "production"
    ? `api/curriculum/${id_usuario}`
    :`http://localhost:3000/api/curriculum/${id_postulante[2]}`;
  
    let { dataBase, createDataEmpty, loading } = useCustomFetch(url);

    if (dataBase) {
        var valorIdCurriculum = dataBase.curriculum.id;
    }

    const handleClickCurriculum = () => {
        createDataEmpty();
    };

    if (loading == true) {
        return <Loader />;
    }

    return (
        <BaseContainer>
      <Header titulo="Ver curriculum" />
      <BaseBody>
        <ContainerCol>
          <Column4>
            <Titulo>Perfil</Titulo>
						<CenteredDiv><ImgPerfilCV src={`/perfil/${dataBase.solicitante.fotoDePerfil}`}/></CenteredDiv>
            <ContainerPerfil>
              <hr />
              <Title>Datos personales</Title>
              <hr />
              <List>
                <ListItem>
                  <FaUser></FaUser> Nombres: {dataBase.solicitante.nombresSolic}
                </ListItem>
                <ListItem>
                  <FaUser></FaUser> Apellidos: {dataBase.solicitante.apellidosSolic}
                </ListItem>
                <ListItem>
                  <FaHouseUser /> Direccion: {dataBase.solicitante.direcSolic}
                </ListItem>
                <ListItem>
                  <FaPhone /> Telefono: {dataBase.solicitante.telefonoSolic}
                </ListItem>
              </List>
              <hr />
              <Title>Redes Sociales</Title>
              <hr />
              <List>
                <ListItem>
                  <FaFacebook /> Facebook: {dataBase.solicitante.facebook}
                </ListItem>
                <ListItem>
                  <FaTwitter /> Twitter: {dataBase.solicitante.twitter}
                </ListItem>
                <ListItem>
                  <FaLinkedin /> Linkedin: {dataBase.solicitante.linkedin}
                </ListItem>
              </List>
            </ContainerPerfil>
          </Column4>
          <Column8>
            <GestionConAcademico
              parametro={valorIdCurriculum}
            ></GestionConAcademico>
            <GestionExpLabo parametro={valorIdCurriculum}></GestionExpLabo>
            <GestionHabilidadTec
              parametro={valorIdCurriculum}
            ></GestionHabilidadTec>
            <GestionIdioma parametro={valorIdCurriculum}></GestionIdioma>
            <GestionLibro parametro={valorIdCurriculum}></GestionLibro>
            <GestionCertificacion
              parametro={valorIdCurriculum}
            ></GestionCertificacion>
            <GestionCongreso parametro={valorIdCurriculum}></GestionCongreso>
            <GestionLogro parametro={valorIdCurriculum}></GestionLogro>
            <GestionRecomLaboral
              parametro={valorIdCurriculum}
            ></GestionRecomLaboral>
            <GestionRecomPersonal
              parametro={valorIdCurriculum}
            ></GestionRecomPersonal>
            <GestionExamen parametro={valorIdCurriculum}></GestionExamen>
          </Column8>
        </ContainerCol>
      </BaseBody>
    </BaseContainer>
    )
}
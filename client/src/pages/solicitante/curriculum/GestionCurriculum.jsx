import { Header } from "../../../components/Header";
import {
  BaseContainer,
  BaseBody,
  BaseSectionData,
  ContainerCol,
  Column4,
  Column8,
} from "../../../styles/base";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  ButtonSection,
  GestionSection,
} from "../../../styles/pages/admin/gestion";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import {
  Contenedor,
  ContenidoIzquierdo,
  Titulo,
  Subtitulo,
  Boton,
} from "../../../styles/elements/botones";
import Loader from "../../../components/Loader";
import { GestionConAcademico } from "../conAcademico/GestionConAcademico";
import { GestionExpLabo } from "../expLaboral/GestionarExpLabo";
import { GestionHabilidadTec } from "../habilidadesTecnica/GestionHabilidadTec";
import { GestionIdioma } from "../idiomas/GestionIdioma";
import { GestionLibro } from "../libro/GestionLibro";
import { GestionCertificacion } from "../certificacion/GestionCertificacion";
import { GestionCongreso } from "../congreso/GestionCongreso";
import { GestionLogro } from "../logro/GestionarLogro";
import { GestionRecomLaboral } from "../recomendacionLaboral/GestionRecomLaboral";
import { GestionRecomPersonal } from "../recomendacionPersonal/GestionarRecomPersonal";
import { GestionExamen } from "../examen/GestionExamen";

export const GestionCurriculum = () => {
  localStorage.setItem("id_usuario", 1);

  let id_usuario = localStorage.getItem("id_usuario"),
    url = `http://localhost:3000/api/curriculum/${id_usuario}`;

  const { pathname } = useLocation();

  let { dataBase, createDataEmpty, loading } = useCustomFetch(url);
  console.log(dataBase);

  if (dataBase) {
    var valorIdCurriculum = dataBase.curriculum.id;
  }

  const handleClickCurriculum = () => {
    createDataEmpty();
  };

  if (loading == true) {
    return <Loader />;
  }

  if (!dataBase) {
    return (
      <BaseContainer>
        <Header titulo="Curriculum" />
        <BaseBody>
          <BaseSectionData>
            <GestionSection>
              <Contenedor>
                <ContenidoIzquierdo>
                  <Titulo>¡Crea tu currículum ahora!</Titulo>
                  <Subtitulo>Destaca entre la multitud</Subtitulo>
                  <Boton onClick={handleClickCurriculum}>Inicia aqui</Boton>
                </ContenidoIzquierdo>
              </Contenedor>
            </GestionSection>
          </BaseSectionData>
        </BaseBody>
      </BaseContainer>
    );
  }

  return (
    <BaseContainer>
      <Header titulo="Crear curriculum" />
      <BaseBody>
        <ContainerCol>
          <Column4>
            <Titulo>Perfil</Titulo>
            !!!Alguna imagen!!!<hr></hr>
            Aqui va a ir la informacion sobre el usuario Direccion tomada desde
            su registro XD
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
  );
};

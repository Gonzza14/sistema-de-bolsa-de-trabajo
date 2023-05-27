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
import { GestionHabilidadTec } from "../habilidadesTecnicas/GestionHabilidadTec";

export const GestionCurriculum = () => {
  let url = "http://localhost:3000/api/curriculum";

  const { pathname } = useLocation();

  let { dataBase, createDataEmpty, loading } = useCustomFetch(url);
  if (dataBase !== null) {
    var valorIdCurriculum = dataBase.id;
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
            <GestionConAcademico parametro={valorIdCurriculum}></GestionConAcademico>
            <GestionExpLabo parametro={valorIdCurriculum}></GestionExpLabo>
            <GestionHabilidadTec parametro={valorIdCurriculum}></GestionHabilidadTec>
          </Column8>
        </ContainerCol>
      </BaseBody>
    </BaseContainer>
  );
};

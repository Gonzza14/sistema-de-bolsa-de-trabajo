import { Header } from "../../../components/Header";
import {
  BaseContainerCV,
} from "../../../styles/base";
import {
  ButtonCreateCV,
} from "../../../styles/elements/botones";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  ButtonSection,
  GestionSection,
} from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { Buscador } from "../../../components/Buscador";
import { useSearch } from "../../../hooks/useSearch";
import Message from "../../../components/Message";
import { ListarConAcademico } from "./ListarConAcademico";
import { FormularioConAcademico } from "./FormularioConAcademico";

export const GestionConAcademico = (props) => {
  let nCurriculum = props.parametro;
  let url = `http://localhost:3000/api/conAcademicos/${nCurriculum}`;

  const { pathname } = useLocation();

  let {
    dataBase,
    dataToEdit,
    setDataToEdit,
    createData,
    updateData,
    deleteData,
    error,
    loading,
    response,
    setResponse,
    handleClick,
  } = useCustomFetch(url);

  let { search, searcher, setSearch } = useSearch();

  return (
    <BaseContainerCV>
        <h3>Conocimientos academicos</h3>
          {response && (
            <Message
              msg="La operacion se realizo con exito"
              bgColor="#0F2651"
            />
          )}
          <ButtonSection>
            {
              <>
                <ButtonCreateCV to={`agregarConAcademico`} onClick={handleClick}>
                  <StyledFontAwesomeIcon
                    icon={faPlus}
                    size="lg"
                  ></StyledFontAwesomeIcon>
                </ButtonCreateCV>
              </>
            }
          </ButtonSection>

          <Routes>
            <Route
              path={``}
              element={
                <ListarConAcademico
                  error={error}
                  loading={loading}
                  setDataToEdit={setDataToEdit}
                  dataBase={dataBase}
                  deleteData={deleteData}
                  setResponse={setResponse}
                />
              }
            />
            <Route
              path={`agregarConAcademico`}
              element={
                <FormularioConAcademico
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={null}
                  setDataToEdit={setDataToEdit}
                />
              }
            />
            <Route
              path={`editarConAcademico/:id`}
              element={
                <FormularioConAcademico
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={dataToEdit}
                  setDataToEdit={setDataToEdit}
                />
              }
            />
          </Routes>
    </BaseContainerCV>
  );
};

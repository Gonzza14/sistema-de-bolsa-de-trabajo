import { Header } from "../../../components/Header";
import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";
import { ButtonCreate, SpanButton } from "../../../styles/elements/botones";
import { FormularioRolPermiso } from "./FormularioRolPermiso";
import { Route, Routes, useLocation } from "react-router-dom";
import { ListarRolPermiso } from "./ListarRolPermiso";
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

export const GestionRolPermiso = () => {
  let url = "http://localhost:3000/api/rolPermisos";

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

  const results = !search
    ? dataBase
    : dataBase.filter((data) =>
        data.Rol.nombreRol.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <BaseContainer>
      <Header titulo="Gestion de asignacion permisos a rol" />
      <BaseBody>
        <BaseSectionData>
          <GestionSection>
            {response && (
              <Message
                msg="La operacion se realizo con exito"
                bgColor="#0F2651"
              />
            )}
            <ButtonSection>
              {pathname === "/GestionRolPermiso" && (
                <>
                  <Buscador
                    placeHolder="Buscar permiso"
                    className="gestion"
                    search={search}
                    searcher={searcher}
                    setSearch={setSearch}
                  />                           
								</>
              )}
            </ButtonSection>
						<hr />
            <Routes>
              <Route
                path={``}
                element={
                  <ListarRolPermiso
                    error={error}
                    loading={loading}
                    setDataToEdit={setDataToEdit}
                    dataBase={results}
                    deleteData={deleteData}
                    setResponse={setResponse}
                  />
                }
              />
              {<Route path={`editar/:id`} element={<FormularioRolPermiso
                                updateData={updateData}
                                dataToEdit={dataToEdit}
                                setDataToEdit={setDataToEdit}
                            />} /> }
            </Routes>
          </GestionSection>
        </BaseSectionData>
      </BaseBody>
    </BaseContainer>
  );
};

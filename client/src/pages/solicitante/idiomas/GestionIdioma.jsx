import { BaseContainerCV } from "../../../styles/base";
import { ButtonCreateCV } from "../../../styles/elements/botones";
import { Route, Routes, useLocation } from "react-router-dom";
import { ButtonSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import Message from "../../../components/Message";
import { ListarIdioma } from "./ListarIdioma";
import { FormularioIdioma } from "./FormularioIdioma";
import { useModalCV } from "../../../hooks/useModalCV";
import { ModalForm } from "../../../components/ModalForm";

export const GestionIdioma = (props) => {
  let nCurriculum = props.parametro;
  let url = 
  process.env.NODE_ENV === "production"
  ? `/api/idioma/${nCurriculum}`
  : `http://localhost:3000/api/idioma/${nCurriculum}`;
  
  const [isOpen, openModalCV, closeModal] = useModalCV();

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

  const modalActivate = () => {
    openModalCV();
  };

  return (
    <BaseContainerCV>
      <h3>Idiomas</h3>
      {response && (
        <Message msg="La operacion se realizo con exito" bgColor="#0F2651" />
      )}
      {pathname == "/GestionCurriculum" &&(<ButtonSection>
        {
          <>
            <ButtonCreateCV
              to={`agregarIdioma`}
              onClick={(handleClick, modalActivate)}
            >
              <StyledFontAwesomeIcon
                icon={faPlus}
                size="lg"
              ></StyledFontAwesomeIcon>
            </ButtonCreateCV>
          </>
        }
      </ButtonSection>)}

      <ListarIdioma
        openModalCV={openModalCV}
        error={error}
        loading={loading}
        setDataToEdit={setDataToEdit}
        dataBase={dataBase}
        deleteData={deleteData}
        setResponse={setResponse}
      />

      <Routes>
        <Route
          path={`agregarIdioma`}
          element={
            <ModalForm
              isOpen={isOpen}
              dataToEdit={null}
              closeModal={closeModal}
            >
              <FormularioIdioma
                createData={createData}
                updateData={updateData}
                dataToEdit={null}
                setDataToEdit={setDataToEdit}
              />
            </ModalForm>
          }
        />
        <Route
          path={`editarIdioma/:id`}
          element={
            <ModalForm
              isOpen={isOpen}
              dataToEdit={dataToEdit}
              closeModal={closeModal}
            >
              <FormularioIdioma
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit}
              />
            </ModalForm>
          }
        />
      </Routes>
    </BaseContainerCV>
  );
};

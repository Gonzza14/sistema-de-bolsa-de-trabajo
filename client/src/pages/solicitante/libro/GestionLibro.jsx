import { BaseContainerCV } from "../../../styles/base";
import { ButtonCreateCV } from "../../../styles/elements/botones";
import { Route, Routes, useLocation } from "react-router-dom";
import { ButtonSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import Message from "../../../components/Message";
import { ListarLibro } from "./ListarLibro";
import { FormularioLibro } from "./FormularioLibro";
import { useModalCV } from "../../../hooks/useModalCV";
import { ModalForm } from "../../../components/ModalForm";

export const GestionLibro = (props) => {
  let nCurriculum = props.parametro;
  let url = 
  process.env.NODE_ENV === "production"
  ? `/api/libro/${nCurriculum}`
  : `http://localhost:3000/api/libro/${nCurriculum}`;
  
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
      <h3>Libros</h3>
      {response && (
        <Message msg="La operacion se realizo con exito" bgColor="#0F2651" />
      )}
      {pathname == "/GestionCurriculum" &&(<ButtonSection>
        {
          <>
            <ButtonCreateCV
              to={`agregarLibro`}
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

      <ListarLibro
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
          path={`agregarLibro`}
          element={
            <ModalForm
              isOpen={isOpen}
              dataToEdit={null}
              closeModal={closeModal}
            >
              <FormularioLibro
                createData={createData}
                updateData={updateData}
                dataToEdit={null}
                setDataToEdit={setDataToEdit}
              />
            </ModalForm>
          }
        />
        <Route
          path={`editarLibro/:id`}
          element={
            <ModalForm
              isOpen={isOpen}
              dataToEdit={dataToEdit}
              closeModal={closeModal}
            >
              <FormularioLibro
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

import { BaseContainerCV } from "../../../styles/base";
import { ButtonCreateCV } from "../../../styles/elements/botones";
import { Route, Routes, useLocation } from "react-router-dom";
import { ButtonSection } from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import Message from "../../../components/Message";
import { ListarRecomLaboral } from "./ListarRecomLaboral";
import { FormularioRecomLaboral } from "./FormularioRecomLaboral";
import { useModalCV } from "../../../hooks/useModalCV";
import { ModalForm } from "../../../components/ModalForm";

export const GestionRecomLaboral = (props) => {
  let nCurriculum = props.parametro;
  let url = `http://localhost:3000/api/recomLabo/${nCurriculum}`;
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
      <h3>Recomendaciones Laborales</h3>
      {response && (
        <Message msg="La operacion se realizo con exito" bgColor="#0F2651" />
      )}
      <ButtonSection>
        {
          <>
            <ButtonCreateCV
              to={`agregarRecomLaboral`}
              onClick={(handleClick, modalActivate)}
            >
              <StyledFontAwesomeIcon
                icon={faPlus}
                size="lg"
              ></StyledFontAwesomeIcon>
            </ButtonCreateCV>
          </>
        }
      </ButtonSection>

      <ListarRecomLaboral
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
          path={`agregarRecomLaboral`}
          element={
            <ModalForm
              isOpen={isOpen}
              dataToEdit={null}
              closeModal={closeModal}
            >
              <FormularioRecomLaboral
                createData={createData}
                updateData={updateData}
                dataToEdit={null}
                setDataToEdit={setDataToEdit}
              />
            </ModalForm>
          }
        />
        <Route
          path={`editarRecomLaboral/:id`}
          element={
            <ModalForm
              isOpen={isOpen}
              dataToEdit={dataToEdit}
              closeModal={closeModal}
            >
              <FormularioRecomLaboral
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

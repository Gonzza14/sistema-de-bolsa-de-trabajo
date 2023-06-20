import {
  BaseContainerCV,
} from "../../../styles/base";
import {
  ButtonCreateCV,
} from "../../../styles/elements/botones";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  ButtonSection,
} from "../../../styles/pages/admin/gestion";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import Message from "../../../components/Message";
import { ListarExpLabo } from "./ListarExpLabo";
import { FormularioExpLabo } from "./FormularioExpLabo";
import { useModalCV } from "../../../hooks/useModalCV";
import { ModalForm } from "../../../components/ModalForm";

export const GestionExpLabo = (props) => {
  let nCurriculum = props.parametro;

	let url = 
	process.env.NODE_ENV === "production"
	? `/api/expLabos/${nCurriculum}`
	:`http://localhost:3000/api/expLabos/${nCurriculum}`;

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
        <h3>Experiencia Laboral</h3>
          {response && (
            <Message
              msg="La operacion se realizo con exito"
              bgColor="#0F2651"
            />
          )}
          {pathname == "/GestionCurriculum" &&(<ButtonSection>
            {
              <>
                <ButtonCreateCV to={`agregarExpLabo`} onClick={(handleClick, modalActivate)}
>
                  <StyledFontAwesomeIcon
                    icon={faPlus}
                    size="lg"
                  ></StyledFontAwesomeIcon>
                </ButtonCreateCV>
              </>
            }
          </ButtonSection>)}
					<ListarExpLabo openModalCV={openModalCV}
                  error={error}
                  loading={loading}
                  setDataToEdit={setDataToEdit}
                  dataBase={dataBase}
                  deleteData={deleteData}
                  setResponse={setResponse}
                />
          <Routes>

            <Route
              path={`agregarExpLabo`}
              element={
								<ModalForm isOpen={isOpen} dataToEdit={null} closeModal={closeModal}>
                <FormularioExpLabo
                  createData={createData}
                  updateData={updateData}
                  dataToEdit={null}
                  setDataToEdit={setDataToEdit}
                />
								</ModalForm>
              }
            />
            <Route
              path={`editarExpLabo/:id`}
              element={
								<ModalForm isOpen={isOpen} dataToEdit={dataToEdit} closeModal={closeModal}>

                <FormularioExpLabo
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

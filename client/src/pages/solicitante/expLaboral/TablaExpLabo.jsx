import {
  ButtonContainer,
  ButtonModalDelete,
  IconoBorrarModal,
} from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import { ModalTitle } from "../../../styles/elements/modal";
import {
  Timeline,
  TimelineCardLeft,
  TimelineCardContent,
  TimelineCardButtons,
  ButtonOpt,
  CardContainer,
  CardTitle,
  CardContent,
} from "../../../styles/base";

export const TablaExpLabo = ({
  data,
  setDataToEdit,
  deleteData,
  setResponse,
  openModalCV,
}) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const navigate = useNavigate();
  const { pathname } = useLocation()
  
  const handleEdit = (row) => {
    setResponse(false);
    setDataToEdit(row);
    navigate(`editarExpLabo/${row.id}`);
    openModalCV();
  };

  const handleDelete = (row) => {
    setResponse(false);
    setIdToDelete(row.id);
    openModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ModalTitle>
          ¿Estás seguro de eliminar el registro con el identificador "
          {idToDelete}"?
        </ModalTitle>
        <ButtonContainer className="boton-modal">
          <ButtonModalDelete
            onClick={() => {
              closeModal();
              deleteData(idToDelete);
            }}
          >
            <IconoBorrarModal icon={faTrash} size="1x"></IconoBorrarModal>
            Eliminar
          </ButtonModalDelete>
        </ButtonContainer>
      </Modal>

      <Timeline>
        {data.map((item) => (
          <TimelineCardLeft key={item.id}>
            <CardContainer>
              <TimelineCardContent>
                <CardContent><b>Puesto: </b>{item.puesto}</CardContent>
                <CardContent><b>Descripción Puesto: </b>{item.descPuesto}</CardContent>
                <CardContent><b>Periodo Experiencia: </b>{item.periodoExpLabo}</CardContent>
                <CardContent><b>Años: </b>{item.aniostrab}</CardContent>
                <CardContent><b>Nombre Organización: </b>{item.nombreOrga}</CardContent>
                <CardContent><b>Contacto Organización: </b>{item.contactoOrga}</CardContent>
              </TimelineCardContent>
              {pathname == "/GestionCurriculum" &&(<TimelineCardButtons>
                <ButtonOpt onClick={() => handleEdit(item)}>
                  <StyledFontAwesomeIconBoton
                    icon={faPenToSquare}
                    size="xl"
                  ></StyledFontAwesomeIconBoton>
                </ButtonOpt>
                <ButtonOpt onClick={() => handleDelete(item)}>
                  <StyledFontAwesomeIconBoton
                    icon={faTrash}
                    size="xl"
                  ></StyledFontAwesomeIconBoton>
                </ButtonOpt>
              </TimelineCardButtons>)}
            </CardContainer>
          </TimelineCardLeft>
        ))}
      </Timeline>
    </>
  );
};

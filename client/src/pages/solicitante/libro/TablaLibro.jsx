import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ButtonContainer,
  ButtonModalDelete,
  IconoBorrarModal,
} from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { ModalTitle } from "../../../styles/elements/modal";
import {
  Timeline,
  TimelineCardLeft,
  TimelineCardContent,
  TimelineCard,
  TimelineCardButtons,
  ButtonOpt,
  CardContainer,
  CardTitle,
  CardContent,
} from "../../../styles/base";

export const TablaLibro = ({
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
    navigate(`editarLibro/${row.id}`);
    openModalCV();
  };

  const handleDelete = (row) => {
    setResponse(false);
    setIdToDelete(row.id);
    openModal();
  };

  return (
    <>
      <Modal isOpen={isOpen} closeModal={closeModal} titulo="Eliminar registro">
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
      <>
        <Timeline>
          {data.map((item) => (
            <TimelineCardLeft key={item.id}>
              <CardContainer>
                <TimelineCardContent>
                  <CardContent><b>Nombre del Libro: </b>{item.nombreLibro}</CardContent>
                  <CardContent><b>Lugar del Libro: </b>{item.lugarLibro}</CardContent>
                  <CardContent><b>Fecha Publicación: </b>{item.fechaPub.split("T")[0]}</CardContent>
                  <CardContent><b>Edición del libro: </b>{item.edicionLibro}</CardContent>
                  <CardContent><b>ISBN: </b>{item.isbn}</CardContent>
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
    </>
  );
};

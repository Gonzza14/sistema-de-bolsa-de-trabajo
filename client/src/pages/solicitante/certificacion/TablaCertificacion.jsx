import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  TimelineCardButtons,
  ButtonOpt,
  CardContainer,
  CardTitle,
  CardContent,
} from "../../../styles/base";

export const TablaCertificacion = ({
  data,
  setDataToEdit,
  deleteData,
  setResponse,
  openModalCV,
}) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const navigate = useNavigate();

  const handleEdit = (row) => {
    setResponse(false);
    setDataToEdit(row);
    navigate(`editarCertificacion/${row.id}`);
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
      <>
        <Timeline>
          {data.map((item) => (
            <TimelineCardLeft key={item.id}>
              <CardContainer>
                <TimelineCardContent>
                  <CardContent><b>Nombre Certificación: </b>{item.nomCertificacion}</CardContent>
                  <CardContent><b>Código Certificado: </b>{item.codCertificacion}</CardContent>
                  <CardContent><b>Instituto Certificación: </b>{item.instiCertificacion}</CardContent>
                  <CardContent><b>Fecha Certificación: </b>{item.fechaCertificacion.split("T")[0]}</CardContent>
                </TimelineCardContent>
                <TimelineCardButtons>
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
                </TimelineCardButtons>
              </CardContainer>
            </TimelineCardLeft>
          ))}
        </Timeline>
      </>
    </>
  );
};
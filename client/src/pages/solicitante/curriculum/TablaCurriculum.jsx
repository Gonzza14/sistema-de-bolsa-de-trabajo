import { ButtonContainer, ButtonModalDelete, ButtonOp, IconoBorrarModal } from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DataTableStyle, paginationComponentOptions } from "../../../styles/elements/tabla";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import { ModalTitle } from "../../../styles/elements/modal";

export const TablaCurriculum= ({ data, setDataToEdit, deleteData, setResponse }) => {
    const [isOpen, openModal, closeModal] = useModal(false);
    const [idToDelete, setIdToDelete] = useState(null);

    return (
        <>
        </>
    );
};

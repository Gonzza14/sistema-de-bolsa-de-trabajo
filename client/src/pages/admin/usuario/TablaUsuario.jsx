import { ButtonContainer, ButtonModalDelete, ButtonOp, IconoBorrarModal } from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DataTableStyle, paginationComponentOptions } from "../../../styles/elements/tabla";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import { ModalTitle } from "../../../styles/elements/modal";


export const TablaUsuario = ({ data, setDataToEdit, deleteData, setResponse }) => {
    const [isOpen, openModal, closeModal] = useModal(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const navigate = useNavigate();

    const handleEdit = (row) => {
        setResponse(false)
        setDataToEdit(row)
        navigate(`editar/${row.id}`)
    }

    const handleDelete = (row) => {
        setResponse(false)
        setIdToDelete(row.id)
        openModal();
    }

    const columns = [
        {
            name: 'Correo',
            selector: row => row.correoUsuario,
            sortable: true,
        },
        {
            name: 'Rol',
            selector: row => row.Rol.nombreRol,
        },
        {
            name: 'Accion',
            key: "action",
            text: "Action",
            className: "action",
            width: "10em",
            sortable: false,
            cell: (row) => {
                return (
                    <>
                        <ButtonOp onClick={() => handleEdit(row)}><StyledFontAwesomeIconBoton icon={faPenToSquare} size="1x"></StyledFontAwesomeIconBoton></ButtonOp>
                        <ButtonOp onClick={() => handleDelete(row)}><StyledFontAwesomeIconBoton icon={faTrash} size="1x"></StyledFontAwesomeIconBoton></ButtonOp>
                    </>
                );
            },
        },
    ];
    return (
        <>
            <Modal isOpen={isOpen} closeModal={closeModal} titulo="Eliminar registro">
                <ModalTitle>¿Estás seguro de eliminar el registro con el identificador "{idToDelete}"?</ModalTitle>
                <ButtonContainer className="boton-modal">
                    <ButtonModalDelete onClick={() => { closeModal(); deleteData(idToDelete) }}><IconoBorrarModal icon={faTrash} size="1x"></IconoBorrarModal>Eliminar</ButtonModalDelete>
                </ButtonContainer>
            </Modal>
            <DataTableStyle
                dense
                columns={columns}
                data={data}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </>
    );
}
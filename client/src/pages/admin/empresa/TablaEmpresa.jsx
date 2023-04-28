import { ButtonContainer, ButtonModalDelete, ButtonOp, IconoBorrarModal } from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DataTableStyle, paginationComponentOptions } from "../../../styles/elements/tabla";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import { ModalTitle } from "../../../styles/elements/modal";

export const TablaEmpresa = ({ data, setDataToEdit, deleteData }) => {
    const [isOpen, openModal, closeModal] = useModal(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const navigate = useNavigate();

    const handleEdit = (row) => {
        setDataToEdit(row)
        navigate(`editar/${row.id}`)
    }

    const handleDelete = (row) => {
        setIdToDelete(row.id)
        openModal();
    }
    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombreEmpresa,
            sortable: true,
        },
        {
            name: 'Telefono',
            selector: row => row.telefonoEmpresa,
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
            <Modal isOpen={isOpen} closeModal={closeModal}>
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
};

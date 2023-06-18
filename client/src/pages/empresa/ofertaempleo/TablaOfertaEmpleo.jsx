import { ButtonContainer, ButtonModalDelete, ButtonOp, IconoBorrarModal } from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faEye, faPenToSquare, faTrash, faPerson } from "@fortawesome/free-solid-svg-icons";
import { DataTableStyle, paginationComponentOptions } from "../../../styles/elements/tabla";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import { ModalTitle } from "../../../styles/elements/modal";

export const TablaOfertaEmpleo = ({ data, setDataToEdit, deleteData, setResponse }) => {
    const [isOpen, openModal, closeModal] = useModal(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const navigate = useNavigate();

    const handleEdit = (row) => {
        setResponse(false)
        setDataToEdit(row)
        navigate(`editar/${row.id}`)
    }
    const handleDetalle = (row) => {
        setResponse(false)
        setDataToEdit(row)
        navigate(`detalle/${row.id}`)
    }

    const handleDelete = (row) => {
        setResponse(false)
        setIdToDelete(row.id)
        openModal();
    }
    const handleListar = (row) => {
        setResponse(false)
        navigate("/ListarPostulantes/"+row.id);
    }
    const columns = [
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Fecha de anuncio',
            selector: row => row.createdAt,
        },
        {
            name: 'Titulo',
            selector: row => row.tituloOferta,
        },
        {
            name: 'Estado',
            selector:  row => row.estado ? 'Activo' : 'Inactivo',
        },
        {
            name: 'idCategoriaOfer',
            selector:  row => row.idCategoriaOfer,
            omit: true,
        },
        {
            name: 'fechaExpiracion',
            selector:  row => row.fechaExpiracion,
            omit: true,
        },
        {
            name: 'descOferta',
            selector:  row => row.descOferta,
            omit: true,
        },
        {
            name: 'perfilAcademico',
            selector:  row => row.perfilAcademico,
            omit: true,
        },
        {
            name: 'habilidades',
            selector:  row => row.habilidades,
            omit: true,
        },
        {
            name: 'expLaboral',
            selector:  row => row.expLaboral,
            omit: true,
        },
        {
            name: 'rangoSalar',
            selector:  row => row.rangoSalar,
            omit: true,
        },
        {
            name: 'ubicacion',
            selector:  row => row.ubicacion,
            omit: true,
        },
        {
            name: 'modalidad',
            selector:  row => row.modalidad,
            omit: true,
        },

        {
            name: 'categoriaOfer',
            selector:  row => row.categoriaOfer,
            omit: true,
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
                        <ButtonOp onClick={() => handleListar(row)}><StyledFontAwesomeIconBoton icon={faPerson} size="1x"></StyledFontAwesomeIconBoton></ButtonOp>
                        <ButtonOp onClick={() => handleDetalle(row)}><StyledFontAwesomeIconBoton icon={faEye} size="1x"></StyledFontAwesomeIconBoton></ButtonOp>
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
                responsive
                columns={columns}
                data={data}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </>
    );
};

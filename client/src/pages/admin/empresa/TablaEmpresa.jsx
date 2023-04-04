import { ButtonOp } from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { DataTableStyle } from "../../../styles/elements/tabla";
import { useNavigate } from "react-router-dom";


export const TablaEmpresa = ({ data, setDataToEdit, deleteData }) => {
    
    
    const navigate = useNavigate();

    const handleEdit = (row) =>{
        setDataToEdit(row)
        navigate(`editar/${row.id}`)
    }

    const columns = [
        {
            name: 'Nombre',
            selector: row => row.nombre,
        },
        {
            name: 'Descripcion',
            selector: row => row.descripcion,
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
                        <ButtonOp onClick={() => deleteData(row.id)}><StyledFontAwesomeIconBoton icon={faTrash} size="1x"></StyledFontAwesomeIconBoton></ButtonOp>
                    </>
                );
            },
        },
    ];
    return (
        <DataTableStyle
            columns={columns}
            data={data}
        />
    );
};

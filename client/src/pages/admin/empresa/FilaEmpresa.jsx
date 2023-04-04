import { useNavigate } from "react-router-dom";
import { TablaRow, TablaTD } from "../../../styles/elements/tabla";
import { ButtonOp } from "../../../styles/elements/botones";
import { StyledFontAwesomeIconBoton } from "../../../styles/elements/botones";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export const FilaEmpresa = ({ el, setDataToEdit, deleteData }) => {

    let { id, nombre, descripcion } = el
    const navigate = useNavigate();

    const handleEdit = () =>{
        setDataToEdit(el)
        navigate(`editar/${id}`)
    }
    return (
        <TablaRow>
            <TablaTD>{nombre}</TablaTD>
            <TablaTD>{descripcion}</TablaTD>
            <TablaTD>
                <ButtonOp onClick={handleEdit}><StyledFontAwesomeIconBoton icon={faPenToSquare} size="1x"></StyledFontAwesomeIconBoton></ButtonOp>
                <ButtonOp onClick={() => deleteData(id)}><StyledFontAwesomeIconBoton icon={faTrash} size="1x"></StyledFontAwesomeIconBoton></ButtonOp>
            </TablaTD>
        </TablaRow>
    );
}
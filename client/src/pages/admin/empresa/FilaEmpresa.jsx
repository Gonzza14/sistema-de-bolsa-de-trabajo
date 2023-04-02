import { useNavigate } from "react-router-dom";

export const FilaEmpresa = ({ el, setDataToEdit, deleteData }) => {

    let { id, nombre, descripcion } = el
    const navigate = useNavigate();

    const handleEdit = () =>{
        setDataToEdit(el)
        navigate(`editar/${id}`)
    }
    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>
                <button onClick={handleEdit}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
}
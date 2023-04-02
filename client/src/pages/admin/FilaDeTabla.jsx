export const FilaDeTabla = ({ el, setDataToEdit, deleteData }) => {

    let { id, nombre, descripcion } = el
    return (
        <tr>
            <td>{nombre}</td>
            <td>{descripcion}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    );
}
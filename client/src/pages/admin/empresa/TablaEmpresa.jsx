import { FilaDeTabla } from "../FilaDeTabla";

export const TablaEmpresa = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div>
            <h3>Tabla de empresas</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((el) => (
                            <FilaDeTabla key={el.id} el={el} setDataToEdit={setDataToEdit}
                            deleteData={deleteData}/>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

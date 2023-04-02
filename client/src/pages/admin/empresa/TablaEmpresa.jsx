import { FilaDeTabla } from "../FilaDeTabla";

export const TablaEmpresa = ({ data }) => {
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
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="3">Sin datos</td>
                        </tr>
                    ) : (
                        data.map((elemento) => <FilaDeTabla key={elemento.id} element={elemento} />)
                    )}
                </tbody>
            </table>
        </div>
    );
};

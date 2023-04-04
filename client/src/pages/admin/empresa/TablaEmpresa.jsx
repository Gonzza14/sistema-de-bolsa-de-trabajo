import { TablaContainer, TablaHeader, TablaRow, TablaHeaderCell, TablaBody, TablaTD, TablaColumnTitle} from "../../../styles/elements/tabla";
import { FilaEmpresa } from "./FilaEmpresa";

export const TablaEmpresa = ({ data, setDataToEdit, deleteData }) => {
    return (
            <TablaContainer>
                <TablaHeader>
                    <TablaRow>
                        <TablaHeaderCell><TablaColumnTitle>Nombre</TablaColumnTitle></TablaHeaderCell>
                        <TablaHeaderCell><TablaColumnTitle>Descripcion</TablaColumnTitle></TablaHeaderCell>
                        <TablaHeaderCell><TablaColumnTitle>Ops.</TablaColumnTitle></TablaHeaderCell>
                    </TablaRow>
                </TablaHeader>
                <TablaBody>
                    {data.length > 0 ? (
                        data.map((el) => (
                            <FilaEmpresa key={el.id} el={el} setDataToEdit={setDataToEdit}
                            deleteData={deleteData}/>
                        ))
                    ) : (
                        <TablaRow>
                            <TablaTD colSpan="3">No existen registros en la base de datos</TablaTD>
                        </TablaRow>
                    )}
                </TablaBody>
            </TablaContainer>
    );
};

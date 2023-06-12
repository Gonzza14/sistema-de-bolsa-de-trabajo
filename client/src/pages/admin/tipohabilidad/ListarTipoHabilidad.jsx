import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaTipoHabilidad } from "../tipohabilidad/TablaTipoHabilidad";

export const ListarTipoHabilidad = ({error, loading, dataBase, setDataToEdit, deleteData})=>{
    return (
        <>
            {loading && <Loader />}
            {
                error && (
                    <Message 
                        msg={`Error ${error.status}: ${error.statusText}`}
                        bgColor="#dc3545"
                    />
                )
            }
            {
                dataBase && <TablaTipoHabilidad
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
            }
        </>
    )
}

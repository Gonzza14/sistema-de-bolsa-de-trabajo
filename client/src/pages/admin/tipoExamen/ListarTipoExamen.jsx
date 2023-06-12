import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaTipoExamen } from "../tipoExamen/TablaTipoExamen";

export const ListarTipoExamen = ({error, loading, dataBase, setDataToEdit, deleteData})=>{
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
                dataBase && <TablaTipoExamen
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
            }
        </>
    )
}

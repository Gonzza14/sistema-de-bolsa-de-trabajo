import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaEmpresa } from "./TablaEmpresa";

export const ListarEmpresa = ({error, loading, dataBase, setDataToEdit ,deleteData, tabla}) => {
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
                dataBase && <TablaEmpresa
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
            }
        </>
    );
}
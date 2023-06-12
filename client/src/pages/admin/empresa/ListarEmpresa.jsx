import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaEmpresa } from "./TablaEmpresa";

export const ListarEmpresa = ({error, loading, dataBase, setDataToEdit ,deleteData, setResponse}) => {
    return (
        <>
            {loading && <Loader />}
            {
                error && (
                    <Message
                        msg={`Error ${error.status}: ${error.statusText}`}
                        bgColor="#E84616"
                    />
                )
            }
            {
                dataBase && <TablaEmpresa
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    setResponse={setResponse}
                />
            }
        </>
    );
}
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaPermiso } from "./TablaPermiso";

export const ListarPermiso = ({error, loading, dataBase, setDataToEdit ,deleteData, setResponse}) => {
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
                dataBase && <TablaPermiso
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    setResponse={setResponse}
                />
            }
        </>
    );
}
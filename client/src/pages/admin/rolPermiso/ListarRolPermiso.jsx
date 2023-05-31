import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaRolPermiso } from "./TablaRolPermiso";

export const ListarRolPermiso = ({error, loading, dataBase, setDataToEdit ,deleteData, setResponse}) => {
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
                dataBase && <TablaRolPermiso
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    setResponse={setResponse}
                />
            }
        </>
    );
}
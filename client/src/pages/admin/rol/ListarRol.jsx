import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaRol } from "../rol/TablaRol";

export const ListarRol = ({error, loading, dataBase, setDataToEdit ,deleteData, setResponse}) => {
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
                dataBase && <TablaRol
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    setResponse={setResponse}
                />
            }
        </>
    );
}
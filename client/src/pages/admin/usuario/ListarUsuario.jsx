import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaUsuario } from "./TablaUsuario.jsx";

export const ListarUsuario = ({error, loading, dataBase, setDataToEdit ,deleteData}) => {
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
                dataBase && <TablaUsuario
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
            }
        </>
    );
}
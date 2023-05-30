import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaIdioma } from "./TablaIdioma";

export const ListarIdioma = ({error, loading, dataBase, setDataToEdit ,deleteData, setResponse, openModalCV}) => {
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
                dataBase && <TablaIdioma 
										openModalCV={openModalCV}
                    data={dataBase}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                    setResponse={setResponse}
										setModal={false}
                />
            }
        </>
    );
}
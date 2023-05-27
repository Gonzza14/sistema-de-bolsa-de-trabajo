import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { TablaExpLabo } from "./TablaExpLabo";

export const ListarExpLabo = ({
  error,
  loading,
  dataBase,
  setDataToEdit,
  deleteData,
  setResponse,
  openModalCV,
}) => {
  return (
    <>
      {loading && <Loader />}
      {error && (
        <Message
          msg={`Error ${error.status}: ${error.statusText}`}
          bgColor="#E84616"
        />
      )}
      {dataBase && (
        <TablaExpLabo
          openModalCV={openModalCV}
          data={dataBase}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
          setResponse={setResponse}
        />
      )}
    </>
  );
};

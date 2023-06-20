import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";

import { Route, Routes, useNavigate } from "react-router-dom";
import { EditarPerfil } from "./EditarPerfil";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { DatosUsuario } from "./DatosUsuario";
import Message from "../../../components/Message";

export const Usuario = ({ setDataLleno }) => {
  //localStorage.setItem("id_usuario", 1);
  const navigate = useNavigate();

  let id_usuario = localStorage.getItem("id_usuario");

  const url =
    process.env.NODE_ENV === "production"
      ? "api/usuarios/solicitante/" + id_usuario
      : `http://localhost:3000/api/usuarios/solicitante/${id_usuario}`;

  let {
    dataBase,
    dataToEdit,
    setDataToEdit,
    updateDataSolicitante,
    error,
    loading,
    response,
    setResponse,
  } = useCustomFetch(url, setDataLleno, navigate);

  return (
    <BaseContainer>
      <BaseBody>
        <BaseSectionData>
          {response && (
            <Message
              msg="La operacion se realizo con exito"
              bgColor="#0F2651"
            />
          )}
          <Routes>
            <Route
              path={""}
              element={
                <DatosUsuario
                  error={error}
                  loading={loading}
                  setDataToEdit={setDataToEdit}
                  dataToEdit={dataToEdit}
                  dataBase={dataBase}
                  setResponse={setResponse}
                />
              }
            />
            <Route
              path={`editar`}
              element={
                <EditarPerfil
                  updateDataSolicitante={updateDataSolicitante}
                  error={error}
                  loading={loading}
                  setDataToEdit={setDataToEdit}
                  dataToEdit={dataToEdit}
                  dataBase={dataBase}
                  setResponse={setResponse}
                />
              }
            />
          </Routes>
        </BaseSectionData>
      </BaseBody>
    </BaseContainer>
  );
};

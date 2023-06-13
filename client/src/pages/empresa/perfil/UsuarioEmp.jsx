import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";

import { Route, Routes } from "react-router-dom";
import { EditarPerfilEmp } from "./EditarPerfilEmp";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { DatosUsuarioEmp } from "./DatosUsuarioEmp";
import Message from "../../../components/Message"


export const UsuarioEmp = () => {
    //localStorage.setItem("id_usuario", 1);

    let id_usuario = localStorage.getItem("id_usuario"),
        url = `http://localhost:3000/api/usuarios/empresa/${id_usuario}`

    let {
        dataBase,
        dataToEdit,
        setDataToEdit,
        updateDataSolicitante,
        error,
        loading,
        response,
        setResponse,
    } = useCustomFetch(url);
    return (
        <BaseContainer>
            <BaseBody>
                <BaseSectionData>
                    {response && (
                        <Message msg="La operacion se realizo con exito" bgColor="#0F2651" />
                    )}
                    <Routes>
                        <Route path={''} element={<DatosUsuarioEmp
                            error={error}
                            loading={loading}
                            setDataToEdit={setDataToEdit}
                            dataToEdit={dataToEdit}
                            dataBase={dataBase}
                            setResponse={setResponse}
                        />} />
                        <Route path={`editar`} element={<EditarPerfilEmp
                            updateDataSolicitante={updateDataSolicitante}
                            error={error}
                            loading={loading}
                            setDataToEdit={setDataToEdit}
                            dataToEdit={dataToEdit}
                            dataBase={dataBase}
                            setResponse={setResponse}
                        />} />
                    </Routes>
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};
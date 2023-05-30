import { BaseContainer, BaseBody, BaseSectionData } from "../../../styles/base";

import { Route, Routes } from "react-router-dom";
import { EditarPerfil } from "./EditarPerfil";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { DatosUsuario } from "./DatosUsuario";


export const Usuario = () => {
    localStorage.setItem("id_usuario", 1);

    let id_usuario = localStorage.getItem("id_usuario"),
        url = `http://localhost:3000/api/usuarios/solicitante/${id_usuario}`

    let {
        dataBase,
        dataToEdit,
        setDataToEdit,
        updateData,
        error,
        loading,
        response,
        setResponse,
     } = useCustomFetch(url);
    return (
        <BaseContainer>
            <BaseBody>
                <BaseSectionData>
                    <Routes>
                        {response && (
                            <Message msg="La operacion se realizo con exito" bgColor="#0F2651" />
                        )}
                        <Route path={''} element={<DatosUsuario
                        error={error}
                        loading={loading}
                        setDataToEdit={setDataToEdit}
                        dataToEdit={dataToEdit}
                        dataBase={dataBase}
                        setResponse={setResponse}
                        />} />
                        <Route path={`editar`} element={<EditarPerfil
                         updateData={updateData}
                         error={error}
                         loading={loading}
                         setDataToEdit={setDataToEdit}
                         dataToEdit={dataToEdit}
                         dataBase={dataBase}
                         setResponse={setResponse}
                        />}/>
                    </Routes>
                </BaseSectionData>
            </BaseBody>
        </BaseContainer>
    );
};
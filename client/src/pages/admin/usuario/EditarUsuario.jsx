import { FormContainer, FormTitle } from "../../../styles/elements/formularios"
import { Route, Routes, useLocation } from "react-router-dom";
import { CambiarContra } from "./CambiarContra";
import { CambiarCorreo } from "./CambiarCorreo";
import { EditarMenu } from "./EditarMenu";

export const EditarUsuario = ({
    updateData,
    dataToEdit,
    setDataToEdit
}) => {
    const { pathname } = useLocation()
    
    return (
        <FormContainer>
            {!pathname.includes("/editarC") && <EditarMenu/>}
            <Routes>
                <Route path={`editarCorreo`} element={<CambiarCorreo
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />} />
                <Route path={`editarContrasena`} element={<CambiarContra
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />} />
            </Routes>
        </FormContainer>
    )
}
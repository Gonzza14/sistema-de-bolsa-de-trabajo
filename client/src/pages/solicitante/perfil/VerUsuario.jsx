import { SectionPerfil, HeaderPerfil, PortadaPerfil, AvatarPerfil, EditPerfil, IconEditPerfil, ImgPerfil, ButtonAvatarPerfil, IconAvatarPerfil, BodyPerfil, BioPerfil, NamePerfil, FooterPerfil, DatosPerfil, ItemPerfil, IconDataPerfil } from "../../../styles/pages/usuario";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { useLocation } from "react-router-dom";

export const VerUsuario = ({ children, error, loading, setDataToEdit, dataToEdit, dataBase, setResponse}) => {

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
            <SectionPerfil>
                    {children}
            </SectionPerfil>
        </>
    )
}
import { SectionPerfil, HeaderPerfil, PortadaPerfil, AvatarPerfil, EditPerfil, IconEditPerfil, ImgPerfil, ButtonAvatarPerfil, IconAvatarPerfil, BodyPerfil, BioPerfil, NamePerfil, FooterPerfil, DatosPerfil, ItemPerfil, IconDataPerfil } from "../../../styles/pages/usuario";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
import { useLocation } from "react-router-dom";

export const VerUsuario = ({ children, error, loading, setDataToEdit, dataToEdit, dataBase, setResponse}) => {

    const { pathname } = useLocation()

    const hiddenFileInput = useRef(null);

    const handleFileClick = e => {
        hiddenFileInput.current.click();
    }

    const handleChange = e => {
        const fileUploaded = e.target.files[0];
        console.log(fileUploaded);
    };

    const handleEditClick = () => {
        setResponse(false);
        setDataToEdit(dataBase);
    }
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
                <HeaderPerfil>
                    <PortadaPerfil>
                        <AvatarPerfil>
                            <ImgPerfil />
                            {pathname === "/Usuario/editar" &&
                                <>
                                    <ButtonAvatarPerfil onClick={handleFileClick}>
                                        <IconAvatarPerfil icon={faImage} size="xl"></IconAvatarPerfil>
                                    </ButtonAvatarPerfil>
                                    <input type="file" style={{ display: 'none' }} ref={hiddenFileInput} onChange={handleChange} />
                                </>
                            }
                        </AvatarPerfil>
                        {pathname !== "/Usuario/editar" &&
                            <EditPerfil to={'editar'} onClick={handleEditClick}>
                                <IconEditPerfil icon={faPen} size="xl"></IconEditPerfil>
                                Editar usuario
                            </EditPerfil>
                        }
                    </PortadaPerfil>
                </HeaderPerfil>
                <BodyPerfil>
                    {children}
                </BodyPerfil>
            </SectionPerfil>
        </>
    )
}
import { VerUsuarioEmp } from "./VerUsuarioEmp";
import { BioPerfil, NamePerfil, FooterPerfil, DatosPerfil, ItemPerfil, IconDataPerfil,  HeaderPerfil, PortadaPerfil, AvatarPerfil, EditPerfil, IconEditPerfil, ImgPerfil, ButtonAvatarPerfil, IconAvatarPerfil, BodyPerfil } from "../../../styles/pages/usuario";
import { faMapSigns, faCalendarAlt, faPersonHalfDress, faPhoneAlt, faIdCard, faPassport, faIdCardClip, faListNumeric } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import moment from 'moment';
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { faImage, faPen } from "@fortawesome/free-solid-svg-icons";



export const DatosUsuarioEmp = ({ error, loading, setDataToEdit, dataToEdit, dataBase, setResponse }) => {

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

    let nombre = null;
    dataBase ? nombre = dataBase.nombreEmpresa : nombre = "Cargando...";
        
    return(
        <>
            {dataBase && <VerUsuarioEmp
                error={error}
                loading={loading}
                setDataToEdit={setDataToEdit}
                dataToEdit={dataToEdit}
                dataBase={dataBase}
                setResponse={setResponse}>
 <HeaderPerfil>
                    <PortadaPerfil>
                        <AvatarPerfil>
                            <ImgPerfil src={`/perfil/${dataBase.fotoDePerfil}`}/>
                            {pathname === "/UsuarioEmp/editar" &&
                                <>
                                    <ButtonAvatarPerfil onClick={handleFileClick}>
                                        <IconAvatarPerfil icon={faImage} size="xl"></IconAvatarPerfil>
                                    </ButtonAvatarPerfil>
                                    <input id="fotoDePerfil" name="fotoDePerfil" type="file" style={{ display: 'none' }} ref={hiddenFileInput} onChange={handleChange} />
                                </>
                            }
                        </AvatarPerfil>
                        {pathname !== "/UsuarioEmp/editar" &&
                            <EditPerfil to={'editar'} onClick={handleEditClick}>
                                <IconEditPerfil icon={faPen} size="xl"></IconEditPerfil>
                                Editar usuario
                            </EditPerfil>
                        }
                    </PortadaPerfil>
                </HeaderPerfil>
                <BodyPerfil>

                <BioPerfil>
                    <NamePerfil>{nombre}</NamePerfil>
                </BioPerfil>
                <FooterPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faMapSigns} size="xl"></IconDataPerfil><strong>Dirección:</strong></ItemPerfil>
                        <ItemPerfil>{dataBase.direcEmpresa} </ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faPhoneAlt} size="xl"></IconDataPerfil><strong>Telefono:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.telefonoEmpresa}</ItemPerfil>
                    </DatosPerfil>

                </FooterPerfil>
                </BodyPerfil>
            </VerUsuarioEmp>}
        </>
    );
}
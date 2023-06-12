import { VerUsuarioEmp } from "./VerUsuarioEmp";
import { BioPerfil, NamePerfil, FooterPerfil, DatosPerfil, ItemPerfil, IconDataPerfil } from "../../../styles/pages/usuario";
import { faMapSigns, faCalendarAlt, faPersonHalfDress, faPhoneAlt, faIdCard, faPassport, faIdCardClip, faListNumeric } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import moment from 'moment';


export const DatosUsuarioEmp = ({ error, loading, setDataToEdit, dataToEdit, dataBase, setResponse }) => {

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
            </VerUsuarioEmp>}
        </>
    );
}
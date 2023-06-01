import { VerUsuario } from "./VerUsuario";
import { BioPerfil, NamePerfil, FooterPerfil, DatosPerfil, ItemPerfil, IconDataPerfil } from "../../../styles/pages/usuario";
import { faMapSigns, faCalendarAlt, faPersonHalfDress, faPhoneAlt, faIdCard, faPassport, faIdCardClip, faListNumeric } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import moment from 'moment';


export const DatosUsuario = ({ error, loading, setDataToEdit, dataToEdit, dataBase, setResponse }) => {

    let nombre = null;
    dataBase ? nombre = dataBase.nombresSolic + " " + dataBase.apellidosSolic : nombre = "Cargando...";
    
    let nacimiento = null ;
    let fechaFormateada = null;
    if(dataBase){
      nacimiento = new Date(dataBase.fechaNacimiento);
      nacimiento.setMinutes(nacimiento.getMinutes() + nacimiento.getTimezoneOffset())
      const year = nacimiento.getFullYear();
      const month = nacimiento.getMonth() + 1;
      const day = nacimiento.getDate();    
      fechaFormateada =`${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
    }else{
        nacimiento = null;
    }

    
    return(
        <>
            {dataBase && <VerUsuario
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
                        <ItemPerfil><IconDataPerfil icon={faMapSigns} size="xl"></IconDataPerfil><strong>Direccion de usuario:</strong></ItemPerfil>
                        <ItemPerfil>{dataBase.direcSolic} </ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faPhoneAlt} size="xl"></IconDataPerfil><strong>Telefono:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.telefonoSolic}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faCalendarAlt} size="xl"></IconDataPerfil><strong>Fecha de nacimiento: </strong></ItemPerfil>
                        <ItemPerfil>{fechaFormateada}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faPersonHalfDress} size="xl"></IconDataPerfil><strong>Genero:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.Genero.nombreGenero}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faIdCard} size="xl"></IconDataPerfil><strong>DUI:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.dui}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faPassport} size="xl"></IconDataPerfil><strong>Pasaporte:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.pasaporte}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faIdCardClip} size="xl"></IconDataPerfil><strong>NIT:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.nit}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faListNumeric} size="xl"></IconDataPerfil><strong>NUP:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.nup}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faFacebook} size="xl"></IconDataPerfil><strong>Facebook:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.facebook}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faTwitter} size="xl"></IconDataPerfil><strong>Twitter: </strong></ItemPerfil>
                        <ItemPerfil>{dataBase.twitter}</ItemPerfil>
                    </DatosPerfil>
                    <DatosPerfil>
                        <ItemPerfil><IconDataPerfil icon={faLinkedin} size="xl"></IconDataPerfil><strong>Linkedin:</strong> </ItemPerfil>
                        <ItemPerfil>{dataBase.linkedin}</ItemPerfil>
                    </DatosPerfil>
                </FooterPerfil>
            </VerUsuario>}
        </>
    );
}
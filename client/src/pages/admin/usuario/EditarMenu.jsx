import { EditButton, SpanButton } from "../../../styles/elements/botones";
import { EditContainer, EditDescription, EditText, EditCard } from "../../../styles/pages/usuario";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "../../../styles/elements/navBar";
import { CambiarContra } from "./CambiarContra";
import { CambiarCorreo } from "./CambiarCorreo";
import { FormContainer, FormTitle } from "../../../styles/elements/formularios"
import { ButtonSection } from "../../../styles/pages/admin/gestion"


export const EditarMenu = () => {
    return (<>
        <FormTitle>Editar usuario</FormTitle>
        <ButtonSection>
            <EditCard>
                <EditContainer>
                    <EditText>Correo electronico</EditText>
                    <EditDescription>Cambia el correo electronico del usuario</EditDescription>
                </EditContainer>
                <EditButton to={`editarCorreo`}><StyledFontAwesomeIcon icon={faUserPen} size="xl"></StyledFontAwesomeIcon><SpanButton>Cambiar correo</SpanButton></EditButton>
            </EditCard>
        </ButtonSection>
        <ButtonSection>
            <EditCard>
                <EditContainer>
                    <EditText>Contraseña</EditText>
                    <EditDescription>Cambia la constraseña del usuario</EditDescription>
                </EditContainer>
                <EditButton to={`editarContrasena`}><StyledFontAwesomeIcon icon={faUserPen} size="xl"></StyledFontAwesomeIcon><SpanButton>Cambiar clave</SpanButton></EditButton>
            </EditCard>
        </ButtonSection>
    </>)

}

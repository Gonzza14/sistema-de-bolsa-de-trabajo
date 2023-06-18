import {
    FormContainerCV,
    FormularioCV,
    FormLabelCV,
    FormInputCV,
    FormInputBottonCV,
    FormTextAreaCV
} from "../../../styles/elements/formularios";
import { ButtonContainer, ButtonModalDelete, ButtonOp, IconoBorrarModal } from "../../../styles/elements/botones";
import { MensajeValidacion } from "../../../styles/elements/mensajes";

export const FormularioCorreo = ({ correo }) => {

    const handleSubmit = (e) => {

    }

    const handleChange = (e) => {

    }

    return (
        <FormContainerCV>
            <p>El correo se envia a {correo}</p>
            <FormularioCV onSubmit={handleSubmit}>
                <FormLabelCV htmlFor="asunto">Asunto</FormLabelCV>
                <FormInputCV
                    type="text"
                    id="asunto"
                    name="asunto"
                    placeholder="Nombre del asunto:"
                    onChange={handleChange}
                />
                <FormLabelCV htmlFor="contenidoCorreo">Contenido</FormLabelCV>
                <FormTextAreaCV
                    type="text"
                    id="contenidoCorreo"
                    rows="10"
                    name="contenidoCorreo"
                    placeholder="Contenido del correo:"
                    onChange={handleChange}
                />
                 <ButtonContainer className="boton-modal">
                        <ButtonModalDelete>Enviar</ButtonModalDelete>
                </ButtonContainer>
                {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
            </FormularioCV>
        </FormContainerCV>
    )
}
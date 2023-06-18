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
import emailjs from "emailjs-com";

export const FormularioCorreo = ({ correo, closeModal }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aya6dzi', 'template_ey4y5x8', e.target, 'NDwvX7aqHYMtC6A4c').then(res => {
            console.log(res);
        })
    }

    return (
        <FormContainerCV>
            <FormularioCV onSubmit={handleSubmit}>
            <FormLabelCV htmlFor="email">Email</FormLabelCV>
                <FormInputCV
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={correo}
                />
                <FormLabelCV htmlFor="nombre">Nombre</FormLabelCV>
                <FormInputCV
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                />
                <FormLabelCV htmlFor="mensaje">Mensaje</FormLabelCV>
                <FormTextAreaCV
                    type="text"
                    id="mensaje"
                    rows="10"
                    name="mensaje"
                    placeholder="Contenido del correo"
                />
                <ButtonContainer className="boton-modal">
                    <ButtonModalDelete onClick={closeModal}>Enviar</ButtonModalDelete>
                </ButtonContainer>
                {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
            </FormularioCV>
        </FormContainerCV>
    )
}
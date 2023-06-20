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
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { useState } from "react";
import emailjs from "emailjs-com";



export const FormularioCorreo = ({ oferta, empresa, postulante, correo, closeModal }) => {

    const url =
        process.env.NODE_ENV === "production"
            ? "/api/seguimiento" 
            : "http://localhost:3000/api/seguimiento"

            let {
                createData,
            } = useCustomFetch(url);

    const initialForm = {
        idOferta: oferta,
        idEmpresa: empresa,
        idSolic: postulante,
        contenido: "",
        id: null
    };

    const [form, setForm] = useState(initialForm);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aya6dzi', 'template_ey4y5x8', e.target, 'NDwvX7aqHYMtC6A4c').then(res => {
            console.log(res);
        })
        console.log(form);
        if (form.id === null) {
            createData(form);
        }
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
                <FormLabelCV htmlFor="contenido">Mensaje</FormLabelCV>
                <FormTextAreaCV
                    type="text"
                    id="contenido"
                    rows="10"
                    name="contenido"
                    placeholder="Contenido del correo"
                    onChange={handleChange}

                />
                <ButtonContainer className="boton-modal">
                    <ButtonModalDelete onClick={closeModal}>Enviar</ButtonModalDelete>
                </ButtonContainer>
                {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
            </FormularioCV>
        </FormContainerCV>
    )
}
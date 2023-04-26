import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton } from "../../../styles/elements/formularios";

const initialForm = {
    correoUsuario: "",
    contrasena: "",
    confirmarContrasena: "",
    id: null,
};

export const FormularioUsuario = ({
    createData,
}) => {
    const [form, setForm] = useState(initialForm);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.correoUsuario || !form.contrasena || !form.confirmarContrasena) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        }

        handleReset();

    };

    const handleReset = (e) => {
        setForm(initialForm);
        navigate("/GestionUsuario")
    };

    return (
        <FormContainer>
            <FormTitle>Agregar usuario</FormTitle>
            <Formulario onSubmit={handleSubmit}>
                <FormLabel htmlFor="correoUsuario">Correo</FormLabel>
                <FormInput
                    type="email"
                    id="correoUsuario"
                    name="correoUsuario"
                    placeholder="Correo electrónico"
                    onChange={handleChange}
                    value={form.correoUsuario}
                />
                <FormLabel htmlFor="contrasena">Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={form.contrasena}
                />
                <FormLabel htmlFor="confirmarContrasena">Confirmar contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="confirmarContrasena"
                    name="confirmarContrasena"
                    placeholder="Confirmar contraseña"
                    onChange={handleChange}
                    value={form.confirmarContrasena}
                />
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </FormContainer>
    );
}
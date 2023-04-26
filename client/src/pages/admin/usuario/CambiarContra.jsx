import React, { useState, useEffect } from "react";
import { FormTitle, Formulario, FormLabel, FormInput, FormInputBotton } from "../../../styles/elements/formularios";
import { useNavigate } from "react-router-dom";

const initialForm = {
    contrasena: "",
    confirmarContrasena: "",
    id: null,
};

export const CambiarContra = ({
    updateData,
    dataToEdit,
    setDataToEdit
}) => {
    const [form, setForm] = useState(initialForm);
    const navigate = useNavigate();

    useEffect(() => {
        if (dataToEdit) {
            setForm({
                id: dataToEdit.id,
                correoUsuario: dataToEdit.correoUsuario,
            });
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.contrasena || !form.confirmarContrasena) {
            alert("Datos incompletos");
            return;
        }

        if (form.id !== null) {
            updateData(form);
        }
        handleReset();
    };
    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
        navigate(`/GestionUsuario`)
    };
    return (
        <>
            <FormTitle>Cambiar contraseña</FormTitle>
            <Formulario onSubmit={handleSubmit}>
                <FormLabel htmlFor="contrasena">Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    value={form.contrasena || ""}
                />
                <FormLabel htmlFor="confirmarContrasena">Confirmar contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="confirmarContrasena"
                    name="confirmarContrasena"
                    placeholder="Confirmar contraseña"
                    onChange={handleChange}
                    value={form.confirmarContrasena || ""}
                />
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </>
    );
}
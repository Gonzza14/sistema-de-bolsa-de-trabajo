import React, { useState, useEffect } from "react";
import { FormTitle, Formulario, FormLabel, FormInput, FormInputBotton } from "../../../styles/elements/formularios";
import { useNavigate } from "react-router-dom";

const initialForm = {
    correoUsuario: "",
    id: null,
};

export const CambiarCorreo = ({
    updateData,
    dataToEdit,
    setDataToEdit
}) => {
    const [form, setForm] = useState(initialForm);
    const navigate = useNavigate();

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
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

        if (!form.correoUsuario) {
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
            <FormTitle>Cambiar correo electronico</FormTitle>
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
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </>
    )
}
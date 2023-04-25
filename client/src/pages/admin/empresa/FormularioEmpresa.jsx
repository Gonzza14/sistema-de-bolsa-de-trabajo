import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton, FormTextArea } from "../../../styles/elements/formularios";

const initialForm = {
  nombreEmpresa: "",
  correoEmpresa: "",
  id: null,
};

export const FormularioEmpresa = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
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

    if (!form.nombreEmpresa || !form.correoEmpresa) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
    navigate("/GestionEmpresa")
  };
  return (
    <FormContainer>
       <FormTitle>{dataToEdit ? "Editar empresa" : "Agregar empresa"}</FormTitle>
      <Formulario onSubmit={handleSubmit}>
        <FormLabel htmlFor="nombreEmpresa">Nombre</FormLabel>
        <FormInput
          type="text"
          id="nombreEmpresa"
          name="nombreEmpresa"
          placeholder="Nombre de la empresa"
          onChange={handleChange}
          value={form.nombreEmpresa}
        />
        <FormLabel htmlFor="correoEmpresa">Correo electronico</FormLabel>
        <FormInput
          type="text"
          id="correoEmpresa"
          name="correoEmpresa"
          placeholder="Correo de la empresa"
          onChange={handleChange}
          value={form.correoEmpresa}
        />
        <FormInputBotton type="submit" value="Enviar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </Formulario>
    </FormContainer>
  );
};

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const initialForm = {
  nombre: "",
  descripcion: "",
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

    if (!form.nombre || !form.descripcion) {
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
    <div>
       <h3>{dataToEdit ? "Editar empresa" : "Agregar empresa"}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombreEmpresa">Nombre</label>
        <input
          type="text"
          id="nombreEmpresa"
          name="nombre"
          placeholder="Nombre de la empresa"
          onChange={handleChange}
          value={form.nombre}
        />
        <label htmlFor="descripcionEmpresa">Descripcion</label>
        <input
          type="text"
          id="descripcionEmpresa"
          name="descripcion"
          placeholder="Descripcion"
          onChange={handleChange}
          value={form.descripcion}
        />
        <input type="submit" value="Enviar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </form>
    </div>
  );
};

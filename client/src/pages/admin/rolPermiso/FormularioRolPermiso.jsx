import {
  FormContainer,
  FormTitle,
  Formulario,
  FormLabel,
  FormInput,
  FormInputBotton,
  FormTextArea,
} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
import { useCustomFetch } from "../../../hooks/useCustomFetch";
import { useState } from "react";
import styled from "styled-components";

const initialForm = {
  idPermiso: [],
  nombrePermisos: [],
  id: 0,
};

const validateForm = (form) => {
  let errors = {};
  return errors;
};

export const FormularioRolPermiso = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const url = 
        process.env.NODE_ENV === "production"
        ? "/api/permisos"
        : "http://localhost:3000/api/permisos";

  let { dataBase } = useCustomFetch(url);

  let path = "/GestionRolPermiso";

  let { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm,
    path,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit
  );

  const [checkedIds, setCheckedIds] = useState(dataToEdit.idPermiso);
  const [checkedNames, setCheckedNames] = useState(dataToEdit.nombrePermisos);

  const handleCheckboxChange = (event) => {
    const id = parseInt(event.target.value);
    const name = event.target.name;
    if (event.target.checked) {
      setCheckedIds([...checkedIds, id]);
      setCheckedNames([...checkedNames, name]);
    } else {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
      setCheckedNames(
        checkedNames.filter((checkedName) => checkedName !== name)
      );
    }
  };

  return (
    <FormContainer>
      <FormTitle>Asignar un permiso al Rol</FormTitle>
      <Formulario onSubmit={handleSubmit}>
        <FormLabel htmlFor="idPermiso">
          <b>Lista de permisos disponibles</b>
        </FormLabel>
        <input
          type="hidden"
          name="idPermiso"
          value={(form.idPermiso = checkedIds)}
        />
        <input
          type="hidden"
          name="idRol"
          value={(form.idRol = dataToEdit.idRol)}
        />
        <input type="hidden" name="id" value={(form.id = dataToEdit.idRol)} />
        <input
          type="hidden"
          name="nombrePermisos"
          value={(form.nombrePermisos = checkedNames)}
        />

        {dataBase &&
          dataBase.map((permiso) => (
            <div key={permiso.id}>
              <input
                type="checkbox"
                name={permiso.nombrePermiso}
                value={permiso.id}
                onBlur={handleBlur}
                checked={checkedIds.includes(permiso.id)}
                onChange={handleCheckboxChange}
              />
              <label>{permiso.nombrePermiso}</label>
            </div>
          ))}
        <FormInputBotton type="submit" value="Asignar" />
      </Formulario>
    </FormContainer>
  );
};

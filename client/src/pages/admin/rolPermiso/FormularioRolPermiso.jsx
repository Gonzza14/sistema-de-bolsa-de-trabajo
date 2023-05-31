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
	let url = "http://localhost:3000/api/permisos";

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

const handleCheckboxChange = (event) => {
    const id = parseInt(event.target.value);
    if (event.target.checked) {
        setCheckedIds([...checkedIds, id]);
    } else {
        setCheckedIds(checkedIds.filter(checkedId => checkedId !== id));
    }
}
const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

	return (
<FormContainer>
  <FormTitle>{dataToEdit ? "Editar permiso" : "Agregar permiso"}</FormTitle>
  <Formulario onSubmit={handleSubmit}>
    <FormLabel htmlFor="idPermiso">Permisos del rol</FormLabel>
    <input type="hidden" name="idPermiso" value={(form.idPermiso = checkedIds)} />
    <input type="hidden" name="idRol" value={(form.idRol = dataToEdit.idRol)} />
    <input type="hidden" name="id" value={(form.id = dataToEdit.idRol)} />
    <CheckboxContainer>
      {dataBase &&
        dataBase.map((permiso) => (
          <div key={permiso.id}>
            <input
              type="checkbox"
              value={permiso.id}
              onBlur={handleBlur}
              checked={checkedIds.includes(permiso.id)}
              onChange={handleCheckboxChange}
            />
            <label>{permiso.nombrePermiso}</label>
          </div>
        ))}
    </CheckboxContainer>
    <FormInputBotton type="submit" value="Enviar" />
  </Formulario>
</FormContainer>
	);
	
};

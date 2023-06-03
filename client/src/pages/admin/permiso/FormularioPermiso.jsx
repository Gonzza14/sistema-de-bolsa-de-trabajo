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
const initialForm = {
  nombrePermiso: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.nombrePermiso.trim()) {
    errors.nombrePermiso = `El nombre del permiso es requerido`;
  } else if (!regexName.test(form.nombrePermiso.trim())) {
    errors.nombrePermiso =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.nombrePermiso;
  }

  return errors;
};

export const FormularioPermiso = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  let path = "/GestionPermiso";

  let { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm,
    path,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit
  );

  return (
    <FormContainer>
      <FormTitle>{dataToEdit ? "Editar permiso" : "Agregar permiso"}</FormTitle>
      <Formulario onSubmit={handleSubmit}>
        <FormLabel htmlFor="nombrePermiso">Nombre Permiso</FormLabel>
        <FormInput
          type="text"
          id="nombrePermiso"
          name="nombrePermiso"
          placeholder="Nombre del permiso"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombrePermiso}
        />
        {errors.nombrePermiso && (
          <MensajeValidacion>{errors.nombrePermiso}</MensajeValidacion>
        )}
        <FormInputBotton type="submit" value="Enviar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </Formulario>
    </FormContainer>
  );
};

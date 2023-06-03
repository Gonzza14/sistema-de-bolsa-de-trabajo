import {
  FormContainerCV,
  FormularioCV,
  FormLabelCV,
  FormInputCV,
  FormInputBottonCV,
} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
const initialForm = {
  nombreRecomLab: "",
  telefonoRecomLab: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-+]+$/;
  const regexTelefono = /^\+503\s\d{4}-\d{4}$/;

  if (!form.nombreRecomLab.trim()) {
    errors.nombreRecomLab = `El nombre recomendacion es requerido`;
  } else if (!regexVarchar.test(form.nombreRecomLab.trim())) {
    errors.nombreRecomLab =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else if (form.nombreRecomLab.trim().length > 100) {
    errors.nombreRecomLab = `Nombre Recom Lab debe tener un máximo de 100 caracteres`;
  } else {
    delete errors.nombreRecomLab;
  }

  if (!form.telefonoRecomLab.trim()) {
    errors.telefonoRecomLab = `El telefono de la recomendacion es requerido`;
  } else if (form.telefonoRecomLab.trim().length > 12) {
    errors.telefonoRecomLab = `Telefono debe tener un máximo de 12 caracteres`;
  } else {
    delete errors.telefonoRecomLab;
  }

  return errors;
};

export const FormularioRecomLaboral = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  let path = "/GestionCurriculum";

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
    <FormContainerCV>
      <FormularioCV onSubmit={handleSubmit}>
        <FormLabelCV htmlFor="nombreRecomLab">
          Nombre Completo
        </FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreRecomLab"
          name="nombreRecomLab"
          placeholder="Nombre completo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreRecomLab}
        />
        {errors.nombreRecomLab && (
          <MensajeValidacion>{errors.nombreRecomLab}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="telefonoRecomLab">
          Telefono de Contacto
        </FormLabelCV>
        <FormInputCV
          type="tel"
          id="telefonoRecomLab"
          name="telefonoRecomLab"
          placeholder="Telefono de contacto"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.telefonoRecomLab}
        />
        {errors.telefonoRecomLab && (
          <MensajeValidacion>{errors.telefonoRecomLab}</MensajeValidacion>
        )}

        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

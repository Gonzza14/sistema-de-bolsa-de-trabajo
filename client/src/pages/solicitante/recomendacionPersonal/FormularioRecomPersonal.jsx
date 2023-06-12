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
  nombreRecomPers: "",
  telefonoRecomPers: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.nombreRecomPers.trim()) {
    errors.nombreRecomPers = `El nombre recomendacion personal es requerido`;
  } else if (!regexVarchar.test(form.nombreRecomPers.trim())) {
    errors.nombreRecomPers =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.nombreRecomPers;
  }

	if (!form.telefonoRecomPers.trim()) {
    errors.telefonoRecomPers = `El telefono de la recomendacion es requerido`;
  } else if (form.telefonoRecomPers.trim().length > 12) {
    errors.telefonoRecomPers = `Telefono debe tener un máximo de 12 caracteres`;
  } else {
    delete errors.telefonoRecomPers;
  }

  return errors;
};

export const FormularioRecomPersonal = ({
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
        <FormLabelCV htmlFor="nombreRecomPers">
          Nombre Completo
        </FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreRecomPers"
          name="nombreRecomPers"
          placeholder="Nombre completo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreRecomPers}
        />
        {errors.nombreRecomPers && (
          <MensajeValidacion>{errors.nombreRecomPers}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="telefonoRecomPers">
          Telefono de Contacto
        </FormLabelCV>
        <FormInputCV
          type="tel"
          id="telefonoRecomPers"
          name="telefonoRecomPers"
          placeholder="Telefono de contacto"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.telefonoRecomPers}
        />
        {errors.telefonoRecomPers && (
          <MensajeValidacion>{errors.telefonoRecomPers}</MensajeValidacion>
        )}

        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

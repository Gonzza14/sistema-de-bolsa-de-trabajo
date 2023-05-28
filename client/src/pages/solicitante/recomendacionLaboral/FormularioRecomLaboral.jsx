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
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.nombreRecomLab.trim()) {
    errors.nombreRecomLab = `El nombre recomendacion es requerido`;
  } else if (!regexVarchar.test(form.nombreRecomLab.trim())) {
    errors.nombreRecomLab =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.nombreRecomLab;
  }

  if (!form.telefonoRecomLab.trim()) {
    errors.telefonoRecomLab = `El telefono de la recomendacion es requerido`;
  } else if (!regexVarchar.test(form.telefonoRecomLab.trim())) {
    errors.telefonoRecomLab =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

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
        <FormLabelCV htmlFor="nombreRecomLab">Nombre de la Recomendacion Laboral</FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreRecomLab"
          name="nombreRecomLab"
          placeholder="Nombre de la Recomendacion Laboral"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreRecomLab}
        />
        {errors.nombreRecomLab && (
          <MensajeValidacion>{errors.nombreRecomLab}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="telefonoRecomLab">Telefono de la Recomendacion Laboral</FormLabelCV>
        <FormInputCV
          type="tel"
          id="telefonoRecomLab"
          name="telefonoRecomLab"
          placeholder="Telefono de la Recomendacion Laboral"
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

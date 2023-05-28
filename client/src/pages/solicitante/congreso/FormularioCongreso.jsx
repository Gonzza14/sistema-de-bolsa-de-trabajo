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
  lugarCongreso: "",
  paisCongreso: "",
	antiCongreso: "",
  fechaCongreso: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.lugarCongreso.trim()) {
    errors.lugarCongreso = `Lugar del congreso es requerido`;
  } else if (!regexVarchar.test(form.lugarCongreso.trim())) {
    errors.lugarCongreso =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.lugarCongreso;
  }

  if (!form.paisCongreso.trim()) {
    errors.paisCongreso = `Pais del congreso es requerido`;
  } else if (!regexVarchar.test(form.paisCongreso.trim())) {
    errors.paisCongreso = "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.paisCongreso;
  }

  if (!form.antiCongreso.trim()) {
    errors.antiCongreso = `Es requerido`;
  } else if (!regexVarchar.test(form.antiCongreso.trim())) {
    errors.antiCongreso = "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.antiCongreso;
  }

  if (!form.fechaCongreso.trim()) {
    errors.fechaCongreso = `Fecha de congreso es requerido`;
  } else if (!regexVarchar.test(form.fechaCongreso.trim())) {
    errors.fechaCongreso = "No debe de contener mas de 255 caracteres";
  } else {
    delete errors.fechaCongreso;
  }

  return errors;
};

export const FormularioCongreso = ({
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
        <FormLabelCV htmlFor="lugarCongreso">Lugar Congreso</FormLabelCV>
        <FormInputCV
          type="text"
          id="lugarCongreso"
          name="lugarCongreso"
          placeholder="Lugar Congreso"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.lugarCongreso}
        />
        {errors.lugarCongreso && (
          <MensajeValidacion>{errors.lugarCongreso}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="paisCongreso">Pais Congreso</FormLabelCV>
        <FormInputCV
          type="text"
          id="paisCongreso"
          name="paisCongreso"
          placeholder="Pais Congresoo"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.paisCongreso}
        />
        {errors.paisCongreso && (
          <MensajeValidacion>{errors.paisCongreso}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="antiCongreso">Anfitrion del Congreso</FormLabelCV>
        <FormInputCV
          type="text"
          id="antiCongreso"
          name="antiCongreso"
          placeholder="Anfitrion del Congreso"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.antiCongreso}
        />
        {errors.antiCongreso && (
          <MensajeValidacion>{errors.antiCongreso}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="fechaCongreso">Fecha Congreso</FormLabelCV>
        <FormInputCV
          type="date"
          id="fechaCongreso"
          name="fechaCongreso"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fechaCongreso}
        ></FormInputCV>
        {errors.fechaCongreso && (
          <MensajeValidacion>{errors.fechaCongreso}</MensajeValidacion>
        )}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

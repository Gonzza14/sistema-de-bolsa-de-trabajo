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
  logroRealizado: "",
  fechaLogro: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.logroRealizado.trim()) {
    errors.logroRealizado = `Logro realizado es requerido`;
  } else if (!regexVarchar.test(form.logroRealizado.trim())) {
    errors.logroRealizado =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.logroRealizado;
  }

  if (!form.fechaLogro.trim()) {
    errors.fechaLogro = `Fecha logro es requerido`;
  } else if (!regexVarchar.test(form.fechaLogro.trim())) {
    errors.fechaLogro = "No debe de contener mas de 255 caracteres";
  } else {
    delete errors.fechaLogro;
  }

  return errors;
};

export const FormularioLogro = ({
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
        <FormLabelCV htmlFor="logroRealizado">Logro Realizado</FormLabelCV>
        <FormInputCV
          type="text"
          id="logroRealizado"
          name="logroRealizado"
          placeholder="Logro Realizado"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.logroRealizado}
        />
        {errors.logroRealizado && (
          <MensajeValidacion>{errors.logroRealizado}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="fechaLogro">Fecha Logro</FormLabelCV>
        <FormInputCV
          type="date"
          id="fechaLogro"
          name="fechaLogro"
          placeholder="Fecha Logro"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fechaLogro}
        ></FormInputCV>
        {errors.fechaLogro && (
          <MensajeValidacion>{errors.fechaLogro}</MensajeValidacion>
        )}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

import {
  FormContainerCV,
  FormTitleCV,
  FormularioCV,
  FormLabelCV,
  FormInputCV,
  FormInputBottonCV,
  FormTextAreaCV,
} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
const initialForm = {
  puesto: "",
  descPuesto: "",
  periodoExpLabo: "",
  aniostrab: "",
  nombreOrga: "",
  contactoOrga: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;
  let regexInteger = /^[1-9]\d*$/;
  let regexPhone =
    /^\+(?:\d{1,3}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,14}(?:\s*(?:ext\.?|[#x-])\s*\d{1,5})?$/;
	let regexArea = /^.{1,255}$/;


  if (!form.puesto.trim()) {
    errors.puesto = `El nombre del puesto es requerido`;
  } else if (!regexVarchar.test(form.puesto.trim())) {
    errors.puesto =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.puesto;
  }

  if (!form.descPuesto.trim()) {
    errors.descPuesto = `La descripcion del puesto es requerido`;
  } else if (!regexArea.test(form.descPuesto.trim())) {
    errors.descPuesto =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.descPuesto;
  }

  if (!form.periodoExpLabo.trim()) {
    errors.periodoExpLabo = `El periodo experiencia es requerido`;
  } else if (!regexVarchar.test(form.periodoExpLabo.trim())) {
    errors.periodoExpLabo =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.periodoExpLabo;
  }

  if (!form.aniostrab) {
    errors.aniostrab = `Anios trabajando es requerido`;
  } else if (!regexInteger.test(form.aniostrab)) {
    errors.aniostrab = "Este campo solo acepta numeros";
  } else {
    delete errors.aniostrab;
  }

  if (!form.nombreOrga.trim()) {
    errors.nombreOrga = `El nombre de la organizacion es requerido`;
  } else if (!regexVarchar.test(form.nombreOrga.trim())) {
    errors.nombreOrga =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.nombreOrga;
  }

  if (!form.contactoOrga.trim()) {
    errors.contactoOrga = `El contacto de la organizacion es requerido`;
  } else if (!regexPhone.test(form.contactoOrga.trim())) {
    errors.contactoOrga = "Solo acepta el formato +## #### ####";
  } else {
    delete errors.contactoOrga;
  }

  return errors;
};

export const FormularioExpLabo = ({
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
        <FormLabelCV htmlFor="puesto">Nombre puesto</FormLabelCV>
        <FormInputCV
          type="text"
          id="puesto"
          name="puesto"
          placeholder="Nombre del puesto:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.puesto}
        />
        {errors.puesto && (
          <MensajeValidacion>{errors.puesto}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="descPuesto">Descripcion del puesto</FormLabelCV>
        <FormTextAreaCV
          type="text"
          id="descPuesto"
					rows="5"
          name="descPuesto"
          placeholder="Descripcion del puesto:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.descPuesto}
        />
        {errors.descPuesto && (
          <MensajeValidacion>{errors.descPuesto}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="periodoExpLabo">Periodo experiencia laboral</FormLabelCV>
        <FormInputCV
          type="text"
          id="periodoExpLabo"
          name="periodoExpLabo"
          placeholder="Periodo experiencia laboral:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.periodoExpLabo}
        />
        {errors.periodoExpLabo && (
          <MensajeValidacion>{errors.periodoExpLabo}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="aniostrab">Anios de trabajo</FormLabelCV>
        <FormInputCV
          type="number"
          id="aniostrab"
          name="aniostrab"
          placeholder="Anios de trabajo:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.aniostrab}
        />
        {errors.aniostrab && (
          <MensajeValidacion>{errors.aniostrab}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="nombreOrga">Nombre organizacion</FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreOrga"
          name="nombreOrga"
          placeholder="Anios de trabajo:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreOrga}
        />
        {errors.nombreOrga && (
          <MensajeValidacion>{errors.nombreOrga}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="contactoOrga">Contacto organizacion</FormLabelCV>
        <FormInputCV
          type="tel"
          id="contactoOrga"
          name="contactoOrga"
          placeholder="Anios de trabajo:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.contactoOrga}
        />
        {errors.contactoOrga && (
          <MensajeValidacion>{errors.contactoOrga}</MensajeValidacion>
        )}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

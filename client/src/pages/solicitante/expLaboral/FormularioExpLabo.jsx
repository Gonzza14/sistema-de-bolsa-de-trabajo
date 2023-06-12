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
  let regexInteger = /^[1-100]\d*$/;
  let regexPhone =
    /^\+(?:\d{1,3}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,14}(?:\s*(?:ext\.?|[#x-])\s*\d{1,5})?$/;
	let regexArea = /^.{1,255}$/;


	if (!form.puesto.trim()) {
		errors.puesto = `El nombre del puesto es requerido`;
	} else if (!regexVarchar.test(form.puesto.trim())) {
		errors.puesto =
			"Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
	} else if (form.puesto.trim().length > 50) {
		errors.puesto = "El nombre del puesto no debe tener más de 50 caracteres";
	} else {
		delete errors.puesto;
	}
	
	if (!form.descPuesto.trim()) {
		errors.descPuesto = `La descripcion del puesto es requerido`;
	} else if (!regexArea.test(form.descPuesto.trim())) {
		errors.descPuesto =
			"Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
	} else if (form.descPuesto.trim().length > 255) {
		errors.descPuesto = "La descripción del puesto no debe tener más de 255 caracteres";
	} else {
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
	} else {
		delete errors.aniostrab;
	}
	
	if (!form.nombreOrga.trim()) {
		errors.nombreOrga = `El nombre de la organizacion es requerido`;
	} else if (!regexVarchar.test(form.nombreOrga.trim())) {
		errors.nombreOrga =
			"Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
	} else if (form.nombreOrga.trim().length > 100) {
		errors.nombreOrga = "El nombre de la organización no debe tener más de 100 caracteres";
	} else {
		delete errors.nombreOrga;
	}
	
	if (!form.contactoOrga.trim()) {
		errors.contactoOrga = `El contacto de la organizacion es requerido`;
	} else if (!regexPhone.test(form.contactoOrga.trim())) {
		errors.contactoOrga = "Solo acepta el formato +## #### ####";
	} else if (form.contactoOrga.trim().length > 100) {
		errors.contactoOrga = "El contacto de la organización no debe tener más de 100 caracteres";
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
        <FormLabelCV htmlFor="puesto">Nombre del Puesto</FormLabelCV>
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

        <FormLabelCV htmlFor="descPuesto">Descripción del Puesto</FormLabelCV>
        <FormTextAreaCV
          type="text"
          id="descPuesto"
					rows="3"
          name="descPuesto"
          placeholder="Descripcion del puesto:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.descPuesto}
        />
        {errors.descPuesto && (
          <MensajeValidacion>{errors.descPuesto}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="periodoExpLabo">Periodo Experiencia Laboral</FormLabelCV>
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

        <FormLabelCV htmlFor="aniostrab">Años de Trabajo</FormLabelCV>
        <FormInputCV
          type="number"
          id="aniostrab"
          name="aniostrab"
          placeholder="Años de trabajo:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.aniostrab}
        />
        {errors.aniostrab && (
          <MensajeValidacion>{errors.aniostrab}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="nombreOrga">Nombre Organización</FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreOrga"
          name="nombreOrga"
          placeholder="Nombre organización:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreOrga}
        />
        {errors.nombreOrga && (
          <MensajeValidacion>{errors.nombreOrga}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="contactoOrga">Contacto Organización</FormLabelCV>
        <FormInputCV
          type="tel"
          id="contactoOrga"
          name="contactoOrga"
          placeholder="Contacto organización"
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

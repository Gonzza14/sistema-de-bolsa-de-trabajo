import {
  FormContainerCV,
  FormularioCV,
  FormLabelCV,
  FormInputCV,
  FormInputBottonCV,
  FormSelect,
} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
const initialForm = {
  nombreIdioma: "",
  puntConver: "",
  puntConver: "",
  puntConver: "",
  puntEscucha: "",
  id: null,
};

const NivelSelect = ({ id, name, onChange, onBlur, value }) => (
  <FormSelect id={id} name={name} onChange={onChange} onBlur={onBlur} value={value}>
    <option value="">Selecciona un nivel</option>
    <option value="A1">A1 (Starter)</option>
    <option value="A2">A2 (Elementary)</option>
    <option value="B1">B1 (Intermediate)</option>
    <option value="B2">B2 (Upper Intermediate)</option>
    <option value="C1">C1 (Expert)</option>
    <option value="C2">C2 (Mastery)</option>
  </FormSelect>
);

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.nombreIdioma.trim()) {
    errors.nombreIdioma = `El nombre del idioma es requerido`;
  } else if (!regexVarchar.test(form.nombreIdioma.trim())) {
    errors.nombreIdioma =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.nombreIdioma;
  }

  if (!form.puntConver.trim()) {
    errors.puntConver = `Puntuacion escritura es requerido`;
  } else if (!regexVarchar.test(form.puntConver.trim())) {
    errors.puntConver =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.puntConver;
  }

  if (!form.puntConver.trim()) {
    errors.puntConver = `Puntuacion lectura es requerido`;
  } else if (!regexVarchar.test(form.puntConver.trim())) {
    errors.puntConver = "No debe de contener mas de 255 caracteres";
  } else {
    delete errors.puntConver;
  }

  return errors;
};



export const FormularioIdioma = ({
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
			<FormLabelCV htmlFor="nombreIdioma">Idioma</FormLabelCV>
			<FormSelect
				id="nombreIdioma"
				name="nombreIdioma"
				onChange={handleChange}
				onBlur={handleBlur}
				value={form.nombreIdioma}
			>
				<option value="">Selecciona un idioma</option>
				<option value="Inglés">Inglés</option>
				<option value="Español">Español</option>
				<option value="Francés">Francés</option>
				<option value="Alemán">Alemán</option>
				<option value="Italiano">Italiano</option>
				<option value="Portugués">Portugués</option>
			</FormSelect>
	
			{errors.nombreIdioma && (
				<MensajeValidacion>{errors.nombreIdioma}</MensajeValidacion>
			)}
	
			<FormLabelCV htmlFor="puntEscritura">Nivel de Escritura</FormLabelCV>
			<NivelSelect
				id="puntEscritura"
				name="puntEscritura"
				onChange={handleChange}
				onBlur={handleBlur}
				value={form.puntEscritura}
			/>
	
			{errors.puntEscritura && (
				<MensajeValidacion>{errors.puntEscritura}</MensajeValidacion>
			)}
	
			<FormLabelCV htmlFor="puntLectura">Nivel de Lectura</FormLabelCV>
			<NivelSelect
				id="puntLectura"
				name="puntLectura"
				onChange={handleChange}
				onBlur={handleBlur}
				value={form.puntLectura}
			/>
	
			{errors.puntLectura && (
				<MensajeValidacion>{errors.puntLectura}</MensajeValidacion>
			)}
	
			<FormLabelCV htmlFor="puntConver">Nivel de Conversacion</FormLabelCV>
			<NivelSelect
				id="puntConver"
				name="puntConver"
				onChange={handleChange}
				onBlur={handleBlur}
				value={form.puntConver}
			/>
	
			{errors.puntConver && (
				<MensajeValidacion>{errors.puntConver}</MensajeValidacion>
			)}
	
			<FormLabelCV htmlFor="puntEscucha">Nivel de Escucha</FormLabelCV>
			<NivelSelect
				id="puntEscucha"
				name="puntEscucha"
				onChange={handleChange}
				onBlur={handleBlur}
				value={form.puntEscucha}
			/>
	
			{errors.puntEscucha && (
				<MensajeValidacion>{errors.puntEscucha}</MensajeValidacion>
			)}
	
			<FormInputBottonCV type="submit" value="Guardar" />
		</FormularioCV>
	</FormContainerCV>
  );
};

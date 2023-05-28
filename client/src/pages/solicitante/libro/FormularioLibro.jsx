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
  nombreLibro: "",
  lugarLibro: "",
  fechaPub: "",
  edicionLibro: "",
  isbn: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.nombreLibro.trim()) {
    errors.nombreLibro = `El nombre del libro es requerido`;
  } else if (!regexVarchar.test(form.nombreLibro.trim())) {
    errors.nombreLibro =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.nombreLibro;
  }

  if (!form.lugarLibro.trim()) {
    errors.lugarLibro = `El lugar del libro es requerido`;
  } else if (!regexVarchar.test(form.lugarLibro.trim())) {
    errors.lugarLibro =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.lugarLibro;
  }
  if (!form.fechaPub.trim()) {
    errors.fechaPub = `La fecha de publicacion es requerida`;
  } else if (!regexVarchar.test(form.fechaPub.trim())) {
    errors.fechaPub =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.fechaPub;
  }

  if (!form.edicionLibro.trim()) {
    errors.edicionLibro = `El edicion del libro es requerida`;
  } else if (!regexVarchar.test(form.edicionLibro.trim())) {
    errors.edicionLibro =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.edicionLibro;
  }

  if (!form.isbn.trim()) {
    errors.isbn = `El ISBN es requerida`;
  } else if (!regexVarchar.test(form.isbn.trim())) {
    errors.isbn =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.isbn;
  }

  return errors;
};

export const FormularioLibro = ({
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
        <FormLabelCV htmlFor="nombreLibro">Nombre del libro</FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreLibro"
          name="nombreLibro"
          placeholder="Nombre del libro"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreLibro}
        />
        {errors.nombreLibro && (
          <MensajeValidacion>{errors.nombreLibro}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="lugarLibro">Lugar del libro</FormLabelCV>
        <FormInputCV
          type="text"
          id="lugarLibro"
          name="lugarLibro"
          placeholder="Lugar del libro"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.lugarLibro}
        />
        {errors.lugarLibro && (
          <MensajeValidacion>{errors.lugarLibro}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="fechaPub">Fecha publicacion</FormLabelCV>
        <FormInputCV
          type="date"
          id="fechaPub"
          name="fechaPub"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fechaPub}
        />
        {errors.fechaPub && (
          <MensajeValidacion>{errors.fechaPub}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="edicionLibro">Edicion libro</FormLabelCV>
        <FormInputCV
          type="text"
          id="edicionLibro"
          name="edicionLibro"
          placeholder="Edicion libro"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.edicionLibro}
        ></FormInputCV>
        {errors.edicionLibro && (
          <MensajeValidacion>{errors.edicionLibro}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="isbn">ISBN</FormLabelCV>

        <FormInputCV
          type="text"
          id="isbn"
          name="isbn"
          placeholder="ISBN"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.isbn}
        ></FormInputCV>
        {errors.isbn && <MensajeValidacion>{errors.isbn}</MensajeValidacion>}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

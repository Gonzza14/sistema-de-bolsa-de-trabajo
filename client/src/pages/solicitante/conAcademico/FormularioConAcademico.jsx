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
  nomInstitucion: "",
  nombreCurso: "",
  periodoConAcad: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.nomInstitucion.trim()) {
    errors.nomInstitucion = `El nombre de la institucion es requerido`;
  } else if (!regexVarchar.test(form.nomInstitucion.trim())) {
    errors.nomInstitucion =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else if (form.nomInstitucion.trim().length > 100) {
    errors.nomInstitucion = "El nombre de la institución no debe tener más de 100 caracteres";
  } else {
    delete errors.nomInstitucion;
  }

  if (!form.nombreCurso.trim()) {
    errors.nombreCurso = `El nombre del curso es requerido`;
  } else if (!regexVarchar.test(form.nombreCurso.trim())) {
    errors.nombreCurso =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else if (form.nombreCurso.trim().length > 100) {
    errors.nombreCurso = "El nombre del curso no debe tener más de 100 caracteres";
  } else {
    delete errors.nombreCurso;
  }

  if (!form.periodoConAcad.trim()) {
    errors.periodoConAcad = `El periodo academico es requerido`;
  } else if (!regexVarchar.test(form.periodoConAcad.trim())) {
    errors.periodoConAcad = "Periodo";
  } else if (form.periodoConAcad.trim().length > 80) {
    errors.periodoConAcad = "El periodo académico no debe tener más de 80 caracteres";
  } else {
    delete errors.periodoConAcad;
  }

  return errors;
};

export const FormularioConAcademico = ({
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
        <FormLabelCV htmlFor="nomInstitucion">Nombre Institucion</FormLabelCV>
        <FormInputCV
          type="text"
          id="nomInstitucion"
          name="nomInstitucion"
          placeholder="Nombre de la institucion:"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nomInstitucion}
        />
        {errors.nomInstitucion && (
          <MensajeValidacion>{errors.nomInstitucion}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="nombreCurso">Nombre del Curso</FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreCurso"
          name="nombreCurso"
          placeholder="Nombre del curso"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreCurso}
        />
        {errors.nombreCurso && (
          <MensajeValidacion>{errors.nombreCurso}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="periodoConAcad">Periodo</FormLabelCV>
        <FormInputCV
          type="date"
          id="periodoConAcad"
          name="periodoConAcad"
          placeholder="Periodo academico"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.periodoConAcad}
        ></FormInputCV>
        {errors.periodoConAcad && (
          <MensajeValidacion>{errors.periodoConAcad}</MensajeValidacion>
        )}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};
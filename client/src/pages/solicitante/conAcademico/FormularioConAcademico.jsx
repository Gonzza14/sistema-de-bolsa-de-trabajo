import {
  FormContainerCV,
  FormularioCV,
  FormLabelCV,
  FormInputCV,
  FormInputBottonCV,
} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
import { useEffect } from "react";

const initialForm = {
  nomInstitucion: "",
  nombreCurso: "",
  periodoConAcad: "",
  startDate: "",
  endDate: "",
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
    errors.nomInstitucion =
      "El nombre de la institución no debe tener más de 100 caracteres";
  } else {
    delete errors.nomInstitucion;
  }

  if (!form.nombreCurso.trim()) {
    errors.nombreCurso = `El nombre del curso es requerido`;
  } else if (!regexVarchar.test(form.nombreCurso.trim())) {
    errors.nombreCurso =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else if (form.nombreCurso.trim().length > 100) {
    errors.nombreCurso =
      "El nombre del curso no debe tener más de 100 caracteres";
  } else {
    delete errors.nombreCurso;
  }

	if (form.endDate < form.startDate) {
    errors.endDate = "La fecha de fin no puede ser anterior a la fecha de inicio";
  }

  // if (!form.periodoConAcad.trim()) {
  //   errors.periodoConAcad = `El periodo academico es requerido`;
  // } else if (!regexVarchar.test(form.periodoConAcad.trim())) {
  //   errors.periodoConAcad = "Periodo";
  // } else if (form.periodoConAcad.trim().length > 80) {
  //   errors.periodoConAcad =
  //     "El periodo académico no debe tener más de 80 caracteres";
  // } else {
  //   delete errors.periodoConAcad;
  // }

  return errors;
};

export const FormularioConAcademico = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  let path = "/GestionCurriculum";

  let { form, setForm, errors, handleChange, handleBlur, handleSubmit } =
    useForm(
      initialForm,
      validateForm,
      path,
      createData,
      updateData,
      dataToEdit,
      setDataToEdit
    );

  const handleDate = (event) => {
    const { name, value } = event.target;
    if (name === "startDate" || name === "endDate") {
      // update form state with new start or end date
      form[name] = value;
      // concatenate start and end dates into a single value
      form.periodoConAcad = `${form.startDate}/${form.endDate}`;
      console.log(form); // log new form state
      setForm({ ...form });
    } else {
      // handle other form fields
    }
  };

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
      // split periodoConAcad into start and end dates
      const [startDate, endDate] = dataToEdit.periodoConAcad.split("/");
      // update form state with start and end dates
      setForm((prevState) => ({
        ...prevState,
        startDate,
        endDate,
      }));
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

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
        Inicio
        <FormInputCV
          type="month"
          id="startDate"
          name="startDate"
          placeholder="Fecha de inicio"
          onChange={handleDate}
          onBlur={handleBlur}
          value={form.startDate}
        ></FormInputCV>
        <br />
        Fin
        <FormInputCV
          type="month"
          id="endDate"
          name="endDate"
          placeholder="Fecha de fin"
          onChange={handleDate}
          onBlur={handleBlur}
          value={form.endDate}
        ></FormInputCV>
				{errors.endDate && <MensajeValidacion>{errors.endDate}</MensajeValidacion>}

        {/* {errors.periodoConAcad && (
          <MensajeValidacion>{errors.periodoConAcad}</MensajeValidacion>
        )} */}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

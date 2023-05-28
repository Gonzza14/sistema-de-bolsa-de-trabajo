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
  nomCertificacion: "",
  codCertificacion: "",
  instiCertificacion: "",
  fechaCertificacion: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (!form.nomCertificacion.trim()) {
    errors.nomCertificacion = `El nombre de certificacion es requerido`;
  } else if (!regexVarchar.test(form.nomCertificacion.trim())) {
    errors.nomCertificacion =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  } else {
    delete errors.nomCertificacion;
  }

  if (!form.codCertificacion.trim()) {
    errors.codCertificacion = `El codigo de certificacion es requerido`;
  } else if (!regexVarchar.test(form.codCertificacion.trim())) {
    errors.codCertificacion =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.codCertificacion;
  }

  if (!form.instiCertificacion.trim()) {
    errors.instiCertificacion = `El instituto de certificacon es requerido`;
  } else if (!regexVarchar.test(form.instiCertificacion.trim())) {
    errors.instiCertificacion =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.instiCertificacion;
  }

  if (!form.fechaCertificacion.trim()) {
    errors.fechaCertificacion = `La fecha de certificacion es requerido`;
  } else if (!regexVarchar.test(form.fechaCertificacion.trim())) {
    errors.fechaCertificacion = "Debe de seleccionar una fecha";
  } else {
    delete errors.fechaCertificacion;
  }

  return errors;
};

export const FormularioCertificacion = ({
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
        <FormLabelCV htmlFor="nomCertificacion">
          Nombre Certificacion
        </FormLabelCV>
        <FormInputCV
          type="text"
          id="nomCertificacion"
          name="nomCertificacion"
          placeholder="Nombre de la certificacion"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nomCertificacion}
        />
        {errors.nomCertificacion && (
          <MensajeValidacion>{errors.nomCertificacion}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="codCertificacion">
          Codigo del Certificado
        </FormLabelCV>
        <FormInputCV
          type="text"
          id="codCertificacion"
          name="codCertificacion"
          placeholder="Codigo Certificado"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.codCertificacion}
        />
        {errors.codCertificacion && (
          <MensajeValidacion>{errors.codCertificacion}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="instiCertificacion">
          Instituto Certificacion
        </FormLabelCV>

        <FormInputCV
          type="text"
          id="instiCertificacion"
          name="instiCertificacion"
          placeholder="Instituto Certificacion"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.instiCertificacion}
        />
        {errors.instiCertificacion && (
          <MensajeValidacion>{errors.instiCertificacion}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="fechaCertificacion">Fecha Certificacion</FormLabelCV>
        <FormInputCV
          type="date"
          id="fechaCertificacion"
          name="fechaCertificacion"
          placeholder="Periodo academico"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fechaCertificacion}
        ></FormInputCV>
        {errors.fechaCertificacion && (
          <MensajeValidacion>{errors.fechaCertificacion}</MensajeValidacion>
        )}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

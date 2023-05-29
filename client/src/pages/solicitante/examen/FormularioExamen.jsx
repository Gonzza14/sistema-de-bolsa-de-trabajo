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
import { useCustomFetch } from "../../../hooks/useCustomFetch";
const initialForm = {
  idTipoEx: null,
  nombreExamen: "",
  archivoExamen: "",
  resultadoExamen: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (form.idTipoEx === "0") {
    errors.idTipoEx = "El campo del tipo examen ";
  } else {
    delete errors.idTipoEx;
  }

  if (!form.nombreExamen.trim()) {
    errors.nombreExamen = `Nombre del examen es requerida`;
  } else if (!regexVarchar.test(form.nombreExamen.trim())) {
    errors.nombreExamen =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.nombreExamen;
  }
  if (!form.archivoExamen.trim()) {
    errors.archivoExamen = `Nombre del archivo es requerida`;
  } else if (!regexVarchar.test(form.archivoExamen.trim())) {
    errors.archivoExamen =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.archivoExamen;
  }
  if (!form.resultadoExamen.trim()) {
    errors.resultadoExamen = `Nombre del resultado es requerida`;
  } else if (!regexVarchar.test(form.resultadoExamen.trim())) {
    errors.resultadoExamen =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.resultadoExamen;
  }

  return errors;
};

export const FormularioExamen = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
	subirArchivo, updateSubirArchivo
}) => {
  let url = "http://localhost:3000/api/tipoExamenes";

  let { dataBase } = useCustomFetch(url);

  let path = "/GestionCurriculum";

  let { form, errors, handleChange, handleBlur, handleSubmit, subirArchivoSubmit } = useForm(
    initialForm,
    validateForm,
    path,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit, 
		subirArchivo,
		updateSubirArchivo
  );
  const handleSelect = (e) => {
    var index = e.nativeEvent.target.selectedIndex;
    form.TipoExamen.nombreTipoExamen = e.nativeEvent.target[index].text;
    form.TipoExamen.id = e.nativeEvent.target.value;
  };

  return (
    <FormContainerCV>
      <FormularioCV onSubmit={subirArchivoSubmit}>
        {dataToEdit && (
          <FormSelect
            id="idTipoEx"
            name="idTipoEx"
            placeholder="Seleccione el tipo de examen"
            onChange={(handleChange, handleSelect)}
            onBlur={handleBlur}
            defaultValue={form.idTipoEx}
          >
            <option value={form.idTipoEx} disabled>
              {form.idTipoEx}
            </option>
            {dataBase &&
              dataBase.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.nombreTipoExamen}
                </option>
              ))}
          </FormSelect>
        )}
        {!dataToEdit && (
          <FormSelect
            id="idTipoEx"
            name="idTipoEx"
            placeholder="Seleccione el tipo de examen"
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={"0"}
          >
            <option value="0" disabled>
              Seleccione el tipo de examen
            </option>
            {dataBase &&
              dataBase.map((ex) => (
                <option key={ex.id} value={ex.id}>
                  {ex.nombreTipoExamen}
                </option>
              ))}
          </FormSelect>
        )}
        {errors.idTipoEx && (
          <MensajeValidacion>{errors.idTipoEx}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="nombreExamen">Nombre Examen</FormLabelCV>
        <FormInputCV
          type="text"
          id="nombreExamen"
          name="nombreExamen"
          placeholder="Nombre examen"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreExamen}
        />
        {errors.nombreExamen && (
          <MensajeValidacion>{errors.nombreExamen}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="archivoExamen">Archivo Examen</FormLabelCV>
				<FormLabelCV >{form.archivoExamen.replace("C:\\fakepath\\", "")}</FormLabelCV>
        <FormInputCV
          type="file"
          id="archivoExamen"
          name="archivoExamen"
          placeholder="Archivo examen"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.archivoExamen && (
          <MensajeValidacion>{errors.archivoExamen}</MensajeValidacion>
        )}

        <FormLabelCV htmlFor="resultadoExamen">resultado Examen</FormLabelCV>
        <FormInputCV
          type="text"
          id="resultadoExamen"
          name="resultadoExamen"
          placeholder="Resultado examen"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.resultadoExamen}
        />
        {errors.resultadoExamen && (
          <MensajeValidacion>{errors.resultadoExamen}</MensajeValidacion>
        )}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

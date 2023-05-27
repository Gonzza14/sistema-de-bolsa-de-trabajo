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
  idTipoHab: null,
  habTec: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexVarchar = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if (form.idTipoHab === "0") {
    errors.idTipoHab = "El campo rol es requerido";
  } else {
    delete errors.idTipoHab;
  }

  if (!form.habTec.trim()) {
    errors.habTec = `La habilidad tecnica es requerida`;
  } else if (!regexVarchar.test(form.habTec.trim())) {
    errors.habTec =
      "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";

    delete errors.habTec;
  }

  return errors;
};

export const FormularioHabilidadTec = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  let url = "http://localhost:3000/api/tipoHabilidades";

  let { dataBase } = useCustomFetch(url);

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
  const handleSelect = (e) => {
    var index = e.nativeEvent.target.selectedIndex;
    form.TipoHabilidad.nombreTipoHabilidad = e.nativeEvent.target[index].text;
    form.TipoHabilidad.id = e.nativeEvent.target.value;
  };
console.log("first")
	console.log(dataToEdit)

  return (
    <FormContainerCV>
      <FormularioCV onSubmit={handleSubmit}>
        {dataToEdit && (
          <FormSelect
            id="idTipoHab"
            name="idTipoHab"
            placeholder="Seleccione el tipo de habilidad"
            onChange={(handleChange, handleSelect)}
            onBlur={handleBlur}
            defaultValue={form.idTipoHab}
          >
            <option value={form.idTipoHab} disabled>
              {form.idTipoHab}
            </option>
            {dataBase &&
              dataBase.map((tipoHab) => (
                <option key={tipoHab.id} value={tipoHab.id}>
                  {tipoHab.nombreTipoHabilidad}
                </option>
              ))}
          </FormSelect>
        )}
        {!dataToEdit && (
          <FormSelect
            id="idTipoHab"
            name="idTipoHab"
            placeholder="Seleccione el tipo de habilidad"
            onChange={(handleChange)}
            onBlur={handleBlur}
            defaultValue={"0"}
          >
            <option value="0" disabled>
              Seleccione el tipoHab
            </option>
            {dataBase &&
              dataBase.map((tipoHab) => (
                <option key={tipoHab.id} value={tipoHab.id}>
                  {tipoHab.nombreTipoHabilidad}
                </option>
              ))}
          </FormSelect>
        )}
        {errors.idTipoHab && (
          <MensajeValidacion>{errors.idTipoHab}</MensajeValidacion>
        )}
        <FormLabelCV htmlFor="habTec">Nombre Curso</FormLabelCV>
        <FormInputCV
          type="text"
          id="habTec"
          name="habTec"
          placeholder="Habilidad tecnica"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.habTec}
        />
        {errors.habTec && (
          <MensajeValidacion>{errors.habTec}</MensajeValidacion>
        )}
        <FormInputBottonCV type="submit" value="Guardar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </FormularioCV>
    </FormContainerCV>
  );
};

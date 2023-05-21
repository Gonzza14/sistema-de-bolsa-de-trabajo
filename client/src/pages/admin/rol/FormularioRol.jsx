import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton, FormTextArea } from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
const initialForm = {
  nombreRol: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;

  if(!form.nombreRol.trim()){
    errors.nombreRol = `El nombre del es requerido`
  }else if (!regexName.test(form.nombreRol.trim())) {
    errors.nombreRol = "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  }else{
    delete errors.nombreRol;
  }

  return errors;
};

export const FormularioEmpresa = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {

  let path = "/GestionRol";

  let {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = useForm(
    initialForm,
    validateForm,
    path,
    createData,
    updateData,
    dataToEdit,
    setDataToEdit
  )


  return (
    <FormContainer>
      <FormTitle>{dataToEdit ? "Editar rol" : "Agregar rol"}</FormTitle>
      <Formulario onSubmit={handleSubmit}>
        <FormLabel htmlFor="nombreRol">Nombre</FormLabel>
        <FormInput
          type="text"
          id="nombreRol"
          name="nombreRol"
          placeholder="Nombre del rol"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreRol}
        />
        {errors.nombreRol && <MensajeValidacion>{errors.nombreRol}</MensajeValidacion>}
        <FormInputBotton type="submit" value="Enviar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </Formulario>
    </FormContainer>
  );
};

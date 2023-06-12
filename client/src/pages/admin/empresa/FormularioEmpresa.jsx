import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton, FormTextArea } from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
const initialForm = {
  nombreEmpresa: "",
  telefonoEmpresa: "",
  direcEmpresa: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\s.,;:¡!¿?()-]+$/;
  let regexPhone = /^\+(?:\d{1,3}[\s-]?)?\(?\d{1,4}\)?[\s-]?\d{1,14}(?:\s*(?:ext\.?|[#x-])\s*\d{1,5})?$/;
  let regexAddress = /^.{1,255}$/;

  if(!form.nombreEmpresa.trim()){
    errors.nombreEmpresa = `El nombre de la empresa es requerido`
  }else if (!regexName.test(form.nombreEmpresa.trim())) {
    errors.nombreEmpresa = "Este campo solo acepta letras, numeros, espacios, y simbolos comunes de puntuacion";
  }else{
    delete errors.nombreEmpresa;
  }

  if(!form.telefonoEmpresa.trim()){
    errors.telefonoEmpresa = `El telefono de la empresa es requerido`
  }else if (!regexPhone.test(form.telefonoEmpresa.trim())) {
    errors.telefonoEmpresa = "Solo acepta el formato +## #### ####";
  }else{
    delete errors.telefonoEmpresa;
  }

  if(!form.direcEmpresa.trim()){
    errors.direcEmpresa = `La direccion de la empresa es requerida`
  }else if (!regexAddress.test(form.direcEmpresa.trim())) {
    errors.direcEmpresa = "No debe de contener mas de 255 caracteres";
  }else{
    delete errors.direcEmpresa;
  }

  return errors;
};

export const FormularioEmpresa = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {

  let path = "/GestionEmpresa";

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
      <FormTitle>{dataToEdit ? "Editar empresa" : "Agregar empresa"}</FormTitle>
      <Formulario onSubmit={handleSubmit}>
        <FormLabel htmlFor="nombreEmpresa">Nombre</FormLabel>
        <FormInput
          type="text"
          id="nombreEmpresa"
          name="nombreEmpresa"
          placeholder="Nombre de la empresa"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.nombreEmpresa}
        />
        {errors.nombreEmpresa && <MensajeValidacion>{errors.nombreEmpresa}</MensajeValidacion>}
        <FormLabel htmlFor="telefonoEmpresa">Telefono</FormLabel>
        <FormInput
          type="tel"
          id="telefonoEmpresa"
          name="telefonoEmpresa"
          placeholder="+## (###) ####-#### ext. ####"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.telefonoEmpresa}
        />
        {errors.telefonoEmpresa && <MensajeValidacion>{errors.telefonoEmpresa}</MensajeValidacion>}
        <FormLabel htmlFor="direcEmpresa">Direccion</FormLabel>
        <FormTextArea
          type="text"
          id="direcEmpresa"
          name="direcEmpresa"
          placeholder="Direccion fisica de la empresa"
          rows="5"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.direcEmpresa}>
        </FormTextArea>
        {errors.direcEmpresa && <MensajeValidacion>{errors.direcEmpresa}</MensajeValidacion>}
        <FormInputBotton type="submit" value="Enviar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </Formulario>
    </FormContainer>
  );
};

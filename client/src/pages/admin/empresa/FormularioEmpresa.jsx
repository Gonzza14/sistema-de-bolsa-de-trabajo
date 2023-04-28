import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
const initialForm = {
  nombreEmpresa: "",
  telefonoEmpresa: "",
  id: null,
};

const validateForm = (form) => {
    let errors = {};

    if (!form.nombreEmpresa.trim()) {
        errors.nombreEmpresa = "El nombre de la empresa es requerido";
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
          placeholder="Telefono de la empresa"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.telefonoEmpresa}
        />
         {errors.telefonoEmpresa && <MensajeValidacion>{errors.telefonoEmpresa}</MensajeValidacion>}
        <FormInputBotton type="submit" value="Enviar" />
        {/*<input type="reset" value="Limpiar" onClick={handleReset} />*/}
      </Formulario>
    </FormContainer>
  );
};

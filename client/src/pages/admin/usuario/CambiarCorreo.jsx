import { FormTitle, Formulario, FormLabel, FormInput, FormInputBotton } from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";

const initialForm = {
    correoUsuario: "",
    id: null,
};

const validateForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    if (!form.correoUsuario.trim()) {
        errors.correoUsuario = "El campo correo es requerido";
    } else if (!regexEmail.test(form.correoUsuario.trim())) {
        errors.correoUsuario = "El campo correo no es valido";
    }else{
        delete errors.correoUsuario;
    }
    
    return errors;
};

export const CambiarCorreo = ({
    updateData,
    dataToEdit,
    setDataToEdit
}) => {

    if (dataToEdit){
        delete dataToEdit.contrasena;
    }


    let path = "/GestionUsuario";

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
      null, 
      updateData, 
      dataToEdit, 
      setDataToEdit
      )

    return (
        <>
            <FormTitle>Cambiar correo electronico</FormTitle>
            <Formulario onSubmit={handleSubmit}>
            <FormLabel htmlFor="correoUsuario">Correo</FormLabel>
                <FormInput
                    type="email"
                    id="correoUsuario"
                    name="correoUsuario"
                    placeholder="Correo electrónico"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.correoUsuario}
                />
                {errors.correoUsuario && <MensajeValidacion>{errors.correoUsuario}</MensajeValidacion>}
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </>
    )
}
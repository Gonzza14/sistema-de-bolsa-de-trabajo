import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton } from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";

const initialForm = {
    correoUsuario: "",
    contrasena: "",
    confirmarContrasena: "",
    id: null,
};

const validateForm = (form) => {
    let errors = {};

    if (!form.correoUsuario.trim()) {
        errors.correoUsuario = "El campo correo es requerido";
    }
    if (!form.contrasena.trim()) {
        errors.contrasena = "La contraseña es requerida";
    }
    if (form.contrasena !== form.confirmarContrasena) {
        errors.confirmarContrasena = "Las contraseñas no coinciden";
    }

    return errors;
};

export const FormularioUsuario = ({
    createData,
    setDataToEdit,
}) => {

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
      createData, 
      null, 
      null, 
      setDataToEdit
      )
  

    return (
        <FormContainer>
            <FormTitle>Agregar usuario</FormTitle>
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
                <FormLabel htmlFor="contrasena">Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.contrasena}
                />
                {errors.contrasena && <MensajeValidacion>{errors.contrasena}</MensajeValidacion>}
                <FormLabel htmlFor="confirmarContrasena">Confirmar contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="confirmarContrasena"
                    name="confirmarContrasena"
                    placeholder="Confirmar contraseña"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.confirmarContrasena}
                />
                {errors.confirmarContrasena && <MensajeValidacion>{errors.confirmarContrasena}</MensajeValidacion>}
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </FormContainer>
    );
}
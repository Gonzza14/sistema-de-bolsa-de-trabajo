import { FormTitle, Formulario, FormLabel, FormInput, FormInputBotton } from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";

const initialForm = {
    contrasena: "",
    confirmarContrasena: "",
    id: null,
};

const validateForm = (form) => {
    let errors = {};

    if (!form.contrasena.trim()) {
        errors.contrasena = "La contraseña es requerida";
    }
    if (form.contrasena !== form.confirmarContrasena) {
        errors.confirmarContrasena = "Las contraseñas no coinciden";
    }

    return errors;
};


export const CambiarContra = ({
    updateData,
    dataToEdit,
    setDataToEdit
}) => {

    if (dataToEdit){
        delete dataToEdit.contrasena;
        delete dataToEdit.confirmarContrasena;
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
            <FormTitle>Cambiar contraseña</FormTitle>
            <Formulario onSubmit={handleSubmit}>
                <FormLabel htmlFor="contrasena">Contraseña</FormLabel>
                <FormInput
                    type="password"
                    id="contrasena"
                    name="contrasena"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={form.contrasena || ""}
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
                    value={form.confirmarContrasena || ""}
                />
                {errors.confirmarContrasena && <MensajeValidacion>{errors.confirmarContrasena}</MensajeValidacion>}
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>
        </>
    );
}
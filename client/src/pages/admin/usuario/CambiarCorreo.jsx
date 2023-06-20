import { FormTitle, Formulario, FormLabel, FormInput, FormInputBotton, FormSelect } from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
import { useCustomFetch } from "../../../hooks/useCustomFetch"
import { useRef } from "react";

const initialForm = {
    Rol: {},
    idRol: "",
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
    } else {
        delete errors.correoUsuario;
    }

    if (form.idRol === "0") {
        errors.idRol = "El campo rol es requerido";
    } else {
        delete errors.idRol;
    }

    return errors;
};

export const CambiarCorreo = ({
    updateData,
    dataToEdit,
    setDataToEdit
}) => {

    const url = 
    process.env.NODE_ENV === "production"
    ? "/api/roles"
    : "http://localhost:3000/api/roles"

    let { dataBase } = useCustomFetch(url);


    if (dataToEdit) {
        delete dataToEdit.contrasena;
    }

    const comboBox = useRef(null);


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


    const handleSelect = (e) => {
        var index = e.nativeEvent.target.selectedIndex;
        form.Rol.nombreRol = e.nativeEvent.target[index].text;
        form.Rol.id = e.nativeEvent.target.value;
    }



    return (
        <>
            <FormTitle>Cambiar correo electronico y/o rol de usuario</FormTitle>
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
                <FormLabel htmlFor="idRol">Rol</FormLabel>
                <FormSelect
                    id="idRol"
                    name="idRol"
                    placeholder="Seleccione el rol"
                    onChange={handleSelect}
                    onBlur={handleBlur}
                    defaultValue={form.idRol}
                >
                    <option value={form.idRol} disabled>{form.Rol.nombreRol}</option>
                    {dataBase &&
                        dataBase.map((rol) => <option key={rol.id} value={rol.id}>{rol.nombreRol}</option>)

                    }
                </FormSelect>
                {errors.idRol && <MensajeValidacion>{errors.idRol}</MensajeValidacion>}
                <FormInputBotton type="submit" value="Enviar" />
            </Formulario>

        </>
    )
}
import {
  FormContainer,
  FormTitle,
  Formulario,
  FormLabel,
  FormInput,
  FormInputBotton,
  FormSelect,
} from "../../../styles/elements/formularios";
import { MensajeValidacion } from "../../../styles/elements/mensajes";
import { useForm } from "../../../hooks/useForm";
import { useCustomFetch } from "../../../hooks/useCustomFetch";

const initialForm = {
  idRol: "",
  correoUsuario: "",
  contrasena: "",
  confirmarContrasena: "",
  id: null,
};

const validateForm = (form) => {
  let errors = {};
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

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

  if (!form.contrasena.trim()) {
    errors.contrasena = "La contraseña es requerida";
  } else if (!regexPassword.test(form.contrasena.trim())) {
    errors.contrasena =
      "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero";
  }

  if (form.contrasena !== form.confirmarContrasena) {
    errors.confirmarContrasena = "Las contraseñas no coinciden";
  }

  return errors;
};

export const FormularioUsuario = ({ createData, setDataToEdit }) => {
  const url = 
    process.env.NODE_ENV === "production"
    ? "/api/roles"
    : "http://localhost:3000/api/roles"
  
  let { dataBase } = useCustomFetch(url);

  let path = "/GestionUsuario";

  let { form, errors, handleChange, handleBlur, handleSubmit } = useForm(
    initialForm,
    validateForm,
    path,
    createData,
    null,
    null,
    setDataToEdit
  );

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
        {errors.correoUsuario && (
          <MensajeValidacion>{errors.correoUsuario}</MensajeValidacion>
        )}
        <FormLabel htmlFor="idRol">Rol</FormLabel>
        <FormSelect
          id="idRol"
          name="idRol"
          placeholder="Seleccione el rol"
          onChange={handleChange}
          onBlur={handleBlur}
          defaultValue={"0"}
        >
          <option value="0" disabled>
            Seleccione el rol
          </option>
          {dataBase &&
            dataBase.map((rol) => (
              <option key={rol.id} value={rol.id}>
                {rol.nombreRol}
              </option>
            ))}
        </FormSelect>
        {errors.idRol && <MensajeValidacion>{errors.idRol}</MensajeValidacion>}
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
        {errors.contrasena && (
          <MensajeValidacion>{errors.contrasena}</MensajeValidacion>
        )}
        <FormLabel htmlFor="confirmarContrasena">
          Confirmar contraseña
        </FormLabel>
        <FormInput
          type="password"
          id="confirmarContrasena"
          name="confirmarContrasena"
          placeholder="Confirmar contraseña"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.confirmarContrasena}
        />
        {errors.confirmarContrasena && (
          <MensajeValidacion>{errors.confirmarContrasena}</MensajeValidacion>
        )}
        <FormInputBotton type="submit" value="Enviar" />
      </Formulario>
    </FormContainer>
  );
};

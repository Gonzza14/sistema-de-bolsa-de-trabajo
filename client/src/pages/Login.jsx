import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } 
from "../styles/base";
import "../styles/pages/login.css";
import { useCustomFetch } from "../hooks/useCustomFetch";
import { useVerificarPassword } from "../hooks/useVerificarPassword";
import { useForm } from "../hooks/useForm";
import { useFormReg } from "../hooks/useFormReg";
import { MensajeValidacion } from "../styles/elements/mensajes";
import { useState, useEffect } from "react";
import { FormContainer, FormTitle, Formulario, FormLabel, FormInput, FormInputBotton, FormTextArea } from "../styles/elements/formularios";
import process from "kute.js/src/process/process";


const initialForm = {
    id:null,
    email: "",
    password: ""
}

const initialFormRegistrar = {
    id:null,
    correoUsuario: "",
    contrasena: "",
    confirmarContrasena: "",
    idRol: ""
}

const validateForm = (form => {
    let errors = {}
    let regexEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if(!form.email.trim()){
        errors.email = `El email del usuario es requerido`
    // }else if(!regexEmail.text(form.email.trim())){
    //     errors.email = `El correo no es valido`
    }else{
        delete errors.email;
    }

    if(!form.password.trim()){
        errors.password = `Password incorrecto`
    }else{
        delete errors.password;
    }

    return errors
})

const validateFormRegistrar = (formReg) => {
    let errorsReg = {}

    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (!formReg.correoUsuario.trim()) {
        errorsReg.correoUsuario = "El campo correo es requerido";
    } else if (!regexEmail.test(formReg.correoUsuario.trim())) {
        errorsReg.correoUsuario = "El campo correo no es valido";
    }else{
        delete errorsReg.correoUsuario;
    }

    if (!formReg.idRol.trim() || formReg.idRol === "0") {
        errorsReg.idRol = "El campo rol es requerido";
    }else{
        delete errorsReg.idRol;
    }


    if (!formReg.contrasena.trim()) {
        errorsReg.contrasena = "La contraseña es requerida";
    }else if (!regexPassword.test(formReg.contrasena.trim())) {
        errorsReg.contrasena = "La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero";
    }

    if (formReg.contrasena !== formReg.confirmarContrasena) {
        errorsReg.confirmarContrasena = "Las contraseñas no coinciden";
    }

    return errorsReg
};

export const Login = ({ setAuth, setDataLleno, setRol }) => {  
    const urlRoles = 
        process.env.NODE_ENV === "production"
        ? "/api/roles/sad"
        : "http://localhost:3000/api/roles/sad";

    let { dataBase } = useCustomFetch(urlRoles);

		const url = 
        process.env.NODE_ENV === "production"
        ? "/api/usuarios/verificarcuenta"
        : "http://localhost:3000/api/usuarios/verificarcuenta";
    let { verificarData } = useVerificarPassword(url, setAuth, setDataLleno, setRol);
    const { pathname } = useLocation()


    let pathLogin = "/";
    let pathCrearCuenta = "/Usuario"

    const urlRegistrar = 
        process.env.NODE_ENV === "production"
        ? "/api/usuarios"
        : "http://localhost:3000/api/usuarios";

    let { setDataToEdit, createData } = useCustomFetch(urlRegistrar);

    let {
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(
        initialForm,
        validateForm,
        pathLogin,
    )

    let {
        formReg,
        errorsReg,
        handleChangeReg,
        handleBlurReg,
        handleSubmitReg
    } = useFormReg(
        initialFormRegistrar,
        validateFormRegistrar,
        pathCrearCuenta,
        createData,
        null,
        null,
        setDataToEdit
    )


    const handleLogin = ( e => {
        e.preventDefault();
        handleChange(e)
        verificarData(form)
    })

    return (
        <BaseContainer>
            <Header titulo="Login"/>
            <BaseBody>
                <BaseSection>
                    <div className="main">  	
                        <input type="checkbox" id="chk" aria-hidden="true"/>
                        <div className="signup">
                            <form onSubmit={handleSubmitReg}>
                                <label className="label-signup" htmlFor="chk" aria-hidden="true">Crea una cuenta</label>
                                <input
                                    className="input-signup"
                                    type="text"
                                    id="correoUsuario"
                                    name="correoUsuario"
                                    placeholder="Correo del usuario"
                                    onChange={handleChangeReg}
                                    onBlur={handleBlurReg}
                                    value={formReg.correoUsuario}
                                    required=""/>
                                {errorsReg.correoUsuario && <MensajeValidacion>{errorsReg.correoUsuario}</MensajeValidacion>}
                                
                                <input
                                    className="input-signup"
                                    type="password"
                                    id="contrasena"
                                    name="contrasena"
                                    placeholder="Contraseña"
                                    onChange={handleChangeReg}
                                    onBlur={handleBlurReg}
                                    value={formReg.contrasena}
                                    required=""/>
                                {errorsReg.contrasena && <MensajeValidacion>{errorsReg.contrasena}</MensajeValidacion>}

                                <input
                                    className="input-signup"
                                    type="password"
                                    id="confirmarContrasena"
                                    name="confirmarContrasena"
                                    placeholder="Confirmar contraseña"
                                    onChange={handleChangeReg}
                                    onBlur={handleBlurReg}
                                    value={formReg.confirmarContrasena}
                                    required=""/>
                                {errorsReg.confirmarContrasena && <MensajeValidacion>{errorsReg.confirmarContrasena}</MensajeValidacion>}

                                <select
                                    className="select-signup"
                                    id="idRol"
                                    name="idRol"
                                    placeholder="Seleccione el rol"
                                    onChange={handleChangeReg}
                                    defaultValue={'0'}                                    
                                    >
                                        <option value="0">Seleccione un rol</option>
                                        {dataBase &&
                                            dataBase.map((rol) => <option key={rol.id} value={rol.id}>{rol.nombreRol}</option>)
                                        }
                                </select>
                                {errorsReg.idRol && <MensajeValidacion>{errorsReg.idRol}</MensajeValidacion>}

                                <button className="button-signup" type="submit">Crear Cuenta</button>
                            </form>
                        </div>

                        <div className="login">
                            <form onSubmit={handleLogin}>
                                <label className="label-login" htmlFor="chk" aria-hidden="true">Inicia Sesión aqui</label>
                                <input 
                                    className="input-login"
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    placeholder="Email" 
                                    onBlur={handleBlur}
                                    value={form.email} 
                                    onChange={handleChange}
                                    />
                                {errors.email && <MensajeValidacion>{errors.email}</MensajeValidacion>}
                                <input 
                                    className="input-login"
                                    type="password"
                                    id="password" 
                                    name="password" 
                                    placeholder="Contraseña" 
                                    value={form.password}
                                    onBlur={handleBlur}  
                                    onChange={handleChange}
                                    />
                                {errors.password && <MensajeValidacion>{errors.password}</MensajeValidacion>}
                                <button className="button-login" type="submit">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
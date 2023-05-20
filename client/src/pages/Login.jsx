import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } 
from "../styles/base";
import "../styles/pages/login.css";
import { useCustomFetch } from "../hooks/useCustomFetch";
import { useVerificarPassword } from "../hooks/useVerificarPassword";
import { useForm } from "../hooks/useForm";
import { useState, useEffect } from "react";

const initialForm = {
    id:null,
    email: "",
    password: ""
}

const validateForm = (form => {
    let errors = {}
    return errors
})

export const Login = () => {  
    let url = 'http://localhost:3000/api/usuarios/verificarcuenta'

    const { pathname } = useLocation()

    let { verificarData } = useVerificarPassword(url);

    let path = "/";

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
                            <form>
                                <label className="label-signup" htmlFor="chk" aria-hidden="true">Crear Cuenta</label>
                                <input className="input-signup" type="text" name="txt" placeholder="Nombre de usuario" required=""/>
                                <input className="input-signup" type="email" name="email" placeholder="Email" required=""/>
                                <select className="select-signup" onChange={event => console.log(event.target.value)}>
                                    <option value="">Seleccione un rol</option>
                                    
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input className="input-signup" type="password" name="pswd" placeholder="Contraseña" required=""/>
                                <button className="button-signup">Crear Cuenta</button>
                            </form>
                        </div>

                        <div className="login">
                            <form onSubmit={handleLogin}>
                                <label className="label-login" htmlFor="chk" aria-hidden="true">Iniciar Sesión</label>
                                <input 
                                    className="input-login"
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    placeholder="Email" 
                                    value={form.email} 
                                    required=""
                                    onChange={handleChange}
                                    />
                                <input 
                                    className="input-login"
                                    type="password"
                                    id="password" 
                                    name="password" 
                                    placeholder="Constraseña" 
                                    value={form.password}  
                                    required=""
                                    onChange={handleChange}
                                    />
                                <button className="button-login" type="submit">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { BaseContainer, BaseBody, BaseSection } 
from "../styles/base";
import "../styles/pages/login.css";
import { useCustomFetch } from "../hooks/useCustomFetch";
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

    let {
        dataBase,
        dataToEdit,
        setDataToEdit,
        createData,
        updateData,
        deleteData,
        error,
        loading,
        response,
        setResponse,
        handleClick,
        verificarData
    } = useCustomFetch(url);

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
        createData,
        updateData,
        dataToEdit,
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
                            <form>
                                <label htmlFor="chk" aria-hidden="true">Crear Cuenta</label>
                                <input type="text" name="txt" placeholder="Nombre de usuario" required=""/>
                                <input type="email" name="email" placeholder="Email" required=""/>
                                <select onChange={event => console.log(event.target.value)}>
                                    <option value="">Seleccione un rol</option>
                                    
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <input type="password" name="pswd" placeholder="Contraseña" required=""/>
                                <button>Crear Cuenta</button>
                            </form>
                        </div>

                        <div className="login">
                            <form onSubmit={handleLogin}>
                                <label htmlFor="chk" aria-hidden="true">Iniciar Sesión</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email"
                                    placeholder="Email" 
                                    value={form.email} 
                                    required=""
                                    onChange={handleChange}
                                    />
                                <input 
                                    type="password"
                                    id="password" 
                                    name="password" 
                                    placeholder="Constraseña" 
                                    value={form.password}  
                                    required=""
                                    onChange={handleChange}
                                    />
                                <button type="submit">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </BaseSection>
            </BaseBody>
        </BaseContainer>
    );
};
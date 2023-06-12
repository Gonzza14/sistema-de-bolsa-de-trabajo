import React, { useState, useEffect } from 'react';
import { BaseLogo, BaseHeader, BaseTitle } from '../styles/elements/header';
import { ButtonLogin } from '../styles/elements/botones';
import logo from "../assets/images/logo.png";


export const Header = ({titulo}) => {

    let pathname = window.location.pathname
    const [isIndex, setIsIndex] = useState(false);

    useEffect(() => {
        pathname == "/" ? setIsIndex(true) : setIsIndex(false)
    },[isIndex])

    return (
        <BaseHeader>
            <BaseLogo src={logo} alt="Logo de la empresa" />
            {isIndex ? <ButtonLogin to={"/Login"}>
                Iniciar sesion
            </ButtonLogin>: <BaseTitle>{titulo}</BaseTitle> }
        </BaseHeader>
    );
}
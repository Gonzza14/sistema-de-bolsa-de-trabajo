import React, { useState, useEffect } from "react";
import { BaseLogo, BaseHeader, BaseTitle } from "../styles/elements/header";
import { ButtonLogin } from "../styles/elements/botones";
import logo from "../assets/images/logo.png";

export const Header = ({ titulo }) => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(now.toLocaleTimeString());
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Verificar si se ha iniciado sesion
  let haySesion = null;
  haySesion = localStorage.getItem("authToken");

  return (
    <BaseHeader>
      <div style={{ display: "flex", alignItems: "center" }}>
        <BaseLogo src={logo} alt="Logo de la empresa" />
				<p style={{ fontSize: '1.1em', fontWeight: 'bold' }}>Bienvenido {localStorage.getItem("nombreUsuario")}</p>
      </div>
      <p>{timeString}</p>
      { haySesion !== "true" ? (
        <ButtonLogin to={"/Login"}>Iniciar sesion</ButtonLogin>
      ) : (
        <BaseTitle>{titulo}</BaseTitle>
      )}
    </BaseHeader>
  );
};

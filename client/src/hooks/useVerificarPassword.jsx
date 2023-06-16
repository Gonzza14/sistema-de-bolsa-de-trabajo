import { helpHttp } from "../helpers/helpHttp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useVerificarPassword = (url, setAuth) => {
  const [dataBase, setDatabase] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const updateAuth = (token) => {
    localStorage.setItem("authToken", token);
    setAuth({ token: true });
  };

  const verificarData = (data) => {
    console.log(data);
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    // Hacer peticion al servidor enviando el json con la informacion del inicio de sesion
    helpHttp()
      .post(url, options)
      .then((res) => {
        localStorage.removeItem("rol");
        localStorage.removeItem("id_usuario");
        localStorage.removeItem("email");
        if (!res.err) {
          if (res.rol) {
            console.log(res.valido);
            localStorage.setItem("rol", res.rol);
            localStorage.setItem("id_usuario", res.id_usuario);
            localStorage.setItem("email", res.email);
            updateAuth(res.token);
            navigate("/");
          }
        } else {
          setError(res);
        }
      });
  };

  return {
    verificarData,
  };
};

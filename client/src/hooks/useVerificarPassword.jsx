import { helpHttp } from "../helpers/helpHttp";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useVerificarPassword = (url, setAuth, setDataLleno) => {
  const [dataBase, setDatabase] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const updateAuth = (token) => {
    localStorage.setItem("authToken", token);
    setAuth({ token: true });
  };

  const updateDataLleno = (data) => {
    localStorage.setItem("dataLleno", data);
    setDataLleno(data);
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
            localStorage.setItem("rol", res.rol);
            localStorage.setItem("id_usuario", res.id_usuario);
            localStorage.setItem("email", res.email);
						console.log(res)
            updateAuth(res.token);
            updateDataLleno(res.datosLlenos);
            if (res.datosLlenos) {
							navigate("/");
						}else{
						res.rol === "solicitante" ? navigate("/Usuario/editar") : navigate("/");
						}
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

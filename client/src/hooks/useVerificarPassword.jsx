import { helpHttp } from "../helpers/helpHttp"
import { useState, useEffect } from "react";

export const useVerificarPassword = (url) => {
    const [dataBase,setDatabase] = useState(null);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const verificarData = (data) => {
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
        };
        // Hacer peticion al servidor enviando el json con la informacion del inicio de sesion
        helpHttp().post(url, options).then((res) => {
            //console.log(res);
            if (!res.err) {
                console.log(res)
                localStorage.removeItem("rol")
                localStorage.setItem("rol",res.rol)
            } else {
                setError(res);
            }
        });
    }

    return {
        verificarData
    }
}
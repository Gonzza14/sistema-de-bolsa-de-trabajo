import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoutes = ({ auth, dataLleno }) => {
  const navigate = useNavigate();
  const autenticado = localStorage.getItem("authToken");
  const datos = localStorage.getItem("dataLleno");
  const rol = localStorage.getItem("rol");
  useEffect(() => {
    if (autenticado != "true") {
      navigate("/Login");
    } else if (!dataLleno) {
      if (rol === "solicitante") {
        navigate("/Usuario/editar");
      } else if (rol === "empresa") {
        navigate("/UsuarioEmp/editar");
      }
    }
  }, [auth.token, dataLleno, datos, navigate]);

  return <Outlet />;
};

export default PrivateRoutes;

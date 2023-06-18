import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoutes = ({ auth, dataLleno }) => {
  const navigate = useNavigate();
	const autenticado = localStorage.getItem("authToken");
	const datos = localStorage.getItem("dataLleno");
  useEffect(() => {
    if (autenticado != "true" ) {
      navigate("/Login");
    } else if (!dataLleno) {
			console.log(datos)
      navigate("/Usuario/editar");
    }
  }, [auth.token, dataLleno, datos,  navigate]);

  return <Outlet />;

};

export default PrivateRoutes;

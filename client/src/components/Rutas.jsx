import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CurriculumVitae } from "../pages/CurriculumVitae";
import { Login } from "../pages/Login";
import { Postulaciones } from "../pages/Postulaciones";
import { Empresa } from "../pages/Empresa";
import { Buscar } from "../pages/Buscar";
import { Home } from "../pages/Home";
import { NavBar } from "./NavBar";
import { Usuario } from "../pages/solicitante/perfil/Usuario";
import { UsuarioEmp } from "../pages/empresa/perfil/UsuarioEmp";
import { GestionEmpresa } from "../pages/admin/empresa/GestionEmpresa";
import { GestionUsuario } from "../pages/admin/usuario/GestionUsuario";
import { GestionOfertaEmpleo } from "../pages/empresa/ofertaempleo/GestionOfertaEmpleo";
import { GestionRol } from "../pages/admin/rol/GestionRol";
import { DetalleOferta } from "../pages/solicitante/postulacion/DetalleOferta";
import { ListarPostulantes } from "../pages/empresa/postulantes/listarPostulantes";
import { GestionTipoHabilidad } from "../pages/admin/tipohabilidad/GestionTipoHabilidad";
import { GestionTipoExamen } from "../pages/admin/tipoExamen/GestionTipoExamen";
import { GestionCurriculum } from "../pages/solicitante/curriculum/GestionCurriculum";
import { GestionPermiso } from "../pages/admin/permiso/GestionarPermiso";
import { GestionRolPermiso } from "../pages/admin/rolPermiso/GestionRolPermiso";
import PrivateRoutes from "./PrivateRoutes";
import { Error404 } from "../pages/errors/Error404";
import { VerCV } from "../pages/empresa/postulantes/vercv";
import { useEffect, useState } from "react";
import { useCustomFetch } from "../hooks/useCustomFetch";

export const Rutas = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataLleno, setDataLleno] = useState(localStorage.getItem("dataLleno"));
  const [rol, setRol] = useState(localStorage.getItem("rol"));

  const [auth, setAuth] = useState({
    token: localStorage.getItem("token"),
  });

  let url =
    process.env.NODE_ENV === "production"
      ? "/api/usuarios/autenticacion"
      : "http://localhost:3000/api/usuarios/autenticacion";

  let { dataBase, error, loading } = useCustomFetch(url, setDataLleno);

  useEffect(() => {
    if (dataBase) {
      localStorage.setItem("authToken", dataBase.token);
      localStorage.setItem("dataLleno", dataBase.datosLlenos);
      localStorage.setItem("rol", dataBase.rol);
      setAuth({ token: dataBase.token });
      setDataLleno(dataBase.datosLlenos);
      setRol(dataBase.rol);
      setDataLoaded(loading);
    }
  }, [dataBase]);

  console.log(dataBase);
  console.log(auth);

  return (
    <Router>
      <NavBar
        auth={auth}
        setAuth={setAuth}
        dataLleno={dataLleno}
        setDataLleno={setDataLleno}
        rol={rol}
        setRol={setRol}
      />
      {!dataLoaded && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Buscar" element={<Buscar />} />
          <Route
            path="/Login"
            element={
              <Login
                setAuth={setAuth}
                setDataLleno={setDataLleno}
                setRol={setRol}
              />
            }
          />
          <Route
            element={
              <PrivateRoutes
                auth={auth}
                setAuth={setAuth}
                dataLleno={dataLleno}
                setDataLleno={setDataLleno}
                rol={rol}
                setRol={setRol}
              />
            }
          >
            {/* ==================================ADMINISTRADOR=================================== */}

            <Route path="/GestionEmpresa/*" element={<GestionEmpresa />} />
            <Route path="/GestionUsuario/*" element={<GestionUsuario />} />
            <Route
              path="/GestionTipoHabilidad/*"
              element={<GestionTipoHabilidad />}
            />
            <Route
              path="/GestionTipoExamen/*"
              element={<GestionTipoExamen />}
            />
            <Route path="/GestionRol/*" element={<GestionRol />} />

            <Route path="/GestionPermiso/*" element={<GestionPermiso />} />
            <Route
              path="/GestionRolPermiso/*"
              element={<GestionRolPermiso />}
            />

            {/* ==================================SOLICITANTE=================================== */}
            <Route
              path="/Usuario/*"
              element={<Usuario setDataLleno={setDataLleno} />}
            />
            <Route
              path="/GestionCurriculum/*"
              element={<GestionCurriculum />}
            />

            <Route path="/Postulaciones" element={<Postulaciones />} />

            {/* ===================================EMPRESA=================================== */}

            <Route
              path="/UsuarioEmp/*"
              element={<UsuarioEmp setDataLleno={setDataLleno} />}
            />

            <Route path="/Empresa" element={<Empresa />} />

            <Route
              path="/GestionOfertaEmpleo/*"
              element={<GestionOfertaEmpleo />}
            />

            <Route path="/DetalleOferta/:idOfert" element={<DetalleOferta />} />

            <Route
              path="/ListarPostulantes/:idOfert"
              element={<ListarPostulantes />}
            />

            <Route path="/VerCV/:parametro" element={<VerCV />} />
          </Route>
					
          <Route path="*" element={<Error404 />} />
        </Routes>
      )}
    </Router>
  );
};

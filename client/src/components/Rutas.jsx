import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CurriculumVitae } from '../pages/CurriculumVitae';
import { Login } from '../pages/Login';
import { Postulaciones } from '../pages/Postulaciones';
import { Empresa } from '../pages/Empresa';
import { Buscar } from '../pages/Buscar';
import { Home } from '../pages/Home';
import { NavBar } from './NavBar';
import { Usuario } from '../pages/solicitante/perfil/Usuario';
import { GestionEmpresa } from '../pages/admin/empresa/GestionEmpresa';
import { GestionUsuario } from '../pages/admin/usuario/GestionUsuario';
import { GestionOfertaEmpleo } from '../pages/empresa/ofertaempleo/GestionOfertaEmpleo';
import { GestionRol } from '../pages/admin/rol/GestionRol'
import { DetalleOferta } from '../pages/solicitante/postulacion/DetalleOferta'
import { ListarPostulantes } from '../pages/empresa/postulantes/listarPostulantes'
import { GestionTipoHabilidad } from '../pages/admin/tipohabilidad/GestionTipoHabilidad';
import { GestionTipoExamen } from '../pages/admin/tipoExamen/GestionTipoExamen';
import {GestionCurriculum} from '../pages/solicitante/curriculum/GestionCurriculum';
import {GestionPermiso} from '../pages/admin/permiso/GestionarPermiso';
import {GestionRolPermiso} from '../pages/admin/rolPermiso/GestionRolPermiso';
import PrivateRoutes from './PrivateRoutes';
import { Error404 } from '../pages/errors/Error404';

export const Rutas = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/CV' element={<CurriculumVitae />} />
                <Route path='/Postulaciones' element={<Postulaciones />} />
                <Route path='/Buscar' element={<Buscar />} />
                <Route path='/Empresa' element={<Empresa />} />
                <Route path='/Login' element={<Login />} />
                <Route element={<PrivateRoutes />}>
                    <Route path='/GestionEmpresa/*' element={<GestionEmpresa/>}/>
                    <Route path='/GestionUsuario/*' element={<GestionUsuario/>}/>
                    <Route path='/GestionTipoHabilidad/*' element={<GestionTipoHabilidad/>}/>
                    <Route path='/GestionOfertaEmpleo/*' element={<GestionOfertaEmpleo/>}/>
                    <Route path='/GestionRol/*' element={<GestionRol/>}/>
                    <Route path='/DetalleOferta/*' element={<DetalleOferta/>}/>
                    <Route path='/ListarPostulantes/*' element={<ListarPostulantes/>}/>
                    <Route path='/GestionTipoExamen/*' element={<GestionTipoExamen/>}/>
				    <Route path='/GestionCurriculum/*'	element= {<GestionCurriculum/>}/>
                    <Route path='/Usuario/*' element={<Usuario />} />
					<Route path='/GestionPermiso/*'	element= {<GestionPermiso/>}/>
				    <Route path='/GestionRolPermiso/*'	element= {<GestionRolPermiso/>}/>
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
};
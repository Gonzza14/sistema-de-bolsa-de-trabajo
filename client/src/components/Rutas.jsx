import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CurriculumVitae } from '../pages/CurriculumVitae';
import { Login } from '../pages/Login';
import { Postulaciones } from '../pages/Postulaciones';
import { Empresa } from '../pages/Empresa';
import { Buscar } from '../pages/Buscar';
import { Home } from '../pages/Home';
import { NavBar } from './NavBar';
import { Usuario } from '../pages/Usuario';

export const Rutas = () => {
    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/Usuario' element={<Usuario />} />
                <Route path='/' element={<Home />} />
                <Route path='/CV' element={<CurriculumVitae />} />
                <Route path='/Postulaciones' element={<Postulaciones />} />
                <Route path='/Buscar' element={<Buscar />} />
                <Route path='/Empresa' element={<Empresa />} />
                <Route path='/Login' element={<Login />} />
            </Routes>
        </Router>
    );
};
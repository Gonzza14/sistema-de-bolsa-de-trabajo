import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    let auth = { 'token': true }
    return (
        auth.token ? <Outlet></Outlet> : <Navigate to="/Login" />
    );
}

export default PrivateRoutes;
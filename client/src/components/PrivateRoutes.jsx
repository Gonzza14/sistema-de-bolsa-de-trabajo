import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = ({ auth }) => {
  console.log(auth);
  return auth.token ? <Outlet></Outlet> : <Navigate to="/Login" />;
};

export default PrivateRoutes;

//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createEmpresa,
  deleteEmpresa,
  getEmpresa,
  getEmpresas,
  updateEmpresa,
  getPerfilesPorEmpresa,
} from "../controllers/empresas.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/empresas", getEmpresas);
router.post("/empresas", createEmpresa);
router.put("/empresas/:id", updateEmpresa);
router.delete("/empresas/:id", deleteEmpresa);
router.get("/empresas/:id", getEmpresa);
router.get("/empresas/:id/:perfiles", getPerfilesPorEmpresa);

//Exportamos el router
export default router;

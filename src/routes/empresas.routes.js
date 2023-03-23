//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createEmpresa,
  deleteEmpresa,
  getEmpresa,
  getEmpresas,
  updateEmpresa,
} from "../controllers/empresas.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/empresas", getEmpresas);
router.post("/empresas", createEmpresa);
router.put("/empresas/:id");
router.delete("/empresas/:id");
router.get("/empresas/:id");

//Exportamos el router
export default router;

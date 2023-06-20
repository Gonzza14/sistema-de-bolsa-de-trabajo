//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createOfertaEmpleo,
  deleteOfertaEmpleo,
  getOferta,
  updateOfertaEmpleo,
} from "../controllers/ofertaempleos.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/:id", getOferta);
router.post("/:idEmpresa", createOfertaEmpleo);
router.put("/:idEmpresa/:id", updateOfertaEmpleo);
router.delete("/:idEmpresa:id", deleteOfertaEmpleo);
//router.get("/", getEmpresa);
//router.get("/:id/:perfiles", getPerfilesPorEmpresa);

//Exportamos el router
export default router;

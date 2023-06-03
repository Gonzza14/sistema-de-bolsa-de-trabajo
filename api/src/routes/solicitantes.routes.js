//Importamos el router de express
import { Router } from "express";
//Importamos los metodos del controlador
import {
  createSolicitante,
  deleteSolicitante,
  getSolicitante,
  getSolicitantes,
  updateSolicitante,
  getSolicitantePorUsuario,
  obtenerPostulantesPostgre
} from "../controllers/solicitantes.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getSolicitantes);
router.post("/", createSolicitante);
router.put("/:id", updateSolicitante);
router.delete("/:id", deleteSolicitante);
router.get("/:id", getSolicitante);
router.get("/us/:idUsuario", getSolicitantePorUsuario);
router.get("/post/:idOferta", obtenerPostulantesPostgre);

//Exportamos el router
export default router;

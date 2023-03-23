//Importamos el router de express
import { Router } from "express";
import { getPerfiles, createPerfil, updatePerfil, deletePerfil, getPerfil } from "../controllers/perfiles.controller";
//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getPerfiles)
router.post("/", createPerfil)
router.put("/:id", updatePerfil)
router.delete("/:id", deletePerfil)
router.get("/:id", getPerfil)

//Exportamos el router
export default router;

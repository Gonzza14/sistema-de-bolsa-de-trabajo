//Importamos el router de express
import { Router } from "express";

import {
	createPermiso,
	deletePermiso,
	getPermiso,
	getPermisos,
	updatePermiso,
} from "../controllers/permisos.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getPermisos);
router.post("/", createPermiso);
router.put("/:id", updatePermiso);
router.delete("/:id", deletePermiso);
router.post("/:id", getPermiso);

export default router;
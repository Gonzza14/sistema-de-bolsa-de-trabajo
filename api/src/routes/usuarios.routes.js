//Importamos el router de express
import { Router } from "express";

import {
    createUsuario,
    deleteUsuario,
    getSolicitante,
    getUsuario,
    getUsuarios,
    updateUsuario,
    verificarUsuario,
    updateSolicitante
} from "../controllers/usuarios.controller";

//Creamos una instancia del router
const router = Router();

//Definimos las rutas
router.get("/", getUsuarios);
router.post("/", createUsuario);
router.post("/verificarcuenta", verificarUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
router.post("/:id", getUsuario);
router.get("/solicitante/:id", getSolicitante);
router.put("/solicitante/:id", updateSolicitante);

export default router;
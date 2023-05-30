import { Router } from "express";

import {
    createPostula,
    deletePostula,
    getPostula,
    getPostulas,
    updatePostula,
    insertarPostulaPostgre
} from "../controllers/postula.controller";

// Crear una instancia de router
const router = Router();

// Rutas para el manejo del Rol
router.get("/:idOferta/:idSolic", getPostula);
router.get("/", getPostulas);
router.post("/", createPostula);
router.put("/:idOferta/:idSolic", updatePostula);
router.delete("/:idOferta/:idSolic", deletePostula);
router.get("/ins/:idOferta/:idSolic", insertarPostulaPostgre);

export default router;
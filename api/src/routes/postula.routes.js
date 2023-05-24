import { Router } from "express";

import {
    createPostula,
    deletePostula,
    getPostula,
    getPostulas,
    updatePostula,
} from "../controllers/postula.controller";

// Crear una instancia de router
const router = Router();

// Rutas para el manejo del Rol
router.get("/", getPostulas);
router.post("/", createPostula);
router.put("/:idOferta/:idSolic", updatePostula);
router.delete("/:idOferta/:idSolic", deletePostula);
router.get("/:idOferta/:idSolic", getPostula);

export default router;
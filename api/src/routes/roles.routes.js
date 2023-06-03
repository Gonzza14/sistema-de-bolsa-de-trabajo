import { Router } from "express";

import {
    createRol,
    deleteRol,
    getRol,
    getRoles,
    updateRol,
    getRolesSinAdmin
} from "../controllers/roles.controller";

// Crear una instancia de router
const router = Router();

// Rutas para el manejo del Rol
router.get("/", getRoles);
router.get("/sad", getRolesSinAdmin);
router.post("/", createRol);
router.put("/:id", updateRol);
router.delete("/:id", deleteRol);
router.get("/:id", getRol);

export default router;
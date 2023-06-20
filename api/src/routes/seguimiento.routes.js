//Importamos el router de express
import { Router } from "express";
import { createSeguimiento, getSeguimientos } from "../controllers/seguimiento.controller";

const router = Router();

router.get("/:id", getSeguimientos);
router.post("/", createSeguimiento);

export default router;
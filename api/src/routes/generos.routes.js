import { Router } from 'express';

import {
    getGeneros,
} from "../controllers/generos.controller";

const router = Router();

router.get("/", getGeneros);

export default router;
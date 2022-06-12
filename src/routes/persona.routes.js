import { Router } from "express";
import { methods as personaController } from "../controllers/persona.controller";

const router = Router();

//rutas 
router.get("/", personaController.getRoles);

router.get("/:idRol", personaController.getRol);

router.post("/", personaController.addRol);

router.delete("/:idRol", personaController.deleteRol);

router.put("/:idRol", personaController.updateRol);

export default router; 
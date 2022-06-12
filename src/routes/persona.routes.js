import { Router } from "express";
import { methods as personaController } from "../controllers/persona.controller";

const router = Router();

//rutas 
router.get("/", personaController.getPersonas);

router.get("/:id_persona", personaController.getpersona);

router.post("/", personaController.addPersona);

router.delete("/:id_persona", personaController.deletePersona);

router.put("/:id_persona", personaController.updatePersona);

export default router; 
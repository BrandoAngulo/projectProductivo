import { Router } from "express";
import { methods as rolController } from "../controllers/rol.controller";

const router = Router();

//rutas 
router.get("/", rolController.getRoles);

router.get("/:idRol", rolController.getRol);

router.post("/", rolController.addRol);

router.delete("/:idRol", rolController.deleteRol);

router.put("/:idRol", rolController.updateRol);

export default router; 
import { Router } from "express";
import { methods as departamentsController } from "../controllers/departaments.controller";

const router = Router();

//rutas 
router.get("/",departamentsController.getDepartamentos);

router.get("/:id_departamento",departamentsController.getDepartamento);

router.post("/",departamentsController.addDepartamento);

router.delete("/:id_departamento",departamentsController.deletedepartamento);

router.put("/:id_departamento",departamentsController.updateDepartamento);

export default router; 
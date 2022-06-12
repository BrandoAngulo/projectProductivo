import { Router } from "express";
import { methods as empleadoController } from "../controllers/empleado.controller";

const router = Router();

router.get("/",empleadoController.getEmpleados);
router.get("/:id_empleado",empleadoController.getempleado);
router.post("/",empleadoController.addEmpleado);
router.delete("/:id_vendedor",empleadoController.deleteEmpleado);
router.put("/:id_empleado",empleadoController.updateEmpleado);

export default router;
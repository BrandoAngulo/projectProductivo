import { Router } from "express";
import { methods as clienteController } from "../controllers/cliente.controller";

const router = Router();
//rutas 
router.get("/",clienteController.getClientes);
router.get("/:id_cliente",clienteController.getCliente);
router.post("/",clienteController.addCliente);
router.put("/:id_cliente",clienteController.updateCliente);
router.delete("/:id_cliente",clienteController.deleteCliente);

export default router;


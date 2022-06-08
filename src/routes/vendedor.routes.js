import { Router } from "express";
import { methods as vendedorController } from "../controllers/vendedor.controller";

const router = Router();

router.get("/",vendedorController.getVendedores);
router.get("/:id_vendedor",vendedorController.getVendedor);
router.post("/",vendedorController.addVendedor);
router.delete("/:id_vendedor",vendedorController.deleteVendedor);
router.put("/:id_vendedor",vendedorController.updateVendedor);

export default router;
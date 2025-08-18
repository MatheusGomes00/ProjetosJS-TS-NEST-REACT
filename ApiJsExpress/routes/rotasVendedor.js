import express from "express";
import * as service from "../service/vendedorService.js"

const router = express.Router();

router.post("/cadastrar", service.cadastrarVendedor);

// router.get("/listar", service.listarVendedores);
// router.post("/verificar-meta", service.verificarMeta);


export default router;
import express from "express";
import * as service from "../service/vendaService.js"

const router = express.Router();

router.get("/listar", service.listarVendas);

router.post("/adicionar/:vendedorId", service.adicionarVenda);

//router.get("/buscar/:codigo", service.buscarVenda);

//router.get("/calc-total", service.calcTotalVendas);

//router.post("/filtrar-valor", service.filtrarVendas);

//router.put("/editar/:codigo", service.editarVenda);

//router.delete("/remover/:codigo", service.removerVenda);

export default router;
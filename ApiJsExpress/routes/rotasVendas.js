import express from "express";
import * as service from "../service/vendaService.js"
import {buscarVendasPorVendedor} from "../service/vendaService.js";

const router = express.Router();

router.get("/listar", service.listarVendas);

router.post("/adicionar/:vendedorId", service.adicionarVenda);

router.get("/buscar/:codigoVenda", service.buscarVenda);

router.get("/vendedor/:vendedorId", service.buscarVendasPorVendedor);

router.get("/calc-total", service.calcTotalVendas);

router.post("/filtrar-valor", service.filtrarVendas);

router.put("/editar/:codigoVenda", service.editarVenda);

router.delete("/remover/:codigoVenda", service.removerVenda);

export default router;
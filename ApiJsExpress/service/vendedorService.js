import Vendedor from "../schemas/VendedorSchema.js";
import Venda from "../schemas/VendaSchema.js";
import buscarMetasMensal from "./metaService.js"
import mongoose from "mongoose";


export async function cadastrarVendedor(req, res) {
    try{
        const vendedor = new Vendedor({
            nomeVendedor: req.body.nomeVendedor,
            email: req.body.email,
        });
        await vendedor.save();
        return res.status(200).json(vendedor);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function listarVendedores(req, res) {
    try {
        const listaVendedores = await Vendedor.find({});
        return res.status(200).json(listaVendedores);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function verificarMetaMensalVendedor(req, res) {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.vendedorId)) {
            return res.status(400).json({erro: "ID invalido, verifique o parâmetro passado."});
        }
        const vendedorObjId = new mongoose.Types.ObjectId(req.params.vendedorId);

        const aggretation = await Venda.aggregate([
            {
                $match: {vendedorId: vendedorObjId}
            },
            {
                $group: {
                    _id: "$vendedorId",
                    totalVendas: {$sum: "$valorVenda"},
                    quantidadeVendas: {$sum: 1}
                }
            }
        ]);
        const resultadoAgg = aggretation[0] || { totalVendas: 0, quantidadeVendas: 0 };

        const metas = await buscarMetasMensal();
        if(!Array.isArray(metas)) {
            return res.status(400).json({erro: metas.erro});
        }

        let mensagem = {
            vendedorId: resultadoAgg._id,
            totalVendas: resultadoAgg.totalVendas,
            quantidadeVendas: resultadoAgg.quantidadeVendas,
            metaAtingida: null,
        };
        for (const meta of metas) {
            if (resultadoAgg.totalVendas >= meta.valorMeta) {
                mensagem.metaAtingida = meta.tipoMeta;
            }
        }
        if(!mensagem.metaAtingida) {
            mensagem.metaAtingida = "Não atingiu nenhuma meta.";
        }
        return res.status(200).json(mensagem);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function verificarMetasTodosVendedores(req, res) {
    try {
        const aggretation = await Venda.aggregate([
            {
                $group: {
                    _id: "$vendedorId",
                    totalVendas: {$sum: "$valorVenda"},
                    quantidadeVendas: {$sum: 1}
                }
            }
        ]);

        const metas = await buscarMetasMensal();
        if(!Array.isArray(metas)) {
            return res.status(404).json({erro: metas.erro});
        }

        const resultado = aggretation.map(vendedor => {
            let mensagem = {
                vendedorId: vendedor._id,
                totalVendas: vendedor.totalVendas,
                quantidadeVendas: vendedor.quantidadeVendas,
                metaAtingida: null,
            };

            for (const meta of metas) {
                if (vendedor.totalVendas >= meta.valorMeta) {
                    mensagem.metaAtingida = meta.tipoMeta;
                }
            }
            if(!mensagem.metaAtingida) {
                mensagem.metaAtingida = "Não atingiu nenhuma meta.";
            }
            return mensagem;
        });

        return res.status(200).json(resultado);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function editarCadastro(req, res) {
    try {
        const vendedorId = req.params.vendedorId;
        if (!mongoose.Types.ObjectId.isValid(vendedorId)) {
            return res.status(400).json({erro: "ID invalido, verifique o parâmetro passado."});
        }

        const alteracoes = {};
        if (req.body.email) {
            alteracoes.email = req.body.email;
        }
        if (req.body.nomeVendedor) {
            alteracoes.nomeVendedor = req.body.nomeVendedor;
        }
        const vendedor = await Vendedor.findOneAndUpdate({_id: vendedorId}, alteracoes, {
            new: true,
            runValidators: true
        });
        if (!vendedor) {
            return res.status(404).json({erro: "Erro ao atualizar vendedor. " +
                    "Verifique o código, formato do email e nome do vendedor."});
        }
        return res.status(200).json(vendedor);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

// realiza exclusão lógica
export async function removerCadastro(req, res) {
    try {
        const vendedorId = req.params.vendedorId;
        if (!mongoose.Types.ObjectId.isValid(vendedorId)) {
            return res.status(400).json({erro: "ID invalido, verifique o parâmetro passado."});
        }
        const vendedorExcluido = await Vendedor.findOneAndUpdate({_id: vendedorId},
            {ativo: false},
            {new: true}
        );
        if (!vendedorExcluido) {
            return res.status(404).json({erro: "Vendedor não localizado, verifique o parâmetro passado."});
        }
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

import Venda from "../schemas/VendaSchema.js"


export async function adicionarVenda(req, res) {
    try{
        const venda = new Venda({
            vendedorId: req.params.vendedorId,
            categoria: req.body.categoria,
            valorVenda: req.body.valorVenda,
        });
        await venda.save();
        return res.status(201).json(venda);
    } catch ( erro ) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function listarVendas(req, res) {
    try {
        const vendas = await Venda.find({});
        return res.status(200).json(vendas);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function buscarVenda(req, res) {
    try {
        const codigo = req.params.codigoVenda;
        const venda = await Venda.findOne({codigoVenda: codigo});
        if (!venda) {
            return res.status(404).json({erro: "Venda não localizada."})
        }
        return res.status(200).json(venda);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function buscarVendasPorVendedor(req, res) {
    try {
        const vendedorId = req.params.vendedorId;
        const listaVendas = await Venda.find({vendedorId: vendedorId});

        return res.status(200).json(listaVendas);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function calcTotalVendas(req, res) {
    {
        try {
            const listaVendas = await Venda.find({});
            if (listaVendas.length === 0) {
                return res.status(404).json({erro: "Nenhuma venda localizada."})
            }
            let totalVendas = 0;
            for (const venda of listaVendas) {
                totalVendas += venda.valorVenda;
            }
            return res.status(200).json({totalVendas: totalVendas})
        } catch (erro) {
            return res.status(500).json({erro: erro.message});
        }
    }
}

// pode ser editado para retornar algo especifico
export async function filtrarVendas(req, res) {
    try {
        const filtroOp = req.body.filtroOp;
        const valorFiltro = req.body.valorFiltro;
        if (!filtroOp || !valorFiltro || isNaN(valorFiltro) || valorFiltro <= 0) {
            return res.status(400).json({erro: "Filtro e filtroOp são obrigatórios."})
        }

        let filtroQuery = {};
        if (filtroOp === "menorIgual") {
            filtroQuery = {$lte: valorFiltro}; // <= menor igual
        } else if (filtroOp === "maiorIgual") {
            filtroQuery = {$gte: valorFiltro};  // > maior igual
        } else {
            return res.status(400).json({erro: "filtroOp precisa ser 'menorIgual' ou 'maiorIgual'."})
        }

        const vendasFiltradas = await Venda.find({valorVenda: filtroQuery});
        if (vendasFiltradas.length === 0) {
            return res.status(404).json({erro: "Nenhuma venda localizada."})
        }
        return res.status(200).json(vendasFiltradas);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

export async function editarVenda(req, res) {
    try {
        const codigo = req.params.codigoVenda;

        const alteracoes = {}
        if(req.body.categoria) {
            alteracoes.categoria = req.body.categoria;
        }
        if(req.body.valorVenda) {
            alteracoes.valorVenda = req.body.valorVenda;
        }
        const vendaAtualizada = await Venda.findOneAndUpdate({codigoVenda: codigo},
            alteracoes, { new: true }); // se não definir a option {new:true} vai retornar o objeto antes de atualizar
        if (!vendaAtualizada) {
            return res.status(400).json({erro: "Erro ao atualizar venda. " +
                    "Verifique o código da venda e as alterações passadas."});
        }
        return res.status(200).json(vendaAtualizada);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}

// realiza a remoção do registro, pode ser alterado para exclusão lógica
export async function removerVenda(req, res) {
    try {
        const codigo = req.params.codigoVenda;
        await Venda.findOneAndDelete({codigoVenda: codigo});
        return res.sendStatus(204);
    } catch (erro) {
        return res.status(500).json({erro: erro.message});
    }
}
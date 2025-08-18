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
    } catch ( erro ){
        return res.status(erro.status).json({erro: erro.message});
    }
}

export async function listarVendas(req, res) {
    try {
        const vendas = await Venda.find({});
        return res.status(200).json(vendas);
    } catch (erro) {
        return res.status(erro.status).json({erro: erro.message});
    }
}

// buscarVenda

// calcTotalVendas
// filtrarVendas
// editarVenda
// removerVenda
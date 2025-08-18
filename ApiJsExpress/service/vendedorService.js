import Vendedor from "../schemas/VendedorSchema.js";

export async function cadastrarVendedor(req, res) {
    try{
        const vendedor = new Vendedor({
            nomeVendedor: req.body.nomeVendedor,
            email: req.body.email,
        });
        await vendedor.save();
        return res.status(200).json(vendedor);
    } catch (erro) {
        return res.status(erro.status).json({erro: erro.message});
    }

}
import ItemSchema from "../models/ItemSchema.js";

export const createItem = async (req, res) => {
    try{
        const novoItem = await ItemSchema.create(req.body);
        res.status(201).json(novoItem);
    } catch (erro) {
        res.status(400).json({ error: erro.message })
    }
};

export const getItens = async (req, res) => {
    try {
        const lista = await ItemSchema.find();
        res.json(lista);
    } catch (erro) {
        res.status(404).json({error: erro.message })
    }
}

export const deleteItens = async (req, res) => {
    try {
        const idItem = req.params.id;
        await ItemSchema.findByIdAndDelete(idItem);
        res.json({ message: "Item removido" });
    } catch (erro) {
        res.status(500).json({error: erro.message})
    }
}
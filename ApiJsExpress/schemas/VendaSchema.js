import mongoose, { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const Venda = new Schema({
    // nomeVendedor: {
    //     type: String,
    //     required: true,
    //     message: "Nome do vendedor é obrigatório.", },
    vendedorId: {
        type: Schema.Types.ObjectId,
        ref: "Vendedor",
        required: [true, "ID vendedor é obrigatório."],
    },
    codigoVenda: {
        type: String,
        unique: true,
        required: true,
        default: () => uuidv4(),
    },
    categoria: {
        type: String,
        required: [true, "Categoria da venda é obrigatório."],
        enum: {
            values: ["Carro", "Moto", "Imobiliario", "Caminhao", "Aviao", "Seguro"],
            message: "Falha ao validar enum `{PATH}` valor `{VALUE}` não existe.",
        },
    },
    valorVenda: {
        type: Number,
        required: [true, "Valor da venda é obrigatório."],
    },

    dataVenda: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

// exporta o schema como modelo/entidade para manipulação e persistencia
export default mongoose.model('Venda', Venda);
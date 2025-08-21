import { Schema, model } from "mongoose";

const Vendedor = new Schema({
    nomeVendedor: {
        type: String,
        required: true,
        message: "Nome do vendedor é obrigatorio", },
    email: {
        type: String,
        unique: true,
        required: [true, "E-mail do vendedor é obrigatório."],
        validate: {
            validator: function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: props => `${props.value} não é um e-mail válido`,
        },
    },
    // atingiuMeta: {
    //     type: Boolean,
    //     default: false,
    // },
    ativo: {
        type: Boolean,
        default: true,
    }
    // },
    // categoriaFrente: {
    //     type: String,
    //     required: true,
    //     enum: {
    //         values: ["Carro", "Moto", "Imobiliario", "Caminhao", "Aviao", "Seguro"],
    //         message: "Falha ao validar enum `{PATH}` valor `{VALUE}` não existe.",
    //     }
    // },
});

export default model("Vendedor", Vendedor);


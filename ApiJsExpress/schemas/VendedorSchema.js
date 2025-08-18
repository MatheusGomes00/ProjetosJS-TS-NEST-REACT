import { Schema, model } from "mongoose";

const Vendedor = new Schema({
    nomeVendedor: {
        type: String,
        required: true,
        message: "Nome do vendedor é obrigatorio", },
    email: {
        type: String,
        required: [true, "E-mail do vendedor é obrigatório."],
        validate: {
            validator: function (value) {
                return /\S+@\S+\.\S+/.test(value);
            },
            message: props => `${props.value} não é um e-mail válido`,
        },
    },
    atingiuMeta: {
        type: Boolean,
        required: true,
        default: false,
    },
});

export default model("Vendedor", Vendedor);


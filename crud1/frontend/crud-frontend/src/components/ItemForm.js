import React, { useState } from "react";

export default function ItemForm({ onAdd }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nome || !preco) return;
        onAdd({ nome, preco: Number(preco)});
        setNome("");
        setPreco("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
            />
            <input
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço"
                type="number"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}
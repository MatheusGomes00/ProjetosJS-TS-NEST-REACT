import React from "react";

export default function ItemList({ itens, onDelete }) {
    return (
        <ul>
            {itens.map(item => (
                <li key={item._id}>
                    {item.nome} - R$ {item.preco}
                    <button onClick={() => onDelete(item._id)}>Excluir</button>
                </li>
            ))}
        </ul>
    );
}


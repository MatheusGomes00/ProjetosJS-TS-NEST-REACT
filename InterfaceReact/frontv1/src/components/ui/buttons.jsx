import React from "react";
import vendasImg from "../../assets/vendas1.svg";

export const BlueButton = ({ onClick, children, className}) => {
    return (
        <button
            onClick={onClick}
            className={`bg-gray-700 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2 ${className || ""}`}
        >
            {children}
        </button>
    )
}

export const GrayButton = ({ onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
        >
            {children}
        </button>
    )
}

export const VendaButton = ({ onClick}) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-700 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
        >
            <img src={vendasImg} className="w-14 h-14"  alt={"icone venda"} />
            Nova Venda
        </button>
    )
}


export const GreenButton = ({ onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-700 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
        >
            {children}
        </button>
    )
}

export const ButtonImg = ({ onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
            {children}
        </button>
    )
}

import React from "react";

export const BlueButton = ({ onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className="bg-gray-700 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded flex items-center gap-2"
        >
            {children}
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

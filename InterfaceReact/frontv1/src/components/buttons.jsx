import React from "react";

export const BlueButton = ({ label, onClick}) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
        >
            {label}
        </button>
    )
}

export const GreenButton = ({ label, onClick}) => {
    return (
        <button
            onClick={onClick}
            className="accent-green-700 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
        >
            {label}
        </button>
    )
}

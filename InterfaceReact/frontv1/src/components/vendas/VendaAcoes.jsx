import {useState} from "react";
import {FaBars, FaEdit, FaTrash, FaWhatsapp} from "react-icons/fa";

export const VendaAcoes = ({ venda, onEdit, onDelete }) => {
    const [open, setOpen] = useState(false);
    return (
        <td className={"px-4 py-2 flex justify-center relative"}>
            <div className={"relative"}
                 tabIndex={0}
                 onFocus={() => setOpen(true)}
                 onBlur={() => setOpen(false)}
             >
                <button className={"text-gray-600 hover:text-gray-900"}>
                    <FaBars />
                </button>
                {open && (
                    <div className={"absolute top-full left-1/2 -translate-x-1/2 mt-2 flex gap-3 bg-white border rounded-lg shadow p-2 z-10"}>
                        <button className="text-blue-600 hover:text-blue-800 relative group"
                                onMouseDown={(e) => {
                                    e.stopPropagation()
                                    onEdit(venda)
                                }}
                        >
                            <FaEdit />
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                Editar
                            </span>
                        </button>
                        <button className="text-red-600 hover:text-red-800 relative group"
                                onMouseDown={(e) => {
                                    e.stopPropagation()
                                    onDelete(venda)
                                }}
                        >
                            <FaTrash />
                            <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                                Excluir
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </td>
    )
}
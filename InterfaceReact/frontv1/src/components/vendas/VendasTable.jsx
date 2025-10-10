import {VendaAcoes} from "./VendaAcoes.jsx";
import {formatarDataHora} from "../../utils/formatarDataHora.js";

export const VendasTable = ({ vendas, onEdit, onDelete }) => {
    return (
        <div className={"mt-4"}>
            <table className={"min-w-full rounded-lg shadow-sm"}>
                <thead className={"bg-gray-700 text-white"}>
                   <tr>
                       <th className={"px-4 py-2 text-left "}>Nome Cliente</th>
                       <th className={"px-4 py-2 text-left"}>CPF Cliente</th>
                       <th className={"px-4 py-2 text-left"}>Categoria</th>
                       <th className={"px-4 py-2 text-left"}>Valor R$</th>
                       <th className={"px-4 py-2 text-left"}>Data</th>
                       <th className={"px-4 py-2 text-center"}>Ações</th>
                   </tr>
                </thead>
                <tbody>
                {vendas.length === 0 ? (
                    <tr>
                        <td colSpan="6" className="text-center text-2xl text-gray-200 py-6 italic bg-gray-500">
                            Nenhum venda localizada.
                        </td>
                    </tr>
                ) : (
                    vendas.map((venda, index) => (
                        <tr key={index}
                            className={"odd:bg-gray-200 even:bg-gray-50 hover:bg-gray-400 transition-colors"}
                        >
                            <td className={"px-4 py-2 font-medium"}>{venda.clienteId.nome}</td>
                            <td className={"px-4 py-2"}>{venda.clienteId.cpf}</td>
                            <td className={"px-4 py-2"}>{venda.categoria}</td>
                            <td className={"px-4 py-2"}>{venda.valorVenda}</td>
                            <td className={"px-4 py-2"}>{formatarDataHora(venda.dataVenda)}</td>
                            <VendaAcoes venda={venda} onEdit={onEdit} onDelete={onDelete} />
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    )
}
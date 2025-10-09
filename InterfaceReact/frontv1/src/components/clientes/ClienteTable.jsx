import {BadgeStatus} from "../ui/badgeStatus.jsx";
import {ClienteAcoes} from "./ClienteAcoes.jsx";

export const ClienteTable = ({ clientes, onWhatsapp, onEdit, onDelete }) => {
    return (
        <div className={"mt-4"}>
            <table className="min-w-full rounded-lg shadow-sm">
                <thead className="bg-gray-700 text-white">
                <tr>
                    <th className="px-4 py-2 text-left">Nome</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Telefone</th>
                    <th className="px-4 py-2 text-left">Cidade/Estado</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-center">Ações</th>
                </tr>
                </thead>
                <tbody>
                {clientes.length === 0 ? (
                    <tr>
                        <td colSpan="6" className="text-center text-2xl text-gray-200 py-6 italic bg-gray-500">
                            Nenhum cliente localizado.
                        </td>
                    </tr>
                ) : (
                    clientes.map((cliente, index) => (
                        <tr
                            key={index}
                            className="odd:bg-gray-200 even:bg-gray-50 hover:bg-gray-400 transition-colors"
                        >
                            <td className="px-4 py-2 font-medium">{cliente.nome}</td>
                            <td className="px-4 py-2">{cliente.email}</td>
                            <td className="px-4 py-2">{cliente.telefone}</td>
                            <td className="px-4 py-2">{cliente.endereco.cidade}/{cliente.endereco.estado}</td>
                            <td className="px-4 py-2">
                                {cliente.status === 'ativo' &&
                                    <BadgeStatus className="bg-green-600" text={cliente.status} />}
                                {cliente.status === 'inativo' &&
                                    <BadgeStatus className="bg-gray-900" text={cliente.status} />}
                                {cliente.status === 'bloqueado' &&
                                    <BadgeStatus className="bg-red-500" text={cliente.status} />}
                                {cliente.status === 'inadimplente' &&
                                    <BadgeStatus className="bg-yellow-500" text={cliente.status} />}
                            </td>
                            <ClienteAcoes cliente={cliente} onWhatsapp={onWhatsapp} onDelete={onDelete} onEdit={onEdit}/>
                        </tr>
                    ))
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

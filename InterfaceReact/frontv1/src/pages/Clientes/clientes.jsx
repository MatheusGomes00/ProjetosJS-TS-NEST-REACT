import React, {useEffect, useState} from 'react';
import clientesImg from "../../assets/clientes1.svg";
import {BlueButton} from "../../components/ui/buttons.jsx";
import {SearchBar} from "../../components/ui/barraPesquisa.jsx";
import {ClienteTable} from "../../components/clientes/ClienteTable.jsx";
import {clientes_mock3} from "../../mocks/clientesMock.js"
import {Pagination} from "../../components/ui/paginacao.jsx";
import {Cabecalho} from "../../components/ui/heading.jsx";
import {FiltroClienteStatus} from "../../components/ui/filtroSection.jsx";
import {ClienteModal} from "../../components/clientes/ClienteModal.jsx";
import {buscarCliente, handleNovoCliente} from "../../services/ClienteService.js";
import {createPortal} from "react-dom";


const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [statusFiltro, setStatusFiltro] = useState("");
    const [showModalCliente, setShowModalCliente] = useState(false);

    const listarClientes = async () => {
        //const response = await handleBuscarClientes();
        const mock = clientes_mock3(currentPage, 10);
        setClientes(mock.data);
        setTotalPage(mock.pagination.totalPages)
    }

    useEffect(() => {
        // listarClientes();
        const mock = clientes_mock3(currentPage, 10);
        setClientes(mock.data);
        setTotalPage(mock.pagination.totalPages)
    }, [currentPage]);


    useEffect(() => {
        const mock = clientes_mock3(currentPage, 10);
        const filtrados = mock.data.filter((cliente) => statusFiltro === "" || cliente.status === statusFiltro);
        setClientes(filtrados);
        setTotalPage(mock.pagination.totalPages)
    }, [currentPage, statusFiltro]);

    const handleBuscarCliente = async (valorBusca) => {
        const response = await buscarCliente(valorBusca);
        setClientes(response.data);
        setTotalPage(response.pagination.totalPages);
    }

    const handleWhatsapp = (cliente) => console.log("WhatsApp:", cliente.telefone);
    const handleEdit = (cliente) => console.log("Editar:", cliente.nome);
    const handleDelete = (cliente) => console.log("Excluir:", cliente.nome);

    return (
        <div className={"p-6"}>
            <Cabecalho text="Clientes Cadastrados">
                <div className={"flex flex-col mb-4 md:flex-row items-center justify-center gap-6 w-full"}>
                    <SearchBar text={"Pesquisar cliente"}
                               busca={handleBuscarCliente}
                               voltarLista={listarClientes}
                    />
                    <BlueButton onClick={() => setShowModalCliente(true)}>
                        <img src={clientesImg} className="w-14 h-14"  alt={"icone cliente"} />
                        Novo Cliente
                    </BlueButton>
                    {showModalCliente && createPortal(
                        <ClienteModal text={"Cadastrar Cliente"} modalAction={handleNovoCliente}
                                      onClose={() => setShowModalCliente(false)}
                        />,
                        document.getElementById('modal-root')
                    )}
                </div>
                <FiltroClienteStatus
                    selectedStatus={statusFiltro}
                    onChange={(e) => {
                        setStatusFiltro(e.target.value);
                        setCurrentPage(1)
                    }}
                />
            </Cabecalho>
            <div>
                <ClienteTable
                    clientes={clientes}
                    onWhatsapp={handleWhatsapp}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPage}
                    onPageChange={setCurrentPage}
                />
            </div>

        </div>
    );
};

export default Clientes;
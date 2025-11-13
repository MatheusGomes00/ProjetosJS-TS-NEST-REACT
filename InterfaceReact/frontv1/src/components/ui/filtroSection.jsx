export function FiltroClienteStatus({selectedStatus, onChange}) {
    return (
        <div className={"flex flex-row items-center p-4 bg-gray-700 text-gray-200 text-sm font-bold rounded-md shadow-sm"}>
            <label htmlFor={"clienteStatus"} className={"mr-2"}>
                Filtrar por status:
            </label>
            <select
                id="clienteStatus"
                name="selectedStatus"
                value={selectedStatus}
                onChange={onChange}
                className={"bg-gray-600 text-gray-200 rounded-md p-1 focus:outline-none focus:ring-2 "}
            >
                <option defaultValue={""}></option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
                <option value="inadimplente">Inadimplente</option>
                <option value="bloqueado">Bloqueado</option>
            </select>
        </div>
    );
}

export function FiltroCategoriaVenda({selectedCategoria, onChange}) {
    return (
        <div>
            <label htmlFor={"categoriaVenda"} className={"mr-2"}>
                Filtrar por categoria:
            </label>
            <select
                id="categoriaVenda"
                name="categoriaVenda"
                value={selectedCategoria}
                onChange={onChange}
                className={"bg-gray-600 text-gray-200 rounded-md p-1 focus:outline-none focus:ring-2 "}
            >
                <option defaultValue={""}></option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="imobiliario">Imobiliario</option>
                <option value="caminhao">Caminhao</option>
                <option value="aviao">Aviao</option>
                <option value="seguro">Seguro</option>
            </select>
        </div>
    );
}
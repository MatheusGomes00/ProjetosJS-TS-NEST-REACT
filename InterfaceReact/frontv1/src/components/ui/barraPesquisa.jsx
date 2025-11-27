import {useState} from "react";

export const SearchBar = ({ text, busca, voltarLista }) => {
    const [valorBusca, setValorBusca] = useState('');
    const [buscando, setBuscando] = useState(false);
    const handleChange = (e) => setValorBusca(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(valorBusca.length <= 0) return;
        setBuscando(true);
        await busca(valorBusca);
    };
    const handleVoltar = async () => {
        setValorBusca('');
        setBuscando(false);
        await voltarLista();
    };
    return (
        <form onSubmit={handleSubmit}
              className="flex items-center w-1/2 shadow-sm rounded-full overflow-hidden border-gray-300 bg-gray-200">
            <input type="text"
                   value={valorBusca}
                   onChange={handleChange}
                   className={"flex-1 px-4 py-2 text-bold focus:outline-none"}
                   placeholder={ text }
            />
            <button type="submit"
                    className={"bg-gray-700 hover:bg-gray-500 text-gray-200 p-2 px-4 flex items-center gap-2 " +
                        "font-medium transition-colors duration-200"}
            >
                Pesquisar
            </button>
            {buscando && (
                <button type="button"
                        onClick={handleVoltar}
                        className={"bg-gray-700 hover:bg-gray-500 text-gray-200 p-2 px-4 flex items-center gap-2 " +
                            "font-medium transition-colors duration-200"}
                >
                    Voltar
                </button>
            )}
        </form>
    );
}

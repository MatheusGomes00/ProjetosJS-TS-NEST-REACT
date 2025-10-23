import {Cabecalho} from "../ui/heading.jsx";
import {useRef, useState} from "react";
import {useFormStatus} from "react-dom";
import {InputModal} from "../clientes/ClienteModal.jsx";

export const VendasModal = ({text, modalAction, onClose, venda}) => {
    const formRef = useRef(null);

    return (
        <div className={"fixed inset-0 flex items-center justify-center bg-black/50 z-50"}
            onClick={() => {
                formRef.current?.reset();
                onClose();
            }}
        >
            <div className={"bg-gray-600 text-gray-200 rounded-2xl shadow-lg w-full max-w-lg p-6 relative"}
                onClick={(e) => e.stopPropagation()}
            >
                <Cabecalho text={text}/>
                <ModalBody modalAction={modalAction} venda={venda}
                    onClose={() => {
                        formRef.current?.reset();
                        onClose();
                    }}
                    formRef={formRef}
                />
            </div>
        </div>
    )
}

function ModalBody({modalAction, onClose, venda, formRef}) {
    const [sucesso, setSucesso] = useState(false);
    const { pending } = useFormStatus();

    return (
        <div className={"mt-4"}>
            <form ref={formRef}
                    action={async (formData) => {
                        if(venda?.codigoVenda){
                            formData.append("codigoVenda", venda.codigoVenda);
                        }
                        await modalAction(formData);
                        setSucesso(true);
                        setTimeout(() => {
                            formRef.current?.reset();
                            setSucesso(false);
                        }, 3000);
                    }}
                    className={"flex flex-col gap-2 w-full max-w-md"}
            >
                <label htmlFor="nomeCliente">Nome Cliente: </label>
                <InputModal id="nomeCliente" type="text" name="nomeCliente" autoFocus defaultValue={venda?.clienteId.nome || ""} />

                <label htmlFor="cpfCliente">CPF Cliente: </label>
                <InputModal id="cpfCliente" type="text" name="cpfCliente" defaultValue={venda?.clienteId.cpf || ""} />

                <label htmlFor="valorVenda">Valor: </label>
                <InputModal type="number" name="valorVenda" id="valorVenda" step="0.01" defaultValue={venda?.valorVenda || ""} />

                <label htmlFor="categoria">Categoria: </label>
                <select id="categoria" name="categoria" required className={"p-2 rounded-md text-black bg-gray-200"}>
                    <option defaultValue={venda?.categoria || ""}>{venda?.categoria || ""}</option>
                    <option value="carro">Carro</option>
                    <option value="moto">Moto</option>
                    <option value="imobiliario">Imobiliario</option>
                    <option value="caminhao">Caminão</option>
                    <option value="aviao">Avião</option>
                    <option value="seguro">Seguro</option>
                </select>
                <label htmlFor="observacoes">Observações </label>
                <textarea name="observacoes" id="observacoes"
                          defaultValue={venda?.observacoes || ""}
                          className={"p-2 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-gray-800 w-full h-24 resize-none"}
                />

                {sucesso && (
                    <div className={"flex flex-col items-center mt-2 animate-fade-in"}>
                        <p className={"text-green-400 font-semibold text-lg"}>Venda salva!</p>
                    </div>
                )}
                <button type="submit" disabled={pending}
                        className="bg-gray-800 hover:bg-blue-700 text-gray-200 font-semibold rounded gap-2 mt-4">
                    {pending ? "Salvando..." : "Salvar"}
                </button>
                <button type="button" 
                        onClick={() => { 
                            formRef.current?.reset();
                            onClose();
                        }} 
                        disabled={pending}
                        className={"bg-gray-800 hover:bg-gray-400 text-gray-200 font-semibold rounded gap-2"}>
                    Cancelar
                </button>
            </form>
        </div>
    )

}
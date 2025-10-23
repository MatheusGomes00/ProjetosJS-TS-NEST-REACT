import {Cabecalho} from "../ui/heading.jsx";
import {useRef, useState} from "react";
import {useFormStatus} from "react-dom";


export const ClienteModal = ({text, modalAction, onClose, cliente}) => {
    return (
        <div className={"fixed inset-0 flex items-center justify-center bg-black/50 z-50"}
             onClick={onClose}
        >
            <div className={"bg-gray-600 text-gray-200 rounded-2xl shadow-lg w-full max-w-lg p-6 relative"}
                 onClick={(e) => e.stopPropagation()}
            >
                <Cabecalho text={text}/>
                <ModalBody modalAction={modalAction} onClose={onClose} cliente={cliente} />
            </div>
        </div>
    )
}

export function InputModal({type, step, name, id, defaultValue, autoFocus}) {
    return (
        <input type={type} step={step} name={name} id={id} defaultValue={defaultValue} autoFocus={autoFocus} required
               className={"p-2 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-gray-800"}/>
    );
}

function ModalBody({modalAction, onClose, cliente}) {
    const [sucesso, setSucesso] = useState(false);
    const formRef = useRef(null);
    const { pending } = useFormStatus();

    return (
        <div className={"mt-4"}>
            <form ref={formRef}
                  action={async (formData) => {
                      await modalAction(formData);
                      setSucesso(true);
                      formRef.current?.reset();
                      setTimeout(() => {
                          setSucesso(false);
                      }, 3000);
                  }}
                  className={"flex flex-col gap-2 w-full max-w-md"}>

                <label htmlFor="nome">Nome: </label>
                <InputModal type="text" name="nome" id="nome" autoFocus defaultValue={cliente?.nome || ""}  />

                <label htmlFor="email">Email: </label>
                <InputModal type="text" name="email" id="email" defaultValue={cliente?.email || ""} />

                <label htmlFor="telefone">Telefone: </label>
                <InputModal type="text" name="telefone" id="telefone" defaultValue={cliente?.telefone || ""} />

                <label htmlFor="cidade">Cidade: </label>
                <InputModal type="text" name="cidade" id="cidade" defaultValue={cliente?.endereco.cidade || ""} />

                <label htmlFor="estado">Estado: </label>
                <InputModal type="text" name="estado" id="estado" defaultValue={cliente?.endereco.estado || ""} />

                <label htmlFor="status">Status: </label>
                <select id="status" name="status" required className={"p-2 rounded-md text-black bg-gray-200"}>
                    <option defaultValue={cliente?.status || ""}>{cliente?.status || ""}</option>
                    <option value="ativo">Ativo</option>
                    <option value="inativo">Inativo</option>
                    <option value="inadimplente">Inadimplente</option>
                    <option value="bloqueado">Bloqueado</option>
                </select>
                {sucesso && (
                    <div className={"flex flex-col items-center mt-2 animate-fade-in"}>
                        <p className={"text-green-400 font-semibold text-lg"}>Cliente salvo!</p>
                    </div>
                )}
                <button type="submit" disabled={pending}
                        className="bg-gray-800 hover:bg-blue-700 text-gray-200 font-semibold rounded gap-2 mt-4">
                    {pending ? "Salvando..." : "Salvar"}
                </button>
                <button type="button" onClick={onClose} disabled={pending}
                        className={"bg-gray-800 hover:bg-gray-400 text-gray-200 font-semibold rounded gap-2"}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}


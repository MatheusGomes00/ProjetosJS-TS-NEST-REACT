import { useRef, useState } from "react"
import {useFormStatus} from "react-dom";
import { InputModal } from "../clientes/ClienteModal"
import { BlueButton, GrayButton } from "../ui/buttons";

const InputSenha = ({ name, id}) => {
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div className="flex items-center gap-2 w-full">
            <input
                id={id}
                name={name}
                type={mostrarSenha ? "text" : "password"}
                className={"p-2 rounded-md bg-gray-200 text-black focus:outline-none focus:ring-2 focus:ring-gray-800"}
            />
            <button
                type="button"
                onClick={() => setMostrarSenha((mostrar) => !mostrar)}
                className="text-sm text-black underline"
            >
                {mostrarSenha ? "Ocultar" : "Mostrar"}
            </button>
        </div>
    )
}

export const FormularioPerfil = ({vendedor, formAction}) => {
    const formRef = useRef(null);
    const { pending } = useFormStatus();
    const [showInputSenha, setShowInputSenha] = useState(false);

    const onSubmit = async (formData) => {
        await formAction(formData)
    }

    const handleAlterarSenha = async () => {
        const form = formRef.current;
        const novaSenha = form?.novaSenha?.value;
        const repeteSenha = form?.repeteSenha?.value;
        if(novaSenha === repeteSenha) {
            console.log("Senha alterada!")
        }
    }

    return (
        <div className="mt-6 p-10">
            <form className={"flex flex-col gap-2 w-full max-w-md"}
                ref={formRef}
                action={onSubmit}
            >
                <label htmlFor="nomeVendedor" className="text-gray-100 font-semibold">Nome:</label>
                <InputModal type="text" name="nomeVendedor" id="nomeVendedor" defaultValue={vendedor?.nome || ""}/>
                
                <label htmlFor="email" className="text-gray-100 font-semibold">Email:</label>
                <InputModal type="email" name="email" id="email" defaultValue={vendedor?.email || ""}/>
                
                <label htmlFor="ramal" className="text-gray-100 font-semibold">Ramal:</label>
                <InputModal type="text" name="ramal" id="ramal" defaultValue={vendedor?.ramal || ""}/>
                
                <BlueButton type="button"
                        onClick={() => setShowInputSenha((show) => !show)}
                        className="w-fit"                    
                    >
                    {showInputSenha ? "Manter Senha" : "Alterar Senha"}
                </BlueButton>
                {showInputSenha && (
                    <div className={"flex flex-col gap-2 w-full max-w-md"}>
                        <label htmlFor="novaSenha" className="text-gray-100 font-semibold">Nova Senha: </label>
                        <InputSenha name="novaSenha" id="novaSenha" />
                        <label htmlFor="repeteSenha" className="text-gray-100 font-semibold">Repetir Senha: </label>
                        <InputSenha name="repeteSenha" id="repeteSenha" />
                        <div className="flex gap-4">
                            <BlueButton onClick={() => {
                                            handleAlterarSenha
                                            setTimeout(() => {
                                                setShowInputSenha(false);
                                            }, 3000);                                        
                                        }}
                            >
                                Salvar
                            </BlueButton>
                            <GrayButton onClick={() => setShowInputSenha(false)}>
                                Cancelar
                            </GrayButton>
                        </div>
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
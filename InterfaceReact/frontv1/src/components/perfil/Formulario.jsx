import { InputModal } from "../clientes/ClienteModal"

export const FormularioPerfil = ({vendedor}) => {

    return (
        <div className="mt-6 p-10">
            <form className={"flex flex-col gap-2 w-full max-w-md"}>
                <label htmlFor="nomeVendedor">Nome</label>
                <InputModal type="text" name="nomeVendedor" id="nomeVendedor" defaultValue={vendedor?.nome || ""}/>
                
                <label htmlFor="email">Email</label>
                <InputModal type="text" name="email" id="email" defaultValue={vendedor?.email || ""}/>
                
                <label htmlFor="ramal">Ramal</label>
                <InputModal type="text" name="ramal" id="ramal" defaultValue={vendedor?.ramal || ""}/>
                
            </form>
        </div>
    )
}
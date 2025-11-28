import React from 'react';
import { Cabecalho } from '../ui/heading';
import { BlueButton, GreenButton } from '../ui/buttons';
import { FormularioPerfil } from './Formulario';

const Perfil = () => {
    return (
        <div className='p-6'>
            <Cabecalho text="Perfil Vendedor">
                <div className='flex gap-4 mt-6'>
                    <BlueButton onClick={() => console.log("Editando.")}> 
                        Editar Cadastro
                    </BlueButton>
                    <GreenButton onClick={() => console.log("Adicionar novo vendedor.")}>
                        Adicionar Novo
                    </GreenButton>
                </div>
            </Cabecalho>
            <div>
                <FormularioPerfil/>
            </div>
        </div>        
    );
};

export default Perfil;
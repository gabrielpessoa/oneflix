import React from 'react';
import PaginaDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return(
        <PaginaDefault>
            <h1>Cadastro de categoria</h1>

            <Link to="/">
                ir para home
            </Link>
        </PaginaDefault>
    )
}

export default CadastroCategoria;
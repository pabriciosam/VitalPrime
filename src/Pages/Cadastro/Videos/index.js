import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Componentes/PageDefault';

function CadastroVideo() {
    return (
      <PageDefault>
         <h1>Cadastro de Video</h1>

        <Link to="/Cadastro/Categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

export default CadastroVideo;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../Componentes/PageDefault';
import FormField from '../../../Componentes/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }
    const [categorias, setCategorias] = useState([]);
    const [valores, setValores] = useState(valoresIniciais);
    
    
    function setarValor(chave, valor){
        setValores({
            ...valores,
            [chave]: valor
        })
    };

    function handleChange(infosDaCategoria){
        setarValor(
            infosDaCategoria.target.getAttribute('name'),
            infosDaCategoria.target.value
          );
    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {valores.nome}</h1>
            <form onSubmit={function handleSubmit(infosDaCategoria){
                infosDaCategoria.preventDefault();
                setCategorias([
                    ...categorias,
                    valores
                ]);

                setValores(valoresIniciais)
            }}>
            
                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textArea"
                    name="descricao"
                    value={valores.descricao}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Descrição:
                        <textarea type="text"
                            name="descricao"
                            value={valores.descricao}
                            onChange={handleChange}/>
                    </label>
                </div> */}

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={handleChange}
                />

                {/* <div>
                    <label>
                        Cor:
                        <input type="color"
                            name="cor"
                            value={valores.cor}
                            onChange={handleChange}/>
                    </label>
                </div> */}

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return(
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para a home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;
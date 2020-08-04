/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';
import PageDefault from '../../../Componentes/PageDefault';
import FormField from '../../../Componentes/FormField';
import useForm from '../../../hooks/useForm';
import Buttons from '../../../Componentes/Buttons';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleChange } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  useEffect(() => {
    videosRepository
      .getAll()
      .then((videosFromServer) => {
        setVideos(videosFromServer);
      });
  }, []);


  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const cadegoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: cadegoriaEscolhida.id,
        })
          .then(() => {
            console.log('Cadatrado com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          type="text"
          value={values.titulo}
          name="titulo"
          onChange={handleChange}
        />
        <FormField
          label="URL"
          type="text"
          value={values.url}
          name="url"
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          type="text"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
          suggestions={
            categoryTitles
            }
        />
        <Buttons type="submit">
          Incluir
        </Buttons>
      </form>

      {/* <Container>
        <Row sm={4}>
          <Col>
            {videos.titulo}
          </Col>
        </Row>
      </Container> */}

      <Link to="/Cadastro/Categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;

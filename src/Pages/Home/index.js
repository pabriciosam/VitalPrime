import React, { useEffect, useState } from 'react';
import BannerMain from '../../Componentes/BannerMain';
import Carousel from '../../Componentes/Carousel';
import cateriasRepository from '../../repositories/categorias';
import PageDefault from '../../Componentes/PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    cateriasRepository.getAllWhithVideos()
      .then((categoriasComVideo) => {
        setDadosIniciais(categoriasComVideo);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<div>Carregando...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Existem várias formas de adorar a Deus, uma delas é fazendo muuuuito barulho!"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>
  );
}

export default Home;

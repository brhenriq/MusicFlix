import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import TamplateBase from '../../components/TemplateBase';
import categoriasRepository from '../../repositories/categorias';
import Loading from '../../components/Loading';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(()=>{
    categoriasRepository.getAllWithVideos()
    .then((categoriasComVideo) => {
      setDadosIniciais(categoriasComVideo);
    }).catch((err) => {
      console.log(err.message);
    });
  }, []);

  return (
    <TamplateBase paddingAll={0}>
      {dadosIniciais.length === 0 && (<Loading/>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={dadosIniciais[0].videos[0].description}
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

    </TamplateBase>
  );
}

export default Home;
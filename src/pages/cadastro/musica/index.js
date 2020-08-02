import React, { useEffect, useState } from  'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroMusica(){
  const history = useHistory();
  const [categorias, setCategorias] = useState();
  const tituloCategorias = categorias ? categorias.map(({ titulo }) => titulo) : [];


  const { handleValues, values } = useForm({
    titulo: '',
    url: '',
    categoriaId: ''
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categorias) => {
        setCategorias(categorias);
      }); 
    }, []);
    
  return(
    <TemplateBase>
      <h1>
        Cadastro de Música
      </h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => {
          return categoria.titulo === values.categoria;
        });

        videosRepository.create({
          categoriaId: categoriaEscolhida.id,
          titulo: values.titulo,
          url: values.url
        })
          .then(() => {
            history.push('/');
          });

      }}>
        <FormField
          label="Título do vídeo"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleValues}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleValues}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleValues}
          suggestions ={tituloCategorias}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </TemplateBase>
  )
}

export default CadastroMusica;